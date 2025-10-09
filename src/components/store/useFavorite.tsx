import { create } from "zustand";
import { ProductType } from "@/types";

interface FavoritesState {
  favorites: ProductType[];
  addToFavorites: (product: ProductType) => void;
  removeFromFavorites: (id: number) => void;
  toggleFavorite: (product: ProductType) => void;
  clearFavorites: () => void;
}

export const useFavorites = create<FavoritesState>((set, get) => {
  const stored =
    typeof window !== "undefined" ? localStorage.getItem("favorites") : null;

  return {
    favorites: stored ? JSON.parse(stored) : [],

    addToFavorites: (product) => {
      const exists = get().favorites.find((p) => p.id === product.id);
      if (!exists) {
        const updated = [...get().favorites, product];
        set({ favorites: updated });
        localStorage.setItem("favorites", JSON.stringify(updated));
      }
    },

    removeFromFavorites: (id) => {
      const updated = get().favorites.filter((p) => p.id !== id);
      set({ favorites: updated });
      localStorage.setItem("favorites", JSON.stringify(updated));
    },

    toggleFavorite: (product) => {
      const exists = get().favorites.find((p) => p.id === product.id);
      if (exists) {
        const updated = get().favorites.filter((p) => p.id !== product.id);
        set({ favorites: updated });
        localStorage.setItem("favorites", JSON.stringify(updated));
      } else {
        const updated = [...get().favorites, product];
        set({ favorites: updated });
        localStorage.setItem("favorites", JSON.stringify(updated));
      }
    },

    clearFavorites: () => {
      set({ favorites: [] });
      localStorage.removeItem("favorites");
    },
  };
});
