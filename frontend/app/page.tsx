"use client";

import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { menuItems } from "@/data/menuItems";

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filteredMenuItems = useMemo(() => {
   const q = search.trim().toLowerCase();
   if(!q) return menuItems;

   return menuItems.filter((item) => 
  item.name.toLowerCase().includes(q)
  );
  }, [search]);
  return (
    <main className="p-4">
      <SearchBar value={search} onChange={setSearch} />
      <div className="mt-6 grid gap-4">
        {filteredMenuItems.map((item) => (
          <ProductCard 
            key={item.id}
            id={item.id} 
            name={item.name} 
            price={item.price} />
        ))}
      </div>
    </main>
  );
}
