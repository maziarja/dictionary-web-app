import { WordType } from "@/lib/schema/wordSchema";
import { Separator } from "../ui/separator";

type Props = {
  meaning: WordType["meanings"][0];
};

function Meaning({ meaning }: Props) {
  return (
    <div className="space-y-8 md:space-y-10">
      <div className="flex items-center gap-4">
        <p className="text-preset-4-mobile md:text-preset-2 font-bold">
          {meaning.partOfSpeech}
        </p>
        <Separator className="shrink" />
      </div>
      <div className="space-y-6">
        <p className="text-preset-5-mobile md:text-preset-3 text-secondary-foreground">
          Meaning
        </p>

        <div className="space-y-3">
          {meaning.definitions.map((definition) => (
            <div key={definition.definition} className="flex gap-4">
              <div className="bg-accent mt-2 size-1.25 shrink-0 rounded-full" />
              <div className="space-y-3">
                <p className="text-preset-6-mobile md:text-preset-4">
                  {definition.definition}
                </p>
                {definition.example && (
                  <p className="text-preset-6-mobile md:text-preset-4 text-secondary-foreground">
                    &rdquo;{definition.example}&ldquo;
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {meaning.synonyms.length > 0 && (
        <div className="flex gap-6">
          <p className="text-preset-5-mobile md:text-preset-3 text-secondary-foreground">
            Synonyms
          </p>
          <div className="flex flex-wrap items-center gap-x-1">
            {meaning.synonyms.map((synonym, i) => (
              <p
                key={`${synonym}-${i}`}
                className="text-preset-5-mobile md:text-preset-3 text-accent font-bold"
              >
                {synonym},
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Meaning;
