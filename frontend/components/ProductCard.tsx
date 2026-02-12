"use client";

import { useState } from "react";

type ProductCardProps = {
  name: string;
  price: number;
};

export default function ProductCard({ name, price }: ProductCardProps) {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);

  const decreaseQuantity = () => setQuantity((prev) => Math.max(prev - 1, 0));

  return (
    <div className="border rounded-xl p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="mt-1 text-gray-600">₹{price}</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={decreaseQuantity}
            className="h-9 w-9 rounded-full border text-lg leading-none"
            aria-label="Decrease quantity"
          >
            -
          </button>

          <span className="w-6 text-center">{quantity}</span>
          <button
            type="button"
            onClick={increaseQuantity}
            className="h-9 w-9 rounded-full border text-lg leading-none"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
