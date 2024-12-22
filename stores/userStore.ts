import { Database } from "./types/supabase";
import { create } from "zustand";
import { User } from "@supabase/auth-js";

type Items = Database["public"]["Tables"]["items"]["Row"];
type Orders = Database["public"]["Tables"]["orders"]["Row"];
type Reviews = Database["public"]["Tables"]["reviews"]["Row"];
type Item_images = Database["public"]["Tables"]["item_images"]["Row"];

interface UserState {
  user: User | null;
  items: Items[];
  orders: Orders[];
  reviews: Reviews[];
  item_images: Item_images[];
  setUser: (user: User) => void;
  setItems: (updater: Items[] | ((prevItems: Items[]) => Items[])) => void;
  setOrders: (updater: Orders[] | ((prevItems: Orders[]) => Orders[])) => void;
  setReviews: (
    updater: Reviews[] | ((prevItems: Reviews[]) => Reviews[])
  ) => void;
  setItemImages: (
    updater: Item_images[] | ((prevItems: Item_images[]) => Item_images[])
  ) => void;
  clearUser: () => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  items: [],
  orders: [],
  reviews: [],
  item_images: [],
  setUser: (user) => set({ user }),
  setItems: (updater: Items[] | ((prevMetrics: Items[]) => Items[])) =>
    set((state) => ({
      items: typeof updater === "function" ? updater(state.items) : updater,
    })),
  setOrders: (updater: Orders[] | ((prevMetrics: Orders[]) => Orders[])) =>
    set((state) => ({
      orders: typeof updater === "function" ? updater(state.orders) : updater,
    })),
  setReviews: (updater: Reviews[] | ((prevMetrics: Reviews[]) => Reviews[])) =>
    set((state) => ({
      reviews: typeof updater === "function" ? updater(state.reviews) : updater,
    })),
  setItemImages: (
    updater: Item_images[] | ((prevMetrics: Item_images[]) => Item_images[])
  ) =>
    set((state) => ({
      item_images:
        typeof updater === "function" ? updater(state.item_images) : updater,
    })),
  clearUser: () =>
    set({ user: null, items: [], orders: [], reviews: [], item_images: [] }),
}));

export default useUserStore;
