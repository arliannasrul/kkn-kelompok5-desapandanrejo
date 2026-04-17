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
import { readFileSync } from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const SummarizeArchivedDocumentInputSchema = z.object({
  documentContent: z.string().optional(),
  pdfPath: z.string().optional(),
  websiteUrl: z.string().optional()
});
export type SummarizeArchivedDocumentInput = z.infer<typeof SummarizeArchivedDocumentInputSchema>;

const SummarizeArchivedDocumentOutputSchema = z.object({
  summary: z.string().describe('A concise summary or key takeaways of the provided document content.'),
});
export type SummarizeArchivedDocumentOutput = z.infer<typeof SummarizeArchivedDocumentOutputSchema>;

export async function summarizeArchivedDocument(input: SummarizeArchivedDocumentInput): Promise<SummarizeArchivedDocumentOutput> {
  return summarizeArchivedDocumentFlow(input);
}

const summarizeArchivedDocumentFlow = ai.defineFlow(
  {
    name: 'summarizeArchivedDocumentFlow',
    inputSchema: SummarizeArchivedDocumentInputSchema,
    outputSchema: SummarizeArchivedDocumentOutputSchema,
  },
  async (input) => {
    const parts: any[] = [{ 
      text: "Anda adalah asisten AI yang ahli dalam membuat ringkasan. Apabila Anda diberikan teks dari sebuah situs web, abaikan semua teks terkait menu navigasi, iklan, footer, atau elemen sampingan, dan HANYA fokus menyarikan INTI BERITA atau ARTIKEL UTAMA. Tulislah ringkasan yang jelas, padat, dan representatif dalam paragraf berbahasa INDONESIA."
    }];

    if (input.pdfPath) {
      if (input.pdfPath.startsWith('/')) {
        const filePath = path.join(process.cwd(), 'public', input.pdfPath);
        try {
          const base64Pdf = readFileSync(filePath).toString('base64');
          parts.push({ media: { url: `data:application/pdf;base64,${base64Pdf}` } });
        } catch (e) {
          parts.push({ text: `Failed to load PDF file at ${input.pdfPath}` });
        }
      }
    } else if (input.websiteUrl) {
      try {
        const response = await fetch(input.websiteUrl);
        const html = await response.text();
        const $ = cheerio.load(html);
        $('script, style, noscript, header, footer, nav, aside, .sidebar, .widget, .menu, #menu, [role="banner"], [role="navigation"], [role="contentinfo"]').remove();
        const extractedText = $('body').text().replace(/\s+/g, ' ').trim();
        parts.push({ text: `Website Text Content:\n${extractedText.substring(0, 30000)}` });
      } catch (e) {
        parts.push({ text: `Failed to load website from ${input.websiteUrl}` });
      }
    } else if (input.documentContent) {
      parts.push({ text: `Document Content:\n${input.documentContent}` });
    }

    const { text } = await ai.generate({
      prompt: parts,
    });
    
    return { summary: text };
  }
);
