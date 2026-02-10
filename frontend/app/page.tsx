import ProductCard from "../components/ProductCard";

export default function HomePage() {
  return (
    <main className="p-4">
      <h1 className="text-xl font-bold">
        Gojiswa Graha Udyog
      </h1>

     <div className="mt-6">
      <ProductCard name="Chakli" price={120} />
     </div>
    </main>
  );
}
