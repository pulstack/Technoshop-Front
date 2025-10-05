import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ImageType {
  id: number;
  image_url: string;
}

export interface ProductType {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  images: ImageType[];
  atributes: any;
}

interface ProductCartProps {
  product: ProductType;
}

const ProductCart: React.FC<ProductCartProps> = ({ product }) => {
  return (
    <div className="flex relative flex-col  bg-[#EDEDED] w-[268px] h-[432px] rounded-[9px] duration-500  cursor-pointer">
      <div className="absolute top-3 right-3">
        <Heart size={20} />
      </div>
      <div className="w-[160px] h-[160px] mt-[72px] mx-[54px]">
        <Image
          src={product.images[0].image_url}
          alt="product-image"
          width={100}
          height={100}
          className="w-[160px] h-[160px] object-contain"
        />
      </div>
      <div className="flex flex-col m-4 items-center ">
        <p className="text-[18px]">{product.name}</p>
        <p className="text-[24px] font-semibold mt-4 mb-6">{product.price}$</p>
        <button className="max-w-[188px] w-full h-[40px] bg-black text-white rounded-[8px] hover:">Buy now</button>
      </div>
    </div>
  );
};

export default ProductCart;
