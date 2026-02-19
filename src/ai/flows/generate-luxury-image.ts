'use server';
/**
 * @fileOverview This file implements a Genkit flow for generating luxury lifestyle images from a text prompt.
 *
 * - generateLuxuryImage - A function that generates a high-quality, professional-looking image.
 * - GenerateLuxuryImageInput - The input type for the generateLuxuryImage function.
 * - GenerateLuxuryImageOutput - The return type for the generateLuxuryImage function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

/**
 * Schema for the input of the generateLuxuryImage flow.
 */
const GenerateLuxuryImageInputSchema = z.object({
  description: z
    .string()
    .describe('A detailed text prompt describing the desired luxury lifestyle image.'),
});
export type GenerateLuxuryImageInput = z.infer<typeof GenerateLuxuryImageInputSchema>;

/**
 * Schema for the output of the generateLuxuryImage flow.
 */
const GenerateLuxuryImageOutputSchema = z.object({
  imageUrl: z
    .string()
    .describe('The data URI of the generated high-quality luxury lifestyle image.'),
});
export type GenerateLuxuryImageOutput = z.infer<typeof GenerateLuxuryImageOutputSchema>;

/**
 * Generates a high-quality, professional-looking image that conveys power, status, and presence
 * based on a text prompt.
 *
 * @param input - An object containing the text description for the image.
 * @returns A promise that resolves to an object containing the data URI of the generated image.
 */
export async function generateLuxuryImage(
  input: GenerateLuxuryImageInput
): Promise<GenerateLuxuryImageOutput> {
  return generateLuxuryImageFlow(input);
}

/**
 * Defines the Genkit flow for generating luxury lifestyle images.
 */
const generateLuxuryImageFlow = ai.defineFlow(
  {
    name: 'generateLuxuryImageFlow',
    inputSchema: GenerateLuxuryImageInputSchema,
    outputSchema: GenerateLuxuryImageOutputSchema,
  },
  async (input) => {
    const fullPrompt = `Generate a high-quality, professional, photorealistic image that conveys luxury, power, status, and presence. Ensure the image is visually stunning and aspirational. Focus on the following detailed description: "${input.description}"`;

    const { media } = await ai.generate({
      model: googleAI.model('imagen-4.0-fast-generate-001'), // Using Imagen 4 for high-quality image generation
      prompt: fullPrompt,
      config: {
        // Adjust safety settings to allow generation of diverse luxury content if appropriate
        safetySettings: [
          {
            category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
            threshold: 'BLOCK_NONE',
          },
        ],
      },
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate image or retrieve its URL.');
    }

    return { imageUrl: media.url };
  }
);
