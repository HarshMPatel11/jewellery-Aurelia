import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-12 md:grid-cols-4">
        <div>
          <div className="font-serif text-3xl tracking-[0.3em]">AURELIA</div>
          <p className="mt-6 text-sm text-primary-foreground/70 leading-relaxed">
            Heirloom jewellery crafted by master artisans. Hallmarked gold, certified diamonds,
            lifetime care.
          </p>
          <div className="flex gap-4 mt-6 text-primary-foreground/70">
            <Instagram className="h-4 w-4 hover:text-gold cursor-pointer" />
            <Facebook className="h-4 w-4 hover:text-gold cursor-pointer" />
            <Youtube className="h-4 w-4 hover:text-gold cursor-pointer" />
          </div>
        </div>
        {[
          {
            title: "Shop",
            items: [
              ["Collections", "/collections"],
              ["Bridal", "/bridal"],
              ["New Arrivals", "/collections"],
              ["Gifts", "/collections"],
            ],
          },
          {
            title: "House",
            items: [
              ["Our Story", "/about"],
              ["Craftsmanship", "/about"],
              ["Journal", "/about"],
              ["Boutiques", "/contact"],
            ],
          },
          {
            title: "Care",
            items: [
              ["Contact", "/contact"],
              ["Shipping", "/contact"],
              ["Returns", "/contact"],
              ["FAQ", "/contact"],
            ],
          },
        ].map((col) => (
          <div key={col.title}>
            <div className="text-[0.7rem] tracking-[0.3em] uppercase text-gold mb-5">
              {col.title}
            </div>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              {col.items.map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="hover:text-gold transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-primary-foreground/50">
          <div>© {new Date().getFullYear()} Aurelia Jewellery House. All rights reserved.</div>
          <div>BIS Hallmarked · IGI Certified Diamonds · Made in India</div>
        </div>
      </div>
    </footer>
  );
}
