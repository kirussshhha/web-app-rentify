"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function login(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  if (!data.email || !data.password) {
    console.error("Invalid email or password");
    redirect("/error");
  }

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  redirect("/protected");
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  if (!data.email || !data.password) {
    console.error("Invalid email or password");
    redirect("/error");
  }

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  redirect("/login");
}

export const signOutAction = async () => {
	const supabase = await createClient()
	await supabase.auth.signOut()
	return redirect('/login')
}

