"use client";

import React from "react";
import Image from "next/image";
import { ProductType } from "@/types";

interface ProductDetailsProps {
  product:  ProductType;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [selectedImage, setSelectedImage] = React.useState(
    product.images?.[0] || ""
  );

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
      <div className="flex gap-4">
        <div className="flex flex-col gap-3 overflow-y-auto max-h-[500px]">
          {product.images?.map((img: string, index: number) => (
            <button
              key={index}
              onClick={() => setSelectedImage(img)}
              className={`relative w-[80px] h-[80px] rounded-xl overflow-hidden transition-opacity ${
                selectedImage === img
                  ? "opacity-100"
                  : "opacity-50 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover rounded-xl"
              />
            </button>
          ))}
        </div>

        <div className="relative flex-1 h-[500px] rounded-2xl bg-gray-50">
          <Image
            src={selectedImage}
            alt={product.title}
            fill
            className="object-contain rounded-2xl"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-gray-600">{product.description}</p>

        <div className="flex justify-between ">
          <div>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Brand:</strong> {product.brand}
            </p>
            <p>
              <strong>Availability:</strong> {product.availabilityStatus}
            </p>
            <p>
              <strong>Price:</strong> ${product.price}
            </p>
            <p>
              <strong>Discount:</strong> {product.discountPercentage}%
            </p>
            <p>
              <strong>Stock:</strong> {product.stock}
            </p>
            <p>
              <strong>Weight:</strong> {product.weight}
            </p>
          </div>
          <div>
            <p>
              <strong>Dimensions:</strong> {product.dimensions?.width} x
              {product.dimensions?.height} x {product.dimensions?.depth}
            </p>
            <p>
              <strong>Min Order Quantity:</strong>{" "}
              {product.minimumOrderQuantity}
            </p>
            <p>
              <strong>Shipping Info:</strong> {product.shippingInformation}
            </p>
            <p>
              <strong>Warranty:</strong> {product.warrantyInformation}
            </p>
            <p>
              <strong>Return Policy:</strong> {product.returnPolicy}
            </p>
          </div>
        </div>

 
        {product.tags?.length > 0 && (
          <div className="mt-6">
            <p className="font-semibold mb-1">Tags:</p>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Product Meta</h2>
          <div className="flex items-center gap-6">
            <div className="p-4 w-[400px] h-[170px] border rounded-xl">
              <p className="whitespace-nowrap">
                <strong>Barcode:</strong> {product.meta?.barcode}
              </p>
              <p className="whitespace-nowrap">
                <strong>Created At:</strong> {product.meta?.createdAt}
              </p>
              <p className="whitespace-nowrap">
                <strong>Updated At:</strong> {product.meta?.updatedAt}
              </p>
            </div>

            {product.meta?.qrCode && (
              <div className="p-4 border  flex flex-col items-center justify-center rounded-xl">
                <Image
                  src={product.meta.qrCode}
                  alt="QR Code"
                  width={120}
                  height={120}
                />
                <p className="text-xs text-gray-500 mt-2">QR Code</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {product.reviews?.length > 0 && (
        <div className="col-span-2 mt-16">
          <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
          <div className="flex flex-col gap-4">
            {product.reviews.map((review: any, index: number) => (
              <div key={index} className="border rounded-xl p-4 bg-gray-50">
                <p className="font-semibold">{review.reviewerName}</p>
                <p className="text-sm text-gray-500">{review.reviewerEmail}</p>
                <p className="mt-2">{review.comment}</p>
                <p className="text-yellow-500 font-medium mt-1">
                  Rating: {review.rating}/5
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
