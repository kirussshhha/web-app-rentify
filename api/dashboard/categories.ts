import { Categories } from "@/stores/useCategoriesStore/types";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export const fetchCategories = async (): Promise<Categories[]> => {
  const { data: categories, error: categoriesError } = await supabase
    .from("categories")
    .select("*");

  if (categoriesError) {
    throw new Error(
      categoriesError.message || "Не удалось загрузить категории"
    );
  }
  return categories;
};
