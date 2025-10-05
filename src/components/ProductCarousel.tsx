"use client";

import Image from "next/image";
import {  forwardRef } from "react";

interface Product {
  id: number;
  name: string;
  image: string;
}

interface CarouselProps {
  products: Product[];
  emblaRef: (node: HTMLDivElement | null) => void; 
}

const CarouselDemo = forwardRef<HTMLDivElement, CarouselProps>(
  ({ products, emblaRef}, _) => {
    return (
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {products.map((product, index) => (
            <div
              className="embla__slide flex-[0_0_20%] relative px-2"
              key={index}
            >
              <div className="flex flex-col items-center justify-center bg-[#EDEDED] w-full h-[160px] rounded-2xl hover:scale-105 duration-500 hover:bg-white hover:shadow-2xl cursor-pointer">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={48}
                  height={48}
                  priority
                />
                <h1 className="text-[16px] text-center mt-4 text-lg font-medium">
                  {product.name}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

CarouselDemo.displayName = "CarouselDemo";

export default CarouselDemo;
