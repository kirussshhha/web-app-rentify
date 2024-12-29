import { Subcategories } from "@/stores/useSubCategoryStore/types";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export const fetchSubCategories = async (): Promise<Subcategories[]> => {
  const { data: subCategories, error: subCategoriesError } = await supabase
    .from("subcategories")
    .select("*");

  if (subCategoriesError) {
    throw new Error(
      subCategoriesError.message || "Не удалось загрузить предметы"
    );
  }
  return subCategories;
};
