import Header from "@/components/home/header/Header";
import QuerySearch from "@/components/home/QuerySearch";

function page() {
  return (
    <section className="mx-auto max-w-203.75">
      <div className="p-6 md:pt-14.5 md:pr-9.75 md:pb-14 md:pl-10">
        <Header />
      </div>
      <div className="px-4 pb-6.25 md:pr-9.75 md:pb-12 md:pl-10">
        <QuerySearch />
      </div>
    </section>
  );
}

export default page;
