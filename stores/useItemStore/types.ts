import { Database } from "../types/supabase";

export type Items = Database["public"]["Tables"]["items"]["Row"];

export interface ItemsState {
  items: Items[];
  fetchItems: () => Promise<void>;
  clearMetrics: () => void;
}
