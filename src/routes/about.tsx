import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import gold from "@/assets/collection-gold.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Aurelia" },
      {
        name: "description",
        content:
          "Four generations of master jewellers crafting heirlooms in hallmarked gold and certified diamonds.",
      },
      { property: "og:title", content: "Our Story — Aurelia" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main>
        <section className="bg-cream py-24 text-center px-6">
          <div className="eyebrow">Est. 1928</div>
          <h1 className="font-serif text-5xl md:text-7xl mt-5">A family of jewellers</h1>
          <div className="gold-divider mx-auto mt-7" />
          <p className="max-w-2xl mx-auto mt-8 text-foreground/70 leading-relaxed">
            Aurelia began in a single workshop in old Jaipur, where the first generation of our
            family forged wedding bands by lamplight. Almost a century later, the workshop still
            hums — only now it sits beside a contemporary atelier where our craftsmen shape diamonds
            for collectors across the world.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="eyebrow">Craftsmanship</div>
            <h2 className="font-serif text-4xl mt-4">Slow, by design</h2>
            <div className="gold-divider mt-6" />
            <p className="mt-6 text-foreground/70 leading-relaxed">
              Every Aurelia piece begins with a single artisan and ends with that same pair of
              hands. Nothing is outsourced. Nothing is rushed. A bridal set may take three months —
              a solitaire, six weeks. We make in small numbers because heirlooms cannot be hurried.
            </p>
            <p className="mt-5 text-foreground/70 leading-relaxed">
              Our gold is BIS hallmarked. Our diamonds carry IGI certification. Our promise is for a
              lifetime — and the lifetimes that follow.
            </p>
          </div>
          <img src={gold} alt="Hand-crafted earrings" className="aspect-[4/5] object-cover" />
        </section>

        <section className="bg-primary text-primary-foreground py-24">
          <div className="mx-auto max-w-5xl px-6 grid sm:grid-cols-3 gap-12 text-center">
            {[
              ["96", "Years of craft"],
              ["40+", "Master artisans"],
              ["12,000", "Heirlooms commissioned"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-serif text-6xl text-gold">{n}</div>
                <div className="mt-3 text-xs tracking-[0.3em] uppercase text-primary-foreground/70">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
