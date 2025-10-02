"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect } from "react";

interface CategoryType {
  id: number;
  name: string;
  image: string;
}

const Category = () => {
  const [category, setCategory] = React.useState<CategoryType[]>([]);

  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const HandleCategory = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8000/categories");
      setCategory(response.data.data.data.slice(1));
      setLoading(false);
      console.log(response.data.data.data);
      
    } catch (error: any) {
      console.log(error.message);
      setError(error.message);
    }
  };

  useEffect(() => {
    HandleCategory();
  }, []);

  return (
    <div className="mt-20">
      <h1 className="text-2xl px-40">Browse By Category</h1>
      <div className="px-40 py-8 grid grid-cols-4 gap-10">
        {!loading ? (
          category.map((item: CategoryType) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center bg-[#EDEDED] w-[160px] h-[128px] rounded-2xl hover:scale-105 duration-500 hover:bg-white hover:shadow-2xl  cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={48}
                height={48}
                
              />
              <p className="text-center mt-4 text-lg font-medium">
                {item.name}
              </p>
            </div>
          ))
        ) : (
          <div className="flex gap-4 w-[1300px] flex-wrap">
            <div  className='w-[200px] h-[100px] bg-gray-300 animate-pulse rounded-2xl'></div>
            <div  className='w-[200px] h-[100px] bg-gray-300 animate-pulse rounded-2xl'></div>
            <div  className='w-[200px] h-[100px] bg-gray-300 animate-pulse rounded-2xl'></div>
            <div  className='w-[200px] h-[100px] bg-gray-300 animate-pulse rounded-2xl'></div>
            <div  className='w-[200px] h-[100px] bg-gray-300 animate-pulse rounded-2xl'></div>
            <div  className='w-[200px] h-[100px] bg-gray-300 animate-pulse rounded-2xl'></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
