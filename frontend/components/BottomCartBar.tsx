"use client";

import { useAppSelector } from "../store/hooks";
import {
  selectCartTotalCount,
  selectCartTotalPrice,
} from "../store/cart/cartSelectors";
import { formatINR } from "../utils/money";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function BottomCartBar() {
  const totalCount = useAppSelector(selectCartTotalCount);
  const totalPrice = useAppSelector(selectCartTotalPrice);

  const pathname = usePathname();
  if (pathname === "/checkout") return null;

  if (totalCount === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-white p-4 shadow-lg">
      <div className="mx-auto flex max-w-3xl items-center justify-between">
        <div>
          <div className="text-sm text-gray-600">{totalCount} items</div>
          <div className="font-semibold">{formatINR(totalPrice)}</div>
        </div>

        <Link
          href="/checkout"
          className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}
