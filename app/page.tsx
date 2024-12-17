"use client";

import { useUserData } from "@/hooks/useUserData";
import { signOutAction } from "./actions";
import NavBar from "@/components/nav-bar";

export default function Home() {
  useUserData();
  return (
    <div>
      <NavBar />
      <button onClick={signOutAction}>logout</button>
    </div>
  );
}
