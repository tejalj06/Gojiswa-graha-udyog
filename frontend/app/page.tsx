import ProductCard from "../components/ProductCard";

export default function HomePage() {
  return (
    <main className="p-4">
     <div className="mt-6">
      <ProductCard name="Chakli" price={120} />
     </div>
    </main>
  );
}
