import { create } from "zustand";
import { fetchSubCategories } from "@/api/dashboard/subCategories";
import { SubCategoriesState } from "./types";

const useSubCategoryStore = create<SubCategoriesState>((set) => ({
  subCategories: [],
  fetchSubCategories: async () => {
    try {
      const subCategories = await fetchSubCategories();
      set({ subCategories });
    } catch (error) {
      console.error("Ошибка загрузки: ", error);
    }
  },
  clearSubCategories: () => set({ subCategories: [] }),
}));

export default useSubCategoryStore;