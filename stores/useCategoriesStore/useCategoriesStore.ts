import { create } from "zustand";
import { fetchCategories } from "@/api/dashboard/categories";
import { CategoriesState } from "./types";

const useCategoriesStore = create<CategoriesState>((set) => ({
  categories: [],
  fetchCategories: async () => {
    try {
      const categories = await fetchCategories();
      set({ categories });
    } catch (error) {
      console.error("Ошибка загрузки: ", error);
    }
  },
  clearCategories: () => set({ categories: [] }),
}));

export default useCategoriesStore;
