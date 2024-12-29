"use client";

import NavBar from "@/components/nav-bar";
import ItemList from "@/components/item-list";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="max-w-5xl mx-auto">
        <ItemList />
      </div>
    </div>
  );
}
