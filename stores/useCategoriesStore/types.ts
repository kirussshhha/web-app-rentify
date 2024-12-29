import { Database } from "../types/supabase";

export type Categories = Database["public"]["Tables"]["categories"]["Row"];

export interface CategoriesState {
  categories: Categories[];
  fetchCategories: () => Promise<void>;
  clearCategories: () => void;
}
