import CategoryList from "@/components/CategoryList";
import Hero from "@/components/Hero";
import NewArrival from "@/components/NewArrival";
import { client } from "@/sanity/lib/client";
import { NEW_ARRIVALS_PRODUCT_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const newArrivals = await client.fetch(NEW_ARRIVALS_PRODUCT_QUERY);

  return (
    <>
      <section className="sm:pt-24 pt-16">
        <Hero />
      </section>

      <section>
        <CategoryList />
      </section>

      <section>
        <NewArrival newArrivals={newArrivals.slice(0, 4)} />
      </section>
    </>
  );
}
