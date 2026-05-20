import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Aurelia" },
      {
        name: "description",
        content: "Browse Aurelia's hallmarked gold, diamond, silver and bridal collections.",
      },
      { property: "og:title", content: "Collections — Aurelia" },
    ],
  }),
  component: CollectionsPage,
});

const filters = ["All", "Bridal", "Gold", "Diamond", "Silver"] as const;

function CollectionsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const list = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main>
        <section className="bg-cream py-20 text-center">
          <div className="eyebrow">The Boutique</div>
          <h1 className="font-serif text-5xl md:text-6xl mt-4">Collections</h1>
          <div className="gold-divider mx-auto mt-6" />
          <p className="max-w-xl mx-auto mt-6 px-6 text-foreground/70">
            Every piece is hallmarked, certified and finished by hand at our Jaipur atelier.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-wrap justify-center gap-2 md:gap-8 border-b border-border pb-6">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`text-xs tracking-[0.28em] uppercase px-3 py-2 transition ${active === f ? "text-gold border-b border-gold -mb-[25px] pb-6" : "text-foreground/60 hover:text-foreground"}`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14 mt-14">
            {list.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
