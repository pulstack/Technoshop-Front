"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import CarouselDemo from "./ProductCarousel";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CategoryType {
  id: number;
  name: string;
  image: string;
}

const Category = () => {
  const [category, setCategory] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const HandleCategory = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8000/categories");
      setCategory(response.data.data.data);
      setLoading(false);
    } catch (error: any) {
      console.log(error.message);
      setError(error.message);
    }
  };

  useEffect(() => {
    HandleCategory();
  }, []);

  return (
    <div className="mt-20 px-40">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Browse By Category</h1>
        <div className="flex gap-3">
          <button
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            className=" hover:bg-gray-200 p-2 rounded-full"
          >
            <ArrowLeft size={30} />
          </button>
          <button
            onClick={() => emblaApi && emblaApi.scrollNext()}
            className=" hover:bg-gray-200 p-2 rounded-full"
          >
            <ArrowRight size={30} />
          </button>
        </div>
      </div>
      <div className="py-8">
        {!loading ? (
          <CarouselDemo products={category} emblaRef={emblaRef} />
        ) : (
          <div className="flex gap-4 w-[1300px] flex-wrap">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="w-[200px] h-[100px] bg-gray-300 animate-pulse rounded-2xl"
                ></div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
