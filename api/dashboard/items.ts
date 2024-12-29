import { Items } from "@/stores/useItemStore/types";
import { createClient } from "@/utils/supabase/client";
const supabase = createClient();

export const fetchItems = async (): Promise<Items[]> => {
  const { data: items, error: itemsError } = await supabase
    .from("items")
    .select("*");

  if (itemsError) {
    throw new Error(itemsError.message || "Не удалось загрузить предметы");
  }
  return items;
};
