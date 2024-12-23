import useUserStore from "@/stores/userStore";
import { createClient } from "@/utils/supabase/client";
import { useEffect } from "react";

const supabase = createClient();

export function useUserData() {
  const {
    user,
    setUser,
    setItems,
    setReviews,
    setItemImages,
    setCategories,
    setSubCategories,
    clearUser,
  } = useUserStore();

  const fetchUser = async () => {
    try {
      if (user?.id) {
        return user;
      }

      const { data: session, error: sessionError } =
        await supabase.auth.getSession();

      if (sessionError) {
        console.error("Error fetching session:", sessionError);
        return null;
      }

      const currentUser = session?.session?.user;
      if (!currentUser?.id) {
        console.error("User ID is undefined.");
        return null;
      }

      setUser(currentUser);
      console.log("user: ", currentUser);
      return currentUser;
    } catch (error) {
      console.error("Unexpected error in fetchUser:", error);
      return null;
    }
  };

  const fetchItems = async () => {
    try {
      const { data: items, error: itemsError } = await supabase
        .from("items")
        .select("*");

      if (itemsError) {
        console.error("Error fetching items:", itemsError);
        return;
      }
      setItems(items || []);
      console.log("Items", items);
    } catch (error) {
      console.error("Unexpected error in fetchItems:", error);
    }
  };

  const fetchReviews = async () => {
    try {
      const { data: reviews, error: reviewsError } = await supabase
        .from("reviews")
        .select("*");

      if (reviewsError) {
        console.error("Error fetching reviews:", reviews);
        return;
      }
      setReviews(reviews || []);
      console.log("Reviews", reviews);
    } catch (error) {
      console.error("Unexpected error in fetchReviews:", error);
    }
  };

  const fetchItemImages = async () => {
    try {
      const { data: images, error: imagesError } = await supabase
        .from("item_images")
        .select("*");

      if (imagesError) {
        console.error("Error fetching images:", images);
        return;
      }
      setItemImages(images || []);
      console.log("images", images);
    } catch (error) {
      console.error("Unexpected error in fetchImages:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const { data: categories, error: categoriesError } = await supabase
        .from("categories")
        .select("*");

      if (categoriesError) {
        console.error("Error fetching categories:", categories);
        return;
      }
      setCategories(categories || []);
      console.log("categories", categories);
    } catch (error) {
      console.error("Unexpected error in fetchCategories:", error);
    }
  };

  const fetchSubCategories = async () => {
    try {
      const { data: subCategories, error: subCategoriesError } = await supabase
        .from("subcategories")
        .select("*");

      if (subCategoriesError) {
        console.error("Error fetching subCategories:", subCategories);
        return;
      }
      setSubCategories(subCategories || []);
      console.log("subCategories", subCategories);
    } catch (error) {
      console.error("Unexpected error in fetchSubCategories:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchUser();
      await Promise.all([
        fetchItems(),
        fetchReviews(),
        fetchItemImages(),
        fetchCategories(),
        fetchSubCategories(),
      ]);
    };

    fetchData();

    return () => clearUser();
  }, [setUser, setItems, setReviews, setItemImages, setCategories, setSubCategories, clearUser]);
}
