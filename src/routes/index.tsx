import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { collections, products } from "@/data/products";
import hero from "@/assets/hero-necklace.jpg";
import bridalBanner from "@/assets/bridal-banner.jpg";
import { Award, Gem, Sparkles, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurelia — Heirloom Jewellery, Gold & Diamonds" },
      {
        name: "description",
        content:
          "Discover hallmarked gold, certified diamonds and bridal heirlooms hand-crafted by Aurelia's master artisans.",
      },
      { property: "og:title", content: "Aurelia — Heirloom Jewellery" },
      {
        property: "og:description",
        content: "Hallmarked gold, certified diamonds and bridal heirlooms, hand-crafted.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative">
          <div className="grid md:grid-cols-2 min-h-[78vh]">
            <div className="relative order-2 md:order-1 flex items-center px-8 md:px-16 lg:px-24 py-16 bg-cream">
              <div className="max-w-md">
                <div className="eyebrow">The Winter Edit · 2026</div>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] mt-6">
                  Worn for
                  <br />a lifetime,
                  <br />
                  <em className="text-gold not-italic">passed down forever.</em>
                </h1>
                <p className="mt-6 text-foreground/70 leading-relaxed">
                  Hallmarked gold, certified diamonds and bridal heirlooms — sculpted by master
                  artisans across four generations.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link to="/collections" className="btn-gold">
                    Shop Collections
                  </Link>
                  <Link to="/bridal" className="btn-outline-gold">
                    Bridal Atelier
                  </Link>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative overflow-hidden">
              <img
                src={hero}
                alt="Gold necklace with diamond pendant on ivory silk"
                className="h-full w-full object-cover"
                width={1600}
                height={1280}
              />
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="border-y border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { Icon: Award, t: "BIS Hallmarked", s: "Certified purity" },
              { Icon: Gem, t: "IGI Diamonds", s: "Every stone verified" },
              { Icon: ShieldCheck, t: "Lifetime Exchange", s: "On all gold" },
              { Icon: Sparkles, t: "Free Cleaning", s: "For life, at any boutique" },
            ].map(({ Icon, t, s }) => (
              <div key={t} className="flex items-center gap-4">
                <Icon className="h-6 w-6 text-gold" />
                <div>
                  <div className="text-sm">{t}</div>
                  <div className="text-xs text-muted-foreground">{s}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Collections */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <div className="eyebrow">Featured Collections</div>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">A house of four traditions</h2>
            <div className="gold-divider mx-auto mt-6" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {collections.map((c) => (
              <Link to="/collections" key={c.slug} className="group block">
                <div className="aspect-[3/4] overflow-hidden bg-secondary">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 text-center">
                  <h3 className="font-serif text-2xl">{c.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1.5 tracking-wide">{c.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Bridal banner */}
        <section className="relative">
          <div className="relative h-[520px] overflow-hidden">
            <img
              src={bridalBanner}
              alt="Bridal gold set"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/50 to-transparent" />
            <div className="relative h-full mx-auto max-w-7xl px-6 flex items-center">
              <div className="max-w-lg text-cream">
                <div className="eyebrow">The Bridal Atelier</div>
                <h2 className="font-serif text-4xl md:text-5xl mt-5 leading-tight">
                  Heirlooms commissioned for the most sacred day.
                </h2>
                <p className="mt-5 text-cream/80 leading-relaxed">
                  Private consultations with our master jeweller. Bespoke sets in 22k gold, polki,
                  and uncut diamonds — built to be passed through generations.
                </p>
                <Link
                  to="/bridal"
                  className="btn-gold mt-9 bg-gold border-gold text-ink hover:bg-cream hover:border-cream"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bestsellers */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <div className="eyebrow">Best Sellers</div>
              <h2 className="font-serif text-4xl md:text-5xl mt-3">Most loved this season</h2>
            </div>
            <Link
              to="/collections"
              className="text-xs tracking-[0.28em] uppercase text-gold hover:underline underline-offset-8"
            >
              View all →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mt-14">
            {products.slice(0, 4).map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="bg-cream py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <div className="eyebrow">Whispered in the salon</div>
            <p className="font-serif text-3xl md:text-4xl leading-snug mt-8">
              “The craftsmanship is unlike anything I've seen. My grandmother's necklace was
              restored with a tenderness that felt like reverence.”
            </p>
            <div className="gold-divider mx-auto mt-10" />
            <div className="mt-6 text-sm tracking-[0.25em] uppercase text-muted-foreground">
              Ananya R. — Mumbai
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="mx-auto max-w-3xl px-6 py-24 text-center">
          <div className="eyebrow">The Aurelia Letter</div>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">Receive new arrivals, first.</h2>
          <p className="mt-4 text-foreground/70">
            Quiet, curated dispatches from the atelier. No noise.
          </p>
          <form
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 bg-transparent border-b border-border focus:border-gold outline-none px-1 py-3 text-sm"
            />
            <button className="btn-gold">Subscribe</button>
          </form>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
