"use client";
import axios from "axios";
import React from "react";
import ProductCart from "./ProductCart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Product = () => {
  const [products, setProducts] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  const FetchProduct = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products");
      console.log(response.data);
      setProducts(response.data.data || []); // API dan data[] keladi
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
    <Tabs defaultValue="new" className="w-full mx-[160px]">
      <TabsList className="flex justify-center space-x-6 active:bg-linear-to-bl bg-white border-b mb-6">
        <TabsTrigger value="new">New Arrival</TabsTrigger>
        <TabsTrigger value="bestseller">Bestseller</TabsTrigger>
        <TabsTrigger value="featured">Featured Products</TabsTrigger>
      </TabsList>

      <TabsContent value="new">
        <div className="mt-[32px] grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
          {loading ? (
            <p>Loading...</p>
          ) : products.length > 0 ? (
            products.map((product, index) => (
              <ProductCart key={index} product={product} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </TabsContent>

      <TabsContent value="bestseller">
        <div className="mt-[32px] md:px-20 px-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 mb-20">
          <p>Bestseller products coming soon...</p>
        </div>
      </TabsContent>

      {/* Featured */}
      <TabsContent value="featured">
        <div className="mt-[32px] md:px-20 px-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 mb-20">
          <p>Featured products coming soon...</p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default Product;
