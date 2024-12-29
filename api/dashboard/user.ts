import { User } from "@supabase/auth-js";
import { createClient } from "@/utils/supabase/client";
const supabase = createClient();

export const fetchUser = async (): Promise<User | null> => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};
