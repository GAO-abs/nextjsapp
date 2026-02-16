import Link from "next/link";
import { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="border rounded-xl overflow-hidden hover:shadow-lg transition">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="font-semibold text-lg">{product.name}</h2>
          <p className="text-gray-500 text-sm mt-1">{product.description}</p>
          <p className="text-blue-600 font-bold mt-2">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
}