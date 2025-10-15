"use client";

import { ProductType } from "@/types";
import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useCart } from "./store/useCart";
import { useFavorites } from "./store/useFavorite";
import { cn } from "@/lib/utils";

interface ProductCartProps {
  product: ProductType;
}

const ProductCart: React.FC<ProductCartProps> = ({ product }) => {
  const { addCart } = useCart();
  const { favorites, toggleFavorite } = useFavorites();

  const firstImage =
    Array.isArray(product?.images) &&
    product.images.length > 0 &&
    product.images[0]
      ? product.images[0]
      : product.thumbnail;

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addCart(product);
  };

  const handleFavorites = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleFavorite(product);
  };

  const isFavorite = favorites.some((p) => p.id === product.id);

  return (
    <div className="flex relative flex-col bg-[#F4F4F4] w-[268px] h-[432px] rounded-[12px] shadow-sm duration-300 hover:shadow-lg cursor-pointer">
      <button
        className="absolute top-3 right-3"
        onClick={(e) => handleFavorites(e)}
      >
        <Heart
          size={22}
          className={cn(
            "cursor-pointer hover:scale-110 transition",
            isFavorite && "text-red-500 fill-red-500"
          )}
        />
      </button>

      <div className="w-[160px] h-[160px] mt-[72px] mx-auto flex items-center justify-center">
        {firstImage ? (
          <Image
            src={firstImage}
            alt={product?.title ?? "product-image"}
            width={160}
            height={160}
            className="w-full h-full object-contain"
            unoptimized
          />
        ) : (
          <div className="w-[160px] h-[160px] flex items-center justify-center bg-gray-200 text-gray-500 text-sm rounded-md">
            No image
          </div>
        )}
      </div>

      <div className="flex flex-col m-4 items-center">
        <p className="text-[16px] text-center line-clamp-2 font-medium">
          {product?.title}
        </p>
        <p className="text-[20px] font-bold mt-3 mb-6">
          {product?.price ?? 0}$
        </p>
        <button
          className="max-w-[188px] w-full h-[40px] bg-black text-white rounded-[8px] hover:opacity-90 transition"
          type="button"
          onClick={(e) => handleAddToCart(e)}
        >
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
