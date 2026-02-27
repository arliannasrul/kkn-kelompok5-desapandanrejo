'use server';
/**
 * @fileOverview An AI agent for summarizing archived documents (articles and PKM AI documents).
 *
 * - summarizeArchivedDocument - A function that handles the document summarization process.
 * - SummarizeArchivedDocumentInput - The input type for the summarizeArchivedDocument function.
 * - SummarizeArchivedDocumentOutput - The return type for the summarizeArchivedDocument function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SummarizeArchivedDocumentInputSchema = z.object({
  documentContent: z.string().describe('The full text content of the article or PKM AI document to be summarized.'),
});
export type SummarizeArchivedDocumentInput = z.infer<typeof SummarizeArchivedDocumentInputSchema>;

const SummarizeArchivedDocumentOutputSchema = z.object({
  summary: z.string().describe('A concise summary or key takeaways of the provided document content.'),
});
export type SummarizeArchivedDocumentOutput = z.infer<typeof SummarizeArchivedDocumentOutputSchema>;

export async function summarizeArchivedDocument(input: SummarizeArchivedDocumentInput): Promise<SummarizeArchivedDocumentOutput> {
  return summarizeArchivedDocumentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeArchivedDocumentPrompt',
  input: { schema: SummarizeArchivedDocumentInputSchema },
  output: { schema: SummarizeArchivedDocumentOutputSchema },
  prompt: `You are an AI assistant specialized in summarizing documents. Your task is to generate a concise summary or extract the key takeaways from the provided document content. The summary should be clear, informative, and help the user quickly grasp the main points.

Document Content:
{{{documentContent}}}

Please provide a concise summary or key takeaways in paragraph form.`,
});

const summarizeArchivedDocumentFlow = ai.defineFlow(
  {
    name: 'summarizeArchivedDocumentFlow',
    inputSchema: SummarizeArchivedDocumentInputSchema,
    outputSchema: SummarizeArchivedDocumentOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
