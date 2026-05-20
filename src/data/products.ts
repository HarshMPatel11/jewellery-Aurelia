import bridal from "@/assets/collection-bridal.jpg";
import gold from "@/assets/collection-gold.jpg";
import diamond from "@/assets/collection-diamond.jpg";
import silver from "@/assets/collection-silver.jpg";

export const collections = [
  {
    slug: "bridal",
    name: "Bridal",
    tagline: "Heirlooms for the once-in-a-lifetime",
    image: bridal,
  },
  { slug: "gold", name: "Gold", tagline: "22k hallmarked, hand-finished", image: gold },
  { slug: "diamond", name: "Diamond", tagline: "IGI certified solitaires", image: diamond },
  { slug: "silver", name: "Silver", tagline: "Everyday luminance", image: silver },
] as const;

export const products = [
  {
    id: "p1",
    name: "Aanya Solitaire Ring",
    category: "Diamond",
    price: "₹ 1,84,000",
    image: bridal,
    badge: "New",
  },
  {
    id: "p2",
    name: "Emerald Drop Earrings",
    category: "Gold",
    price: "₹ 96,500",
    image: gold,
    badge: "Bestseller",
  },
  {
    id: "p3",
    name: "Liana Tennis Bracelet",
    category: "Diamond",
    price: "₹ 2,15,000",
    image: diamond,
  },
  { id: "p4", name: "Curb Link Bracelet", category: "Silver", price: "₹ 18,400", image: silver },
  {
    id: "p5",
    name: "Rivaah Bridal Set",
    category: "Bridal",
    price: "₹ 6,40,000",
    image: bridal,
    badge: "Limited",
  },
  { id: "p6", name: "Halo Stud Earrings", category: "Diamond", price: "₹ 78,200", image: diamond },
  { id: "p7", name: "Petal Pendant", category: "Gold", price: "₹ 42,800", image: gold },
  { id: "p8", name: "Cascade Chain", category: "Silver", price: "₹ 12,600", image: silver },
] as const;
