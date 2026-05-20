import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import bridalBanner from "@/assets/bridal-banner.jpg";
import bridal from "@/assets/collection-bridal.jpg";

export const Route = createFileRoute("/bridal")({
  head: () => ({
    meta: [
      { title: "Bridal Atelier — Aurelia" },
      {
        name: "description",
        content:
          "Bespoke bridal jewellery in 22k gold, polki and uncut diamonds. Private consultations with Aurelia's master jeweller.",
      },
      { property: "og:title", content: "Bridal Atelier — Aurelia" },
    ],
  }),
  component: BridalPage,
});

function BridalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main>
        <section className="relative h-[70vh]">
          <img
            src={bridalBanner}
            alt="Bridal jewellery set"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/70" />
          <div className="relative h-full flex items-center justify-center text-center px-6">
            <div className="max-w-2xl text-cream">
              <div className="eyebrow">The Bridal Atelier</div>
              <h1 className="font-serif text-5xl md:text-7xl mt-6 leading-tight">
                For the most sacred day
              </h1>
              <p className="mt-6 text-cream/80">
                A private commission, a single artisan, an heirloom that becomes part of your
                family's story.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <img src={bridal} alt="Solitaire ring" className="aspect-[4/5] object-cover" />
          <div>
            <div className="eyebrow">The Process</div>
            <h2 className="font-serif text-4xl mt-4">A consultation unlike any other</h2>
            <div className="gold-divider mt-6" />
            <ol className="mt-10 space-y-8">
              {[
                [
                  "Discovery",
                  "An unhurried conversation with our master jeweller, in our salon or yours.",
                ],
                ["Design", "Hand-rendered sketches, gemstone selection, gold-purity choices."],
                ["Craft", "Six to twelve weeks at the atelier — entirely by hand."],
                ["Heirloom", "Hallmarked, certified, presented in a bespoke trousseau."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-5">
                  <div className="font-serif text-3xl text-gold w-8">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="font-serif text-xl">{t}</div>
                    <div className="text-foreground/70 mt-1.5">{d}</div>
                  </div>
                </li>
              ))}
            </ol>
            <Link to="/contact" className="btn-gold mt-12">
              Book a Consultation
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
