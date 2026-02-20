import { WordType } from "@/lib/schema/wordSchema";
import IconNewWindow from "../ui/icon-new-window";

type Props = {
  sourceUrls: WordType["sourceUrls"];
  word: WordType["word"];
};

function Source({ sourceUrls, word }: Props) {
  return (
    <div className="space-y-2">
      <p className="text-preset-7-regular text-secondary-foreground underline underline-offset-4">
        Source
      </p>
      <a
        href={sourceUrls[0]}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open source in new tab: ${word}`}
        className="text-preset-7-regular flex items-center gap-2.5 underline underline-offset-3"
      >
        {sourceUrls[0]}
        <IconNewWindow />
      </a>
    </div>
  );
}

export default Source;
