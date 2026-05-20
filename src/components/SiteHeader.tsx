import { Link } from "@tanstack/react-router";
import { Search, Heart, ShoppingBag, User } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/bridal", label: "Bridal" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="bg-primary text-primary-foreground text-[0.65rem] tracking-[0.3em] uppercase py-2 text-center">
        Complimentary shipping on orders above ₹25,000 · Lifetime exchange
      </div>
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-20">
        <div className="flex items-center gap-6 w-1/3">
          <button aria-label="Search" className="text-foreground/70 hover:text-gold transition">
            <Search className="h-4 w-4" />
          </button>
          <nav className="hidden md:flex gap-7 text-xs tracking-[0.22em] uppercase">
            {nav.slice(1, 3).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-foreground/80 hover:text-gold transition"
                activeProps={{ className: "text-gold" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
        <Link to="/" className="font-serif text-2xl md:text-3xl tracking-[0.3em]">
          AURELIA
        </Link>
        <div className="flex items-center justify-end gap-6 w-1/3">
          <nav className="hidden md:flex gap-7 text-xs tracking-[0.22em] uppercase">
            {nav.slice(3).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-foreground/80 hover:text-gold transition"
                activeProps={{ className: "text-gold" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4 text-foreground/70">
            <User className="h-4 w-4 hover:text-gold transition cursor-pointer" />
            <Heart className="h-4 w-4 hover:text-gold transition cursor-pointer" />
            <div className="relative cursor-pointer">
              <ShoppingBag className="h-4 w-4 hover:text-gold transition" />
              <span className="absolute -top-1.5 -right-2 bg-gold text-ink text-[0.55rem] rounded-full h-3.5 w-3.5 flex items-center justify-center">
                2
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
