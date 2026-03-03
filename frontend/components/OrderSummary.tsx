"use client";

import { formatINR } from "../utils/money";
import { useAppSelector } from "../store/hooks";
import {
  selectCartItemsMap,
  selectCartTotalCount,
  selectCartTotalPrice,
} from "../store/cart/cartSelectors";

export default function OrderSummary() {
  const itemsMap = useAppSelector(selectCartItemsMap);
  const totalCount = useAppSelector(selectCartTotalCount);
  const totalPrice = useAppSelector(selectCartTotalPrice);

  const items = Object.values(itemsMap);

  if (items.length === 0) {
    return <p className="mt-4 text-sm text-gray-600">Your cart is empty.</p>;
  }

  return (
    <>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-start justify-between border-b pb-3"
          >
            <div>
              <div className="text-sm font-medium">{item.name}</div>
              <div className="text-xs text-gray-600">
                {formatINR(item.price)} × {item.quantity}
              </div>
            </div>

            <div className="text-sm font-semibold">
              {formatINR(item.price * item.quantity)}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-600">{totalCount} items</div>
        <div className="text-base font-bold">{formatINR(totalPrice)}</div>
      </div>
    </>
  );
}
