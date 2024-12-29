import { Reviews } from "@/stores/useReviewsStore/types";
import { createClient } from "@/utils/supabase/client";
const supabase = createClient();

export const fetchReviews = async (): Promise<Reviews[]> => {
  const { data: reviews, error: reviewsError } = await supabase
    .from("reviews")
    .select("*");

  if (reviewsError) {
    throw new Error(reviewsError.message || "Не удалось загрузить отзывы");
  }
  return reviews;
};
