'use server';
/**
 * @fileOverview An AI agent that enhances user-provided image generation prompts for luxury aesthetics.
 *
 * - enhanceImagePrompt - A function that enhances an image generation prompt.
 * - EnhanceImagePromptInput - The input type for the enhanceImagePrompt function.
 * - EnhanceImagePromptOutput - The return type for the enhanceImagePrompt function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const EnhanceImagePromptInputSchema = z.object({
  userPrompt: z
    .string()
    .describe('The initial image generation prompt provided by the user.'),
});
export type EnhanceImagePromptInput = z.infer<typeof EnhanceImagePromptInputSchema>;

const EnhanceImagePromptOutputSchema = z.object({
  enhancedPrompt: z.string().describe('The improved and enhanced image generation prompt.'),
});
export type EnhanceImagePromptOutput = z.infer<typeof EnhanceImagePromptOutputSchema>;

export async function enhanceImagePrompt(
  input: EnhanceImagePromptInput
): Promise<EnhanceImagePromptOutput> {
  return enhanceImagePromptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceImagePromptPrompt',
  input: { schema: EnhanceImagePromptInputSchema },
  output: { schema: EnhanceImagePromptOutputSchema },
  prompt: `You are an expert prompt engineer specializing in creating highly descriptive and impactful prompts for luxury lifestyle image generation. Your goal is to take a user's initial prompt and enhance it significantly to produce visually stunning, high-end, and sophisticated images. Focus on adding details about lighting, composition, atmosphere, materials, colors, and overall aesthetic to maximize the generated image's luxury appeal. The output should be a single, refined prompt ready for an image generation model.

User's initial prompt: {{{userPrompt}}}

Enhanced prompt:`,
});

const enhanceImagePromptFlow = ai.defineFlow(
  {
    name: 'enhanceImagePromptFlow',
    inputSchema: EnhanceImagePromptInputSchema,
    outputSchema: EnhanceImagePromptOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
