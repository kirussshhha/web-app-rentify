import { Database } from "../types/supabase";

export type Subcategories = Database["public"]["Tables"]["subcategories"]["Row"];

export interface SubCategoriesState {
  subCategories: Subcategories[];
  fetchSubCategories: () => Promise<void>;
  clearSubCategories: () => void;
}