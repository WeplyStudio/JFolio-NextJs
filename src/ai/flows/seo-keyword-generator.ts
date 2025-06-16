
'use server';

/**
 * @fileOverview SEO Keyword Generator AI agent for portfolio websites.
 *
 * - generateSeoKeywords - A function that handles the generation of SEO keywords based on portfolio content.
 * - SeoKeywordGeneratorInput - The input type for the generateSeoKeywords function.
 * - SeoKeywordGeneratorOutput - The return type for the generateSeoKeywords function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import type { SeoKeywordGeneratorInput, SeoKeywordGeneratorOutput } from '@/lib/types'; // Using types from lib

const SeoKeywordGeneratorInputSchema = z.object({
  portfolioContent: z
    .string()
    .min(50, { message: "Portfolio content should be at least 50 characters."})
    .describe('The content of the portfolio website, including skills, project descriptions, bio, etc.'),
});

const SeoKeywordGeneratorOutputSchema = z.object({
  keywords: z
    .string()
    .describe('A comma-separated list of 5-10 relevant SEO keywords, optimized for a personal portfolio website.'),
});

export async function generateSeoKeywords(
  input: SeoKeywordGeneratorInput
): Promise<SeoKeywordGeneratorOutput> {
  // Validate input using the Zod schema before calling the flow
  const parsedInput = SeoKeywordGeneratorInputSchema.safeParse(input);
  if (!parsedInput.success) {
    // Handle validation error, perhaps throw an error or return a specific error structure
    // For simplicity, we'll log and throw, but in a real app, you might return a structured error.
    console.error("Invalid input for SEO keyword generation:", parsedInput.error.flatten());
    throw new Error("Invalid input: " + parsedInput.error.issues.map(i => i.message).join(', '));
  }
  return seoKeywordGeneratorFlow(parsedInput.data);
}

const prompt = ai.definePrompt({
  name: 'portfolioSeoKeywordGeneratorPrompt',
  input: {schema: SeoKeywordGeneratorInputSchema},
  output: {schema: SeoKeywordGeneratorOutputSchema},
  prompt: `You are an expert SEO consultant specializing in personal portfolio websites for developers, designers, and creative professionals.
Your task is to generate a concise, comma-separated list of 5 to 10 highly relevant SEO keywords based on the provided portfolio content.
Focus on keywords that highlight unique skills, niche specializations, and the individual's professional identity. Avoid overly generic terms unless they are highly relevant in context.

Portfolio Content:
{{{portfolioContent}}}

Generate the SEO keywords now.
`,
  // Example config for safety settings if needed, adjust thresholds as necessary
  // config: {
  //   safetySettings: [
  //     {
  //       category: 'HARM_CATEGORY_HARASSMENT',
  //       threshold: 'BLOCK_MEDIUM_AND_ABOVE',
  //     },
  //   ],
  // },
});

const seoKeywordGeneratorFlow = ai.defineFlow(
  {
    name: 'portfolioSeoKeywordGeneratorFlow',
    inputSchema: SeoKeywordGeneratorInputSchema,
    outputSchema: SeoKeywordGeneratorOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    if (!output) {
        // This case should ideally be handled by Genkit or the model returning an error or empty/default output based on schema.
        // If output can be null/undefined, throw an error or return a default.
        console.error("SEO Keyword generation returned no output.");
        throw new Error("Failed to generate SEO keywords: No output from model.");
    }
    // Ensure keywords are comma-separated and trimmed
    const keywordsArray = output.keywords.split(',').map(k => k.trim()).filter(k => k.length > 0);
    return { keywords: keywordsArray.join(', ') };
  }
);
