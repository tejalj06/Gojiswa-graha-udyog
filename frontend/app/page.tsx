"use client";

import { useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

export default function HomePage() {
  const [search, setSearch] = useState("");
  return (
    <main className="p-4">
      <SearchBar value={search} onChange={setSearch} />
      <div className="mt-6">
        <ProductCard name="Chakli" price={120} />
      </div>
    </main>
  );
}
