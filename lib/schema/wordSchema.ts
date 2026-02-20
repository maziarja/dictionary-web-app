import z from "zod";

export const wordSchema = z.object({
  word: z.string(),
  sourceUrls: z.array(z.string()),
  meanings: z.array(
    z.object({
      partOfSpeech: z.string(),
      synonyms: z.array(z.string()),
      definitions: z.array(
        z.object({
          definition: z.string(),
          example: z.string().optional(),
        }),
      ),
    }),
  ),
  phonetics: z.array(
    z.object({
      text: z.string().optional(),
      audio: z.string(),
    }),
  ),
});

export const wordsSchema = z.array(wordSchema);

export type WordType = z.infer<typeof wordSchema>;
