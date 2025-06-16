
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { generateSeoKeywords, type SeoKeywordGeneratorInput, type SeoKeywordGeneratorOutput } from '@/ai/flows/seo-keyword-generator';
import { Wand2, Loader2, Copy, Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function SeoKeywordGeneratorForm() {
  const [portfolioContent, setPortfolioContent] = useState<string>("");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedContent = portfolioContent.trim();
    if (trimmedContent.length < 50) {
      toast({
        title: "Input Terlalu Pendek",
        description: "Harap masukkan setidaknya 50 karakter tentang portofolio Anda.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setKeywords([]);
    try {
      const input: SeoKeywordGeneratorInput = { portfolioContent: trimmedContent };
      const result: SeoKeywordGeneratorOutput = await generateSeoKeywords(input);
      setKeywords(result.keywords.split(',').map(k => k.trim()).filter(k => k));
      toast({
        title: "Kata Kunci Dihasilkan!",
        description: "Berhasil menghasilkan kata kunci SEO.",
        variant: "default",
      });
    } catch (error) {
      console.error("Error generating SEO keywords:", error);
      let errorMessage = "Gagal menghasilkan kata kunci SEO. Silakan coba lagi.";
      if (error instanceof Error && error.message.includes("Invalid input")) {
        errorMessage = error.message; // Show specific Zod error message if available
      }
      toast({
        title: "Kesalahan",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (keywords.length > 0) {
      navigator.clipboard.writeText(keywords.join(', '));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({ title: "Disalin ke clipboard!", variant: "default" });
    }
  };

  return (
    <Card className="shadow-xl border-border/60 rounded-xl bg-card">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl text-primary font-headline">
          <Wand2 className="mr-2 h-6 w-6" /> Generator Kata Kunci SEO AI
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Masukkan konten tentang portofolio Anda (misalnya, keahlian, deskripsi proyek, tentang saya - minimal 50 karakter) untuk menghasilkan kata kunci SEO yang relevan.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="portfolioContent" className="text-foreground/80">Konten Anda (min. 50 karakter)</Label>
            <Textarea
              id="portfolioContent"
              value={portfolioContent}
              onChange={(e) => setPortfolioContent(e.target.value)}
              placeholder="Jelaskan keahlian, proyek, layanan Anda, dan apa yang membuat portofolio Anda unik..."
              rows={8}
              className="mt-1 bg-background border-border focus:border-primary focus:ring-primary"
              disabled={isLoading}
              aria-describedby="content-error"
            />
            {portfolioContent.trim().length > 0 && portfolioContent.trim().length < 50 && (
                 <p id="content-error" className="mt-1 text-sm text-destructive">
                    Konten minimal 50 karakter. Saat ini: {portfolioContent.trim().length}
                </p>
            )}
          </div>
          <Button type="submit" disabled={isLoading || (portfolioContent.trim().length > 0 && portfolioContent.trim().length < 50) } className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105 shadow-md">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Menghasilkan...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-4 w-4" />
                Hasilkan Kata Kunci
              </>
            )}
          </Button>
        </form>
      </CardContent>
      {keywords.length > 0 && (
        <CardFooter className="flex-col items-start space-y-4 pt-6 border-t border-border/60">
            <div className="flex justify-between items-center w-full">
              <h4 className="text-lg font-semibold text-foreground">Kata Kunci yang Dihasilkan:</h4>
              <Button onClick={handleCopy} variant="ghost" size="sm" className="text-primary hover:text-primary/80 hover:bg-primary/10">
                {copied ? <Check className="h-4 w-4 mr-2 text-green-500" /> : <Copy className="h-4 w-4 mr-2" />}
                {copied ? 'Disalin!' : 'Salin'}
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword, index) => (
                <Badge key={index} variant="outline" className="px-3 py-1 text-sm border-primary/50 text-primary bg-primary/10 hover:bg-primary/20 cursor-default">
                  {keyword}
                </Badge>
              ))}
            </div>
        </CardFooter>
      )}
    </Card>
  );
}
