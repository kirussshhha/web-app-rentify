import { Database } from "./types/supabase";
import { create } from "zustand";
import { User } from "@supabase/auth-js";

type Items = Database["public"]["Tables"]["items"]["Row"];
type Reviews = Database["public"]["Tables"]["reviews"]["Row"];
type Item_images = Database["public"]["Tables"]["item_images"]["Row"];
type Categories = Database["public"]["Tables"]["categories"]["Row"];
type Subcategories = Database["public"]["Tables"]["subcategories"]["Row"];

interface UserState {
  user: User | null;
  items: Items[];
  reviews: Reviews[];
  item_images: Item_images[];
  categories: Categories[];
  subCategories: Subcategories[];
  setUser: (user: User) => void;
  setItems: (updater: Items[] | ((prevItems: Items[]) => Items[])) => void;
  setReviews: (
    updater: Reviews[] | ((prevItems: Reviews[]) => Reviews[])
  ) => void;
  setItemImages: (
    updater: Item_images[] | ((prevItems: Item_images[]) => Item_images[])
  ) => void;
  setCategories: (
    updater: Categories[] | ((prevItems: Categories[]) => Categories[])
  ) => void;
  setSubCategories: (
    updater: Subcategories[] | ((prevItems: Subcategories[]) => Subcategories[])
  ) => void;
  clearUser: () => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  items: [],
  orders: [],
  reviews: [],
  item_images: [],
  categories: [],
  subCategories: [],
  setUser: (user) => set({ user }),
  setItems: (updater: Items[] | ((prevMetrics: Items[]) => Items[])) =>
    set((state) => ({
      items: typeof updater === "function" ? updater(state.items) : updater,
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
  setCategories: (
    updater: Categories[] | ((prevMetrics: Categories[]) => Categories[])
  ) =>
    set((state) => ({
      categories:
        typeof updater === "function" ? updater(state.categories) : updater,
    })),
  setSubCategories: (
    updater:
      | Subcategories[]
      | ((prevMetrics: Subcategories[]) => Subcategories[])
  ) =>
    set((state) => ({
      subCategories:
        typeof updater === "function" ? updater(state.subCategories) : updater,
    })),
  clearUser: () =>
    set({
      user: null,
      items: [],
      reviews: [],
      item_images: [],
      categories: [],
      subCategories: [],
    }),
}));

export default useUserStore;
