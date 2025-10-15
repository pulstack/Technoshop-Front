import { create } from "zustand";
import { ProductType } from "@/types";
import { persist } from "zustand/middleware";

interface SelectedProductsState {
  selectedProducts: ProductType[];
  addSelected: (product: ProductType) => void;
  removeSelected: (id: number) => void;
  clearSelected: () => void;
  isSelected: (id: number) => boolean;
}

export const useSelectedProducts = create<SelectedProductsState>()(
  persist(
    (set, get) => ({
      selectedProducts: [],

      addSelected: (product) => {
        const exists = get().selectedProducts.find((p) => p.id === product.id);
        if (!exists) {
          set({
            selectedProducts: [...get().selectedProducts, product],
          });
        }
      },

      removeSelected: (id) => {
        set({
          selectedProducts: get().selectedProducts.filter(
            (p) => p.id !== id
          ),
        });
      },

      clearSelected: () => set({ selectedProducts: [] }),

      isSelected: (id) =>
        get().selectedProducts.some((p) => p.id === id),
    }),
    {
      name: "selected-products", 
    }
  )
);
