"use client";

import NavBar from "@/components/organisms/navbar";
import ItemList from "@/components/organisms/itemList";

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
