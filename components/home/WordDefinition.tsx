import { WordType } from "@/lib/schema/wordSchema";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";
import Source from "./Source";
import { Separator } from "../ui/separator";

type Props = {
  word: WordType;
};

function WordDefinition({ word }: Props) {
  return (
    <div className="px-6 md:pr-9.75 md:pl-10">
      <div className="pb-7 md:pb-10">
        <Phonetics phonetics={word.phonetics} word={word.word} />
      </div>
      <div className="space-y-8 md:space-y-10">
        {word.meanings.map((meaning) => (
          <Meaning key={meaning.partOfSpeech} meaning={meaning} />
        ))}
      </div>
      <Separator className="my-8 md:mt-12 md:mb-4" />
      <Source sourceUrls={word.sourceUrls} word={word.word} />
    </div>
  );
}

export default WordDefinition;
