"use client";

import { addItem, removeItem } from "../store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
};

export default function ProductCard({ id, name, price }: ProductCardProps) {
  const dispatch = useAppDispatch();
  const quantity = useAppSelector((state) =>  state.cart.items[id]?.quantity ?? 0);
  
  const increaseQuantity = () => { 
    dispatch(addItem({ id, name, price }));
  };
  const decreaseQuantity = () => {
    dispatch(removeItem({id}));
  };

  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold text-gray-900">{name}</h2>
          <p className="mt-1 text-sm text-gray-600">₹{price}</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={decreaseQuantity}
            className="h-9 w-9 rounded-full border bg-gray-50 text-lg leading-none active:scale-95"
            aria-label="Decrease quantity"
          >
            -
          </button>

          <span className="w-6 text-center text-sm font-nedium">{quantity}</span>
          <button
            type="button"
            onClick={increaseQuantity}
            className="h-9 w-9 rounded-full border text-lg leading-none active:scale-95"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
