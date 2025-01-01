import { User } from "@supabase/auth-js";

export interface AuthButtonProps {
  user: User | null;
  handleLogout: () => void;
}
