import { Database } from "../types/supabase";

export type ItemImages = Database["public"]["Tables"]["item_images"]["Row"];

export interface ItemImagesStore {
  itemImages: ItemImages[];
  fetchItemImages: () => Promise<void>;
  clearItemImages: () => void;
}