"use client";

import React from "react";
import axios from "axios";
import ProductDetails from "@/components/ProductDetailes";
import { ProductType } from "@/types";

const ProductPage = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = React.useState<ProductType | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${params.id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Failed to load product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (loading) {
    return <div className="text-center py-20 text-gray-500">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center py-20 text-red-500">Product not found</div>;
  }

  return <ProductDetails product={product} />;
};

export default ProductPage;
