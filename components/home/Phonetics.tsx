"use client";

import { WordType } from "@/lib/schema/wordSchema";
import { Button } from "../ui/button";
import IconPlay from "../ui/icon-play";
import { useRef, useState } from "react";
import { CirclePauseIcon } from "lucide-react";

type Props = {
  phonetics: WordType["phonetics"];
  word: string;
};

function Phonetics({ phonetics, word }: Props) {
  const [loading, setLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const phonetic = phonetics
    .filter(
      (phonetic) =>
        "audio" in phonetic &&
        "text" in phonetic &&
        phonetic.audio !== "" &&
        phonetic.text !== "",
    )
    .at(0);

  function handlePlayAudio() {
    if (!phonetic?.audio) return;

    if (!audioRef.current) {
      audioRef.current = new Audio(phonetic.audio);

      audioRef.current.addEventListener("playing", () => {
        setLoading(true);
      });

      audioRef.current.addEventListener("ended", () => {
        setLoading(false);
      });

      audioRef.current.addEventListener("pause", () => {
        setLoading(false);
      });
    }

    audioRef.current.currentTime = 0;
    audioRef.current.play();
  }

  return (
    <div className="flex items-center justify-between">
      <div className="space-y-2">
        <h1 className="text-preset-1-mobile md:text-preset-1">{word}</h1>
        <p className="text-preset-4 md:text-preset-2 text-accent">
          {phonetic?.text}
        </p>
      </div>
      {phonetic && (
        <Button
          onClick={handlePlayAudio}
          variant={"ghost"}
          size={"fit"}
          disabled={loading}
        >
          {loading ? (
            <CirclePauseIcon className="stroke-accent size-12 md:size-18.75" />
          ) : (
            <IconPlay />
          )}
        </Button>
      )}
    </div>
  );
}

export default Phonetics;
