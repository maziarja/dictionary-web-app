import Header from "@/components/home/header/Header";
import NotFound from "@/components/home/NotFound";
import QuerySearch from "@/components/home/QuerySearch";
import WordDefinition from "@/components/home/WordDefinition";
import { getDictionary } from "@/lib/helper/getDictionary";
import { Suspense } from "react";

type Props = {
  searchParams: Promise<{
    text: string | undefined;
  }>;
};

async function Page({ searchParams }: Props) {
  const { text } = await searchParams;

  const word = await getDictionary(text);

  const error = "error" in word;
  const emptyState = "emptyState" in word;

  return (
    <main className="mx-auto max-w-203.75 pb-16.5 md:pb-26.25">
      <div className="p-6 md:pt-14.5 md:pr-9.75 md:pb-14 md:pl-10">
        <Header />
      </div>
      <Suspense fallback={null}>
        <div className="px-6 pb-6.25 md:pr-9.75 md:pb-12 md:pl-10">
          <QuerySearch />
        </div>
      </Suspense>
      {!emptyState && (
        <>
          {error ? (
            <div className="mt-26 px-4 md:mt-20 md:px-10">
              <NotFound />
            </div>
          ) : (
            <WordDefinition word={word} />
          )}
        </>
      )}
    </main>
  );
}

export default Page;
