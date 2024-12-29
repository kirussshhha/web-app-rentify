import { Database } from "../types/supabase";

export type Reviews = Database["public"]["Tables"]["reviews"]["Row"];

export interface ReviewsState {
  reviews: Reviews[];
  fetchReviews: () => Promise<void>;
  clearReviews: () => void;
}
