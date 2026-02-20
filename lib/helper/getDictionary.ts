import { wordSchema } from "../schema/wordSchema";

export async function getDictionary(text: string | undefined) {
  if (!text) {
    return { emptyState: true };
  }

  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    console.error(res);
    return { error: `Failed to fetch dictionary, error: ${res.statusText}` };
  }

  const data = await res.json();
  const validDate = wordSchema.safeParse(data[0]);

  if (!validDate.success) {
    console.error(validDate.error);
    throw new Error(validDate.error.issues[0].message);
  }

  return validDate.data;
}
