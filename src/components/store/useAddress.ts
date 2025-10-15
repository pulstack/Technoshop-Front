// store/useAddress.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface AddressType {
  id: number;
  fullName: string;
  phone: string;
  address: string;
  title: string;
}

interface AddressState {
  addresses: AddressType[];
  addAddress: (address: Omit<AddressType, "id">) => void;
  removeAddress: (id: number) => void;
  updateAddress: (id: number, data: Omit<AddressType, "id">) => void;
}

export const useAddress = create<AddressState>()(
  persist(
    (set, get) => ({
      addresses: [],
      addAddress: (address) =>
        set({
          addresses: [
            ...get().addresses,
            { id: get().addresses.length + 1, ...address }, 
          ],
        }),
      removeAddress: (id) =>
        set({
          addresses: get().addresses.filter((a) => a.id !== id),
        }),
      updateAddress: (id, data) =>
        set({
          addresses: get().addresses.map((a) =>
            a.id === id ? { ...a, ...data } : a
          ),
        }),
    }),
    { name: "address-storage" }
  )
);
