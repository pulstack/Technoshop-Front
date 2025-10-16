"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useFavorites } from "@/components/store/useFavorite";

const FavoritesPage = () => {
  const { favorites, removeFromFavorites, clearFavorites } = useFavorites();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Favorites</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-500">You don't have any favorite products yet.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg shadow p-4 flex flex-col justify-between bg-white"
              >
                <Link href={`/product/${product.id}`}>
                  <div className="flex flex-col gap-3 cursor-pointer">
                    {product.images?.[0] && (
                      <Image
                        src={product.images[0]}
                        alt={product.title}
                        width={300}
                        height={200}
                        className="object-cover rounded-md"
                      />
                    )}
                    <h2 className="text-lg font-semibold">{product.title}</h2>
                    <p className="text-gray-600">${product.price}</p>
                  </div>
                </Link>
                <button
                  onClick={() => removeFromFavorites(product.id)}
                  className="mt-4 flex items-center gap-2 text-red-600 hover:text-red-800 transition"
                >
                  <Trash2 size={18} /> clear
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={clearFavorites}
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
            >
              Clear all
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default FavoritesPage;
