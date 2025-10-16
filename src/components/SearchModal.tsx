"use client";
import axios from "axios";
import { SearchIcon } from "lucide-react";
import React, { useEffect } from "react";

interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

import Link from "next/link";
import { useDebaunce } from "./hooks/useDabaunce";
const SearchModal = () => {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [data, setData] = React.useState<ProductType[]>([]);
  const [warning, setWarning] = React.useState("");

  const debounce = useDebaunce(value);

  const handleChange = async () => {
    try {
      if (debounce.trim().length) {
        setIsLoading(true);
        const res = await axios.get(
          `https://dummyjson.com/products/search?q=${debounce}`
        );
        console.log(res.data);
        
        if (res.data.products.length > 0) {
          setData(res.data);
          setWarning("");
        } else {
          setData([]);
          setWarning("Maxsulot topilmadi!");
        }
      } else {
        setData([]);
        setWarning("");
      }
    } catch (error) {
      console.error(error);
      setWarning("Xatolik yuz berdi!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleChange();
  }, [debounce]);

  const handleLinkClick = () => {
    setOpen(false);
    setValue("");
  };

  return (
    <div className="max-w-[642px] w-full relative">
      <div className="flex  gap-3  bg-[#F5F5F5] rounded-[8px] px-3 py-2 max-w-[372px] w-full max-h-[58px] h-full">
        <SearchIcon size={20} className="text-gray-400" />
        <input
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 300)}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          placeholder="Search"
          className="placeholder:text-gray-400 active:outline-none  focus:outline-none"
        />
      </div>

      {open && value.length > 0 && (
        <div className="max-h-[400px] overflow-auto absolute top-11 z-50 bg-white w-full border border-gray-200 rounded-b-md p-4 border-t-0">
          {isLoading && (
            <div className="flex items-center gap-4 mb-4 bg-gray-200 animate-pulse rounded-md p-2">
              <h1 className="text-md font-semibold"></h1>
            </div>
          )}

          {!isLoading &&
            data.length > 0 &&
            data.map((item) => (
              <Link
                onClick={handleLinkClick}
                href={`/search/${value}`}
                key={item.id}
                className="flex items-center gap-4 mb-4 border-b border-b-gray-200 pb-2"
              >
                <h1 className="text-md font-semibold">{item.title}</h1>
              </Link>
            ))}

          {!isLoading && warning && (
            <h1 className="text-md font-semibold text-center">{warning}</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchModal;
