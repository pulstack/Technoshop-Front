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
  const {addCart} = useCart()
  const firstImage =
    Array.isArray(product?.images) && product.images.length > 0 && product.images[0]
      ? product.images[0]
      : product.thumbnail;

      const [isFavorite, setIsFavorite] = React.useState<ProductType[]>([])
      const {addToFavorites} = useFavorites()

  const handleAddToCart = () => {
    addCart(product);
  };

  const handleFavorites = () => {
    addToFavorites(product);
    setIsFavorite([...isFavorite, product]);
  };

  return (
    <div className="flex relative flex-col bg-[#EDEDED] w-[268px] h-[432px] rounded-[9px] duration-500 cursor-pointer">
      <div className="absolute top-3 right-3">
        <Heart onClick={handleFavorites} size={20} className={cn(isFavorite.includes(product) && "text-red-500 fill-red-500")} />
      </div>

      <div className="w-[160px] h-[160px] mt-[72px] mx-[54px]">
        {firstImage ? (
          <Image
            src={firstImage}
            alt={product?.title ?? "product-image"}
            width={160}
            height={160}
            className="max-w-[160px] w-full h-[160px] object-contain"
            unoptimized
          />
        ) : (
          <div className="w-[160px] h-[160px] flex items-center justify-center bg-gray-200 text-gray-500 text-sm">
            No image
          </div>
        )}
      </div>

      <div className="flex flex-col m-4 items-center">
        <p className="text-[18px] text-center line-clamp-2">{product?.title}</p>
        <p className="text-[24px] font-semibold mt-4 mb-6">{product?.price ?? 0}$</p>
        <button
          className="max-w-[188px] w-full h-[40px] bg-black text-white rounded-[8px] hover:opacity-90"
          type="button"
          onClick={handleAddToCart}
        >
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
