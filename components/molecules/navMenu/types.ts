import { User } from "@supabase/auth-js";

export interface NavMenuProps {
  user: User | null;
  handleLogout: () => void;
}
