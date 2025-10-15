"use client";
import axios from "axios";
import React from "react";
import ProductCart from "./ProductCart";
import Section from "./Section";
import Banner2 from "@/assets/images/Banner2.png";
import Image from "next/image";
import Link from "next/link";
import { ProductType } from "@/types";

const Product = () => {
  const [products, setProducts] = React.useState<ProductType[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState<
    "new" | "bestseller" | "featured"
  >("new");

  const FetchProduct = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      
      setProducts(response.data.products || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    FetchProduct();
  }, []);

  return (
    <div>
      <div className="w-full px-[160px]">
        <div className="flex mb-6 gap-8">
          <button
            onClick={() => setActiveTab("new")}
            className={`pb-2 ${
              activeTab === "new"
                ? "border-b-2 border-black font-semibold"
                : "text-gray-500"
            }`}
          >
            New Arrival
          </button>
          <button
            onClick={() => setActiveTab("bestseller")}
            className={`pb-2 ${
              activeTab === "bestseller"
                ? "border-b-2 border-black font-semibold"
                : "text-gray-500"
            }`}
          >
            Bestseller
          </button>
          <button
            onClick={() => setActiveTab("featured")}
            className={`pb-2 ${
              activeTab === "featured"
                ? "border-b-2 border-black font-semibold"
                : "text-gray-500"
            }`}
          >
            Featured Products
          </button>
        </div>

        {activeTab === "new" && (
          <div className="mt-[32px] grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
            {loading ? (
              <div className="grid grid-cols-4 gap-4">
                <div className="animate-pulse bg-gray-200 h-48 w-50"></div>
                <div className="animate-pulse bg-gray-200 h-48 w-50"></div>
                <div className="animate-pulse bg-gray-200 h-48 w-50"></div>
                <div className="animate-pulse bg-gray-200 h-48 w-50"></div>
              </div>
            ) : products.length > 0 ? (
              products.slice(0, 8).map((product, index) => (
                <Link key={index} href={`/product/${product.id}`}>
                  <ProductCart product={product} />
                </Link>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        )}

        {activeTab === "bestseller" && (
          <div className="mt-[32px] grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 mb-20">
            {products.slice(8, 16).map((product, index) => (
              <Link key={index} href={`/product/${product.id}`}>
                <ProductCart product={product} />
              </Link>
            ))}
          </div>
        )}

        {activeTab === "featured" && (
          <div className="mt-[32px] grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 mb-20">
            {products.slice(16, 24).map((product, index) => (
              <Link key={index} href={`/product/${product.id}`}>
                <ProductCart product={product} />
              </Link>
            ))}
          </div>
        )}
      </div>

      <Section />

      <div className="mt-20 w-full px-[160px]">
        <p className="text-[24px]">Discounts up to -50%</p>
        <div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 mt-8">
            {products.slice(24, 28).map((product, index) => (
              <Link key={index} href={`/product/${product.id}`}>
                <ProductCart product={product} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full">
        <Image src={Banner2} alt="banner" className="w-full mt-20" />
      </div>
    </div>
  );
};

export default Product;
