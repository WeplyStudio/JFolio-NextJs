
"use client";

import { useState, useRef, ChangeEvent, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { UploadCloud, Palette, Wand2, Download, RotateCcw, Loader2 } from 'lucide-react';
import type { PhotoEditorFilters, AISuggestion, ColorGradingSuggesterInput, ColorGradingSuggesterOutput } from '@/lib/types';
import { initialFilters } from '@/lib/data';
import { colorGradingSuggester } from '@/ai/flows/color-grading-suggester';

const filterDefinitions = [
  { name: 'brightness', label: 'Brightness', min: 0, max: 2, step: 0.01, defaultValue: initialFilters.brightness },
  { name: 'contrast', label: 'Contrast', min: 0, max: 2, step: 0.01, defaultValue: initialFilters.contrast },
  { name: 'saturate', label: 'Saturation', min: 0, max: 2, step: 0.01, defaultValue: initialFilters.saturate },
  { name: 'grayscale', label: 'Grayscale', min: 0, max: 1, step: 0.01, defaultValue: initialFilters.grayscale },
  { name: 'sepia', label: 'Sepia', min: 0, max: 1, step: 0.01, defaultValue: initialFilters.sepia },
  { name: 'hueRotate', label: 'Hue Rotate', min: 0, max: 359, step: 1, defaultValue: initialFilters.hueRotate },
  { name: 'invert', label: 'Invert', min: 0, max: 1, step: 0.01, defaultValue: initialFilters.invert },
  { name: 'blur', label: 'Blur (px)', min: 0, max: 10, step: 0.1, defaultValue: initialFilters.blur },
] as const; // Use "as const" for stricter typing on filter names


export function PhotoEditor() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null);
  const [filters, setFilters] = useState<PhotoEditorFilters>(initialFilters);
  const [aiSuggestions, setAiSuggestions] = useState<AISuggestion[]>([]);
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const [activeSuggestionName, setActiveSuggestionName] = useState<string | null>(null);
  const { toast } = useToast();
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Reset AI suggestions and active suggestion when image changes
    setAiSuggestions([]);
    setActiveSuggestionName(null);
  }, [uploadedImage]);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({ title: "Gambar terlalu besar", description: "Silakan unggah gambar di bawah 5MB.", variant: "destructive" });
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setUploadedImage(result);
        resetFilters(); // Reset filters when a new image is uploaded

        // Get image dimensions
        const img = document.createElement('img');
        img.onload = () => {
          setImageDimensions({ width: img.width, height: img.height });
        };
        img.src = result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFilterChange = (filterName: keyof PhotoEditorFilters, value: number) => {
    setFilters(prev => ({ ...prev, [filterName]: value }));
    setActiveSuggestionName(null); // Deselect AI suggestion if manual adjustments are made
  };

  const getCssFilterString = (currentFilters: Partial<PhotoEditorFilters>): string => {
    return Object.entries(currentFilters)
      .map(([key, value]) => {
        if (value === undefined) return '';
        switch (key as keyof PhotoEditorFilters) {
          case 'hueRotate': return `hue-rotate(${value}deg)`;
          case 'blur': return `blur(${value}px)`;
          default: return `${key}(${value})`;
        }
      })
      .filter(Boolean)
      .join(' ');
  };
  
  const cssFilterStyle = { filter: getCssFilterString(filters) };

  const fetchAISuggestions = async () => {
    if (!uploadedImage) {
      toast({ title: "Tidak ada gambar diunggah", description: "Silakan unggah gambar terlebih dahulu.", variant: "destructive" });
      return;
    }
    setIsLoadingAI(true);
    setActiveSuggestionName(null);
    try {
      const input: ColorGradingSuggesterInput = { imageDataUri: uploadedImage };
      const result: ColorGradingSuggesterOutput = await colorGradingSuggester(input);
      if (result.suggestions && result.suggestions.length > 0) {
        setAiSuggestions(result.suggestions);
        toast({ title: "Saran AI Siap!", description: "Pilih gaya atau sesuaikan manual." });
      } else {
        toast({ title: "Tidak Ada Saran AI", description: "Tidak dapat menghasilkan saran. Coba edit manual.", variant: "default" });
        setAiSuggestions([]);
      }
    } catch (error) {
      console.error("Error fetching AI suggestions:", error);
      toast({ title: "Kesalahan AI", description: "Gagal mendapatkan saran AI.", variant: "destructive" });
      setAiSuggestions([]);
    } finally {
      setIsLoadingAI(false);
    }
  };

  const applyAISuggestion = (suggestion: AISuggestion) => {
    const newFilters = { ...initialFilters }; // Start with defaults
    for (const key in suggestion.filters) {
        const filterKey = key as keyof PhotoEditorFilters;
        if (suggestion.filters[filterKey] !== undefined) {
            // @ts-ignore
            newFilters[filterKey] = suggestion.filters[filterKey];
        }
    }
    setFilters(newFilters);
    setActiveSuggestionName(suggestion.name);
    toast({ title: `Diterapkan: ${suggestion.name}`, description: suggestion.description });
  };

  const resetFilters = () => {
    setFilters(initialFilters);
    setActiveSuggestionName(null);
    toast({ title: "Filter Diatur Ulang", description: "Gambar dikembalikan ke asli." });
  };

  const downloadImage = () => {
    if (!uploadedImage || !imageDimensions) return;

    const canvas = document.createElement('canvas');
    canvas.width = imageDimensions.width;
    canvas.height = imageDimensions.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new window.Image();
    img.onload = () => {
      ctx.filter = getCssFilterString(filters);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
      const link = document.createElement('a');
      link.download = `edited-photo-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast({ title: "Gambar Diunduh", description: "Periksa folder unduhan Anda." });
    };
    img.onerror = () => {
        toast({ title: "Kesalahan Unduh", description: "Tidak dapat memuat gambar untuk diunduh.", variant: "destructive"});
    }
    img.src = uploadedImage;
  };

  return (
    <Card className="shadow-xl border-border/60 rounded-xl bg-card overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl text-primary font-headline">
          <Palette className="mr-2 h-6 w-6" /> Editor Foto AI
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Unggah gambar, dapatkan saran pewarnaan AI, atau sesuaikan secara manual.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Left Column: Upload & Image Preview */}
          <div className="space-y-4">
            <Card className="bg-background/50 p-4 border-dashed border-primary/50">
              <Label htmlFor="imageUpload" className="text-foreground/80 mb-2 block text-sm font-medium">Unggah Foto Anda</Label>
              <Input
                id="imageUpload"
                type="file"
                accept="image/png, image/jpeg, image/webp"
                onChange={handleImageUpload}
                className="block w-full text-sm text-foreground file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer"
              />
              <p className="text-xs text-muted-foreground mt-1">Maks 5MB. JPG, PNG, WebP.</p>
            </Card>

            {uploadedImage && (
              <div className="relative w-full aspect-video bg-muted rounded-md overflow-hidden border border-border shadow-inner">
                <Image
                  ref={imageRef}
                  src={uploadedImage}
                  alt="Pratinjau unggahan"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ ...cssFilterStyle, objectFit: 'contain' }}
                  className="transition-all duration-150"
                />
              </div>
            )}
             {!uploadedImage && (
                <div className="relative w-full aspect-video bg-muted/30 rounded-md overflow-hidden border border-border/30 shadow-inner flex flex-col items-center justify-center text-muted-foreground">
                    <UploadCloud className="h-16 w-16 mb-2 opacity-50" />
                    <p>Gambar Anda akan muncul di sini</p>
                </div>
            )}
          </div>

          {/* Right Column: AI Suggestions & Manual Controls */}
          <div className="space-y-6">
            <Card className="bg-background/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center text-primary/90">
                  <Wand2 className="mr-2 h-5 w-5" /> Saran AI
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button onClick={fetchAISuggestions} disabled={!uploadedImage || isLoadingAI} className="w-full">
                  {isLoadingAI ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                  {isLoadingAI ? "Memproses..." : "Dapatkan Gaya Warna AI"}
                </Button>
                {aiSuggestions.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
                    {aiSuggestions.map((suggestion) => (
                      <Button
                        key={suggestion.name}
                        variant={activeSuggestionName === suggestion.name ? "default" : "outline"}
                        size="sm"
                        onClick={() => applyAISuggestion(suggestion)}
                        className="text-xs h-auto py-1.5 flex flex-col items-center"
                        title={suggestion.description}
                      >
                        <span className="font-medium">{suggestion.name}</span>
                        <span className="text-muted-foreground text-[10px] leading-tight truncate w-full text-center group-hover:text-accent-foreground">
                          {suggestion.description.length > 20 ? suggestion.description.substring(0,18) + '...' : suggestion.description}
                        </span>
                      </Button>
                    ))}
                  </div>
                )}
                {!isLoadingAI && uploadedImage && aiSuggestions.length === 0 && (
                    <p className="text-xs text-muted-foreground text-center pt-2">Klik "Dapatkan Gaya Warna AI" untuk melihat saran.</p>
                )}
              </CardContent>
            </Card>

            <Card className="bg-background/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center text-primary/90">
                  <Palette className="mr-2 h-5 w-5" /> Penyesuaian Manual
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-2">
                {filterDefinitions.map(filter => (
                  <div key={filter.name} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <Label htmlFor={filter.name} className="text-xs font-medium text-foreground/80">{filter.label}</Label>
                      <span className="text-xs text-primary font-mono bg-primary/10 px-1.5 py-0.5 rounded">
                        {filters[filter.name as keyof PhotoEditorFilters].toFixed(filter.step < 1 ? 2 : 0)}
                        {filter.name === 'hueRotate' ? '°' : filter.name === 'blur' ? 'px' : ''}
                      </span>
                    </div>
                    <Slider
                      id={filter.name}
                      min={filter.min}
                      max={filter.max}
                      step={filter.step}
                      value={[filters[filter.name as keyof PhotoEditorFilters]]}
                      onValueChange={(value) => handleFilterChange(filter.name as keyof PhotoEditorFilters, value[0])}
                      disabled={!uploadedImage}
                      className="[&>span:first-child]:h-3 [&>span>span]:h-3 [&>span>span]:w-3 [&>span>span]:border-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3 pt-6 border-t border-border/60 bg-muted/30">
        <Button onClick={resetFilters} variant="outline" disabled={!uploadedImage}>
          <RotateCcw className="mr-2 h-4 w-4" /> Atur Ulang
        </Button>
        <Button onClick={downloadImage} disabled={!uploadedImage}>
          <Download className="mr-2 h-4 w-4" /> Unduh Gambar
        </Button>
      </CardFooter>
    </Card>
  );
}
