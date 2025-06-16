
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
    if (!portfolioContent.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter some content about your portfolio.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setKeywords([]);
    try {
      const input: SeoKeywordGeneratorInput = { portfolioContent };
      const result: SeoKeywordGeneratorOutput = await generateSeoKeywords(input);
      setKeywords(result.keywords.split(',').map(k => k.trim()).filter(k => k));
      toast({
        title: "Keywords Generated!",
        description: "Successfully generated SEO keywords.",
        variant: "default", // Use default for success, it will pick up primary theme
      });
    } catch (error) {
      console.error("Error generating SEO keywords:", error);
      toast({
        title: "Error",
        description: "Failed to generate SEO keywords. Please try again.",
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
      toast({ title: "Copied to clipboard!", variant: "default" });
    }
  };

  return (
    <Card className="shadow-xl border-border/60 rounded-xl bg-card">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl text-primary font-headline">
          <Wand2 className="mr-2 h-6 w-6" /> AI SEO Keyword Generator
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Enter content about your portfolio (e.g., skills, project descriptions, about me) to generate relevant SEO keywords.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="portfolioContent" className="text-foreground/80">Your Content</Label>
            <Textarea
              id="portfolioContent"
              value={portfolioContent}
              onChange={(e) => setPortfolioContent(e.target.value)}
              placeholder="Describe your skills, projects, services, and what makes your portfolio unique..."
              rows={8}
              className="mt-1 bg-background border-border focus:border-primary focus:ring-primary"
              disabled={isLoading}
            />
          </div>
          <Button type="submit" disabled={isLoading} className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105 shadow-md">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-4 w-4" />
                Generate Keywords
              </>
            )}
          </Button>
        </form>
      </CardContent>
      {keywords.length > 0 && (
        <CardFooter className="flex-col items-start space-y-4 pt-6 border-t border-border/60">
            <div className="flex justify-between items-center w-full">
              <h4 className="text-lg font-semibold text-foreground">Generated Keywords:</h4>
              <Button onClick={handleCopy} variant="ghost" size="sm" className="text-primary hover:text-primary/80 hover:bg-primary/10">
                {copied ? <Check className="h-4 w-4 mr-2 text-green-500" /> : <Copy className="h-4 w-4 mr-2" />}
                {copied ? 'Copied!' : 'Copy'}
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
