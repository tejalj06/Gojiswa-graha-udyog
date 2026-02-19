"use client";

import { useAppSelector } from "../store/hooks";
import { selectCartTotalCount } from "../store/cart/cartSelectors";

export default function Header() {
  const totalCount = useAppSelector(selectCartTotalCount);

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex max-w-3xl items-center justify-between p-4">
        <div className="font-semibold">Gojiswa Graha Udyog</div>

        <button
          type="button"
          className="flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium"
          aria-label="Open cart"
        >
          <span>🛒</span>
          <span>Cart</span>
          <span className="ml-1 rounded-full bg-black px-2 py-0.5 text-xs text-white">
            {totalCount}
          </span>
        </button>
      </div>
    </header>
  );
}
