
'use server';
/**
 * @fileOverview An AI agent for suggesting color grading styles for photos.
 *
 * - colorGradingSuggester - A function that suggests color grading styles.
 * - ColorGradingSuggesterInput - The input type for the function.
 * - ColorGradingSuggesterOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import type { ColorGradingSuggesterInput, ColorGradingSuggesterOutput, AISuggestion, PhotoEditorFilters } from '@/lib/types';

const ColorGradingSuggesterInputSchema = z.object({
  imageDataUri: z
    .string()
    .describe(
      "A photo image as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});

// Define a Zod schema for individual filter values, making them all optional
const FilterValueSchema = z.object({
    brightness: z.number().min(0).max(2).optional().describe("Range 0-2, default 1. Example: 1.1 for 110%"),
    contrast: z.number().min(0).max(2).optional().describe("Range 0-2, default 1. Example: 1.2 for 120%"),
    saturate: z.number().min(0).max(2).optional().describe("Range 0-2, default 1. Example: 0.8 for 80%"),
    grayscale: z.number().min(0).max(1).optional().describe("Range 0-1, default 0. Example: 1 for 100%"),
    sepia: z.number().min(0).max(1).optional().describe("Range 0-1, default 0. Example: 0.5 for 50%"),
    hueRotate: z.number().min(0).max(359).optional().describe("Range 0-359 degrees, default 0. Example: 90 for 90deg"),
    invert: z.number().min(0).max(1).optional().describe("Range 0-1, default 0. Example: 0.2 for 20%"),
    blur: z.number().min(0).max(10).optional().describe("Range 0-10 pixels, default 0. Example: 1.5 for 1.5px"),
}).describe("CSS filter values. Omit or use default if not relevant for a style.");


const AISuggestionSchema = z.object({
  name: z.string().describe("A short, catchy name for the color grading style (e.g., 'Vintage Warmth', 'Cinematic Cool'). Max 3 words."),
  description: z.string().describe("A brief description of the style's mood or effect. Max 1-2 sentences."),
  filters: FilterValueSchema,
});

const ColorGradingSuggesterOutputSchema = z.object({
  suggestions: z.array(AISuggestionSchema).min(3).max(5).describe("An array of 3 to 5 color grading suggestions."),
});


export async function colorGradingSuggester(
  input: ColorGradingSuggesterInput
): Promise<ColorGradingSuggesterOutput> {
  const parsedInput = ColorGradingSuggesterInputSchema.safeParse(input);
  if (!parsedInput.success) {
    console.error("Invalid input for color grading suggester:", parsedInput.error.flatten());
    throw new Error("Invalid input: " + parsedInput.error.issues.map(i => i.message).join(', '));
  }
  return colorGradingSuggesterFlow(parsedInput.data);
}

const prompt = ai.definePrompt({
  name: 'colorGradingSuggestionPrompt',
  input: {schema: ColorGradingSuggesterInputSchema},
  output: {schema: ColorGradingSuggesterOutputSchema},
  prompt: `You are an expert photo editing assistant. Analyze the provided image and suggest 3 to 5 distinct and creative color grading styles.
For each style, you MUST provide:
1.  A short, catchy 'name' (e.g., "Vintage Warmth", "Urban Noir", "Pastel Dream"). Max 3 words.
2.  A brief 'description' of the style's mood or effect (e.g., "Gives a nostalgic, sun-kissed look.", "Creates a gritty, high-contrast urban feel."). Max 1-2 sentences.
3.  A 'filters' object containing specific CSS filter values to achieve the style. The available filter properties and their typical ranges/defaults are:
    - brightness: number (0-2, default 1). Example: 1.1 for 110%.
    - contrast: number (0-2, default 1). Example: 1.2 for 120%.
    - saturate: number (0-2, default 1). Example: 0.8 for 80% saturation.
    - grayscale: number (0-1, default 0). Example: 1 for 100% grayscale.
    - sepia: number (0-1, default 0). Example: 0.5 for 50% sepia.
    - hueRotate: number (0-359 degrees, default 0). Example: 90 for 90deg hue rotation.
    - invert: number (0-1, default 0). Example: 0.1 for 10% inversion.
    - blur: number (0-10 pixels, default 0). Example: 0.5 for 0.5px blur.

    If a filter property is not relevant for a particular style or should remain at its default, you can omit it from the 'filters' object for that style or explicitly set its default value.
    Aim for a diverse set of suggestions that showcase different moods (e.g., warm, cool, dramatic, soft, vibrant, monochrome).

Consider the image content (subject, lighting, colors) when making suggestions.

Image to analyze:
{{media url=imageDataUri}}

Generate the color grading suggestions now.
`,
    config: {
        temperature: 0.7, // Encourage creative suggestions
        safetySettings: [ // Lenient safety for creative image processing
            { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
        ]
    }
});

const colorGradingSuggesterFlow = ai.defineFlow(
  {
    name: 'colorGradingSuggesterFlow',
    inputSchema: ColorGradingSuggesterInputSchema,
    outputSchema: ColorGradingSuggesterOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    if (!output || !output.suggestions || output.suggestions.length === 0) {
        console.error("Color grading suggestion returned no output or empty suggestions.");
        // Fallback to a predefined set of simple suggestions if AI fails
        return {
            suggestions: [
                { name: "Slight Boost", description: "Subtle enhancement.", filters: { brightness: 1.05, contrast: 1.05, saturate: 1.1 } },
                { name: "Cool Tone", description: "A slightly cooler feel.", filters: { saturate: 1.1, hueRotate: 5 } }, // Example hueRotate slightly towards blueish
                { name: "Simple B&W", description: "Classic black and white.", filters: { grayscale: 1, contrast: 1.1 } },
            ]
        };
    }
    // Ensure each suggestion has a filters object, even if empty, to prevent runtime errors if AI omits it.
    const validatedSuggestions = output.suggestions.map(s => ({
        ...s,
        filters: s.filters || {} 
    }));
    return { suggestions: validatedSuggestions };
  }
);
