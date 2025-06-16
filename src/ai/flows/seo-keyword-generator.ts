'use server';

/**
 * @fileOverview SEO Keyword Generator AI agent.
 *
 * - generateSeoKeywords - A function that handles the generation of SEO keywords.
 * - SeoKeywordGeneratorInput - The input type for the generateSeoKeywords function.
 * - SeoKeywordGeneratorOutput - The return type for the generateSeoKeywords function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SeoKeywordGeneratorInputSchema = z.object({
  portfolioContent: z
    .string()
    .describe('The content of the portfolio website.'),
});
export type SeoKeywordGeneratorInput = z.infer<typeof SeoKeywordGeneratorInputSchema>;

const SeoKeywordGeneratorOutputSchema = z.object({
  keywords: z
    .string()
    .describe('A comma-separated list of relevant SEO keywords.'),
});
export type SeoKeywordGeneratorOutput = z.infer<typeof SeoKeywordGeneratorOutputSchema>;

export async function generateSeoKeywords(
  input: SeoKeywordGeneratorInput
): Promise<SeoKeywordGeneratorOutput> {
  return seoKeywordGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'seoKeywordGeneratorPrompt',
  input: {schema: SeoKeywordGeneratorInputSchema},
  output: {schema: SeoKeywordGeneratorOutputSchema},
  prompt: `You are an SEO expert. Generate a comma-separated list of SEO keywords for the following portfolio content:\n\nContent: {{{portfolioContent}}}`,
});

const seoKeywordGeneratorFlow = ai.defineFlow(
  {
    name: 'seoKeywordGeneratorFlow',
    inputSchema: SeoKeywordGeneratorInputSchema,
    outputSchema: SeoKeywordGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
