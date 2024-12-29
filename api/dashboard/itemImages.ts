import { ItemImages } from "@/stores/useItemImagesStore/types";
import { createClient } from "@/utils/supabase/client";
const supabase = createClient();

export const fetchItemImages = async (): Promise<ItemImages[]> => {
  const { data: images, error: imagesError } = await supabase
    .from("item_images")
    .select("*");

  if (imagesError) {
    throw new Error(imagesError.message || "Не удалось загрузить предметы");
  }
  return images;
};
