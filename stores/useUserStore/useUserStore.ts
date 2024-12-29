import { create } from "zustand";
import { fetchUser } from "@/api/dashboard/user";
import { UserState } from "./types";

const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  fetchUser: async () => {
    try {
      const user = await fetchUser();
      set({ user });
    } catch (error) {
      console.error("Ошибка загрузки: ", error);
    }
  },
  clearUser: () => set({ user: null }),
}));

export default useUserStore;
