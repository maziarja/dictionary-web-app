import Link from "next/link";

type Props = {
  synonym: string;
  index: number;
  lastIndex: number;
};

function Synonyms({ synonym, index, lastIndex }: Props) {
  return (
    <Link
      href={`/?text=${synonym}`}
      className="text-preset-5-mobile md:text-preset-3 text-accent font-bold underline-offset-3 hover:underline"
    >
      {synonym}
      {lastIndex > 0 && index < lastIndex && ","}
    </Link>
  );
}

export default Synonyms;
