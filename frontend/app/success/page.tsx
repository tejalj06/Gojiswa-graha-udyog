"use client";

import { useEffect, useState } from "react";

type OrderData = {
  paymentMethod: string;
  date: string;
};

export default function SuccessPage() {
  const [order, setOrder] = useState<OrderData | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("latestOrder");
    if (stored) {
      setOrder(JSON.parse(stored));
    }
  }, []);

  if (!order) {
    return (
      <main className="mx-auto max-w-2xl p-6 text-center">
        <h1 className="text-xl font-bold">No Order Found</h1>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-2xl p-6 text-center">
      <h1 className="text-2xl font-bold">🎉 Order Placed Successfully!</h1>

      <div className="mt-6 rounded-xl border p-4 text-left">
        <div className="text-sm">
          <strong>Payment Method:</strong> {order.paymentMethod.toUpperCase()}
        </div>

        <div className="text-sm mt-2">
          <strong>Order Date:</strong> {new Date(order.date).toLocaleString()}
        </div>
      </div>

      <a
        href="/"
        className="mt-6 inline-block rounded-xl bg-black px-6 py-3 text-white"
      >
        Go Back to Home
      </a>
    </main>
  );
}
