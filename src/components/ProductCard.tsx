import { Heart } from "lucide-react";

type Props = {
  name: string;
  category: string;
  price: string;
  image: string;
  badge?: string;
};

export function ProductCard({ name, category, price, image, badge }: Props) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden bg-secondary aspect-[4/5]">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {badge && (
          <span className="absolute top-4 left-4 bg-background/90 text-foreground text-[0.6rem] tracking-[0.25em] uppercase px-3 py-1.5">
            {badge}
          </span>
        )}
        <button
          aria-label="Add to wishlist"
          className="absolute top-4 right-4 h-9 w-9 rounded-full bg-background/90 flex items-center justify-center text-foreground/70 hover:text-gold opacity-0 group-hover:opacity-100 transition"
        >
          <Heart className="h-4 w-4" />
        </button>
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-background/95 py-3 text-center text-[0.7rem] tracking-[0.28em] uppercase">
          Quick View
        </div>
      </div>
      <div className="pt-5 text-center">
        <div className="eyebrow text-muted-foreground" style={{ color: "var(--muted-foreground)" }}>
          {category}
        </div>
        <h3 className="font-serif text-lg mt-2">{name}</h3>
        <div className="text-sm text-foreground/80 mt-1">{price}</div>
      </div>
    </div>
  );
}
