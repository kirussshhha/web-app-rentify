import useUserStore from "@/stores/userStore";
import { createClient } from "@/utils/supabase/client";
import { useEffect } from "react";

const supabase = createClient();

export function useUserData() {
  const { user, setUser, setItems, setOrders, setReviews, clearUser } =
    useUserStore();

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

  const fetchOrders = async () => {
    try {
      const { data: orders, error: ordersError } = await supabase
        .from("orders")
        .select("*");

      if (ordersError) {
        console.error("Error fetching orders:", ordersError);
        return;
      }
      setOrders(orders || []);
      console.log("Orders", orders);
    } catch (error) {
      console.error("Unexpected error in fetchOrders:", error);
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

  useEffect(() => {
    const fetchData = async () => {
      await fetchUser();
      await Promise.all([fetchItems(), fetchOrders(), fetchReviews()]);
    };

    fetchData();

    return () => clearUser();
  }, [setUser, setItems, setOrders, setReviews, clearUser]);
}
