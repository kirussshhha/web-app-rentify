import { create } from "zustand";
import { fetchItems } from "@/api/dashboard/items";
import { ItemsState } from "./types";

const useItemStore = create<ItemsState>((set) => ({
  items: [],
  fetchItems: async () => {
    try {
      const items = await fetchItems();
      set({ items });
    } catch (error) {
      console.error("Ошибка загрузки: ", error);
    }
  },
  clearMetrics: () => set({ items: [] }),
}));

export default useItemStore;
