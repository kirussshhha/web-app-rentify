import { Database } from "@/stores/types/supabase";

export type Item = Database["public"]["Tables"]["items"]["Row"];
export type Categories = Database["public"]["Tables"]["categories"]["Row"];
export type SubCategories = Database["public"]["Tables"]["subcategories"]["Row"];

export interface ItemProps {
  item: Item;
  itemCategory: Categories;
  itemSubCategory?: SubCategories;
  itemImages: string | null;
}
