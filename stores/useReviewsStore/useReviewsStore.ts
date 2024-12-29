import { create } from "zustand";
import { fetchReviews } from "@/api/dashboard/reviews";
import { ReviewsState } from "./types";

const useReviewsStore = create<ReviewsState>((set) => ({
  reviews: [],
  fetchReviews: async () => {
    try {
      const reviews = await fetchReviews();
      set({ reviews });
    } catch (error) {
      console.error("Ошибка загрузки: ", error);
    }
  },
  clearReviews: () => set({ reviews: [] }),
}));

export default useReviewsStore;
