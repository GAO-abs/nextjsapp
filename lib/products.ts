export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Classic White Sneakers",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    description: "Clean, minimal sneakers for everyday wear.",
    category: "footwear",
  },
  {
    id: "2",
    name: "Leather Crossbody Bag",
    price: 124.99,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400",
    description: "Compact and stylish bag with adjustable strap.",
    category: "accessories",
  },
  {
    id: "3",
    name: "Oversized Linen Shirt",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400",
    description: "Breathable linen shirt, perfect for warm days.",
    category: "clothing",
  },
  {
    id: "4",
    name: "Wireless Noise-Cancelling Headphones",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    description: "Premium sound with up to 30 hours battery life.",
    category: "electronics",
  },
  {
    id: "5",
    name: "Minimalist Watch",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    description: "Slim stainless steel watch with a leather band.",
    category: "accessories",
  },
  {
    id: "6",
    name: "Scented Soy Candle",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400",
    description: "Hand-poured with calming lavender and vanilla scent.",
    category: "home",
  },
  {
    id: "7",
    name: "Ceramic Coffee Mug",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400",
    description: "Sturdy matte ceramic mug, holds 12oz.",
    category: "home",
  },
  {
    id: "8",
    name: "Yoga Mat",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400",
    description: "Non-slip, eco-friendly mat with carrying strap.",
    category: "fitness",
  },
  {
    id: "9",
    name: "Sunglasses",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
    description: "UV400 polarized lenses with a retro frame.",
    category: "accessories",
  },
  {
    id: "10",
    name: "Hardcover book",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400",
    description: "200 dotted pages, lay-flat binding.",
    category: "stationery",
  },
];

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}