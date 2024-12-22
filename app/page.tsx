"use client";

import { useUserData } from "@/hooks/useUserData";
import NavBar from "@/components/nav-bar";
import ItemList from "@/components/item-list";

export default function Home() {
  useUserData();
  return (
    <div>
      <NavBar />
      <div className="max-w-5xl mx-auto">
        <ItemList />
      </div>
    </div>
  );
}
