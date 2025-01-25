"use client";
import React from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/store/useCart";

export const ProductCard = ({ product }) => {
  const router = useRouter();
  const { addToCart } = useCartStore();

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <Link href={`/product/${product.slug}`}>
        <div className="w-full h-auto">
          <img
            src={product.images?.[0]?.src?.src}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">
            {product.name}
          </h3>
        </Link>
        {/* <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.slug}
        </p> */}
        <div className="flex items-center justify-between">
          {/* <span className="text-lg font-bold text-blue-600">
            ₹{product.price.toFixed(2)}
          </span> */}
          <button
            // onClick={() => {
            //   addToCart(product);
            //   router.push("/cart");
            // }}
            // className="flex items-center space-x-1 bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition-colors"
            className="w-full text-xs md:text-base flex justify-center items-center space-x-1 bg-gray-300 text-white px-3 py-2 rounded-md transition-colors"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Out of Stock</span>
          </button>
        </div>
      </div>
    </div>
  );
};
