import { create } from "zustand";
import { fetchItemImages } from "@/api/dashboard/itemImages";
import { ItemImagesStore } from "./types";

const useItemImagesStore = create<ItemImagesStore>((set) => ({
  itemImages: [],
  fetchItemImages: async () => {
    try {
      const itemImages = await fetchItemImages();
      set({ itemImages });
    } catch (error) {
      console.error("Ошибка загрузки: ", error);
    }
  },
  clearItemImages: () => set({ itemImages: [] }),
}));

export default useItemImagesStore;
