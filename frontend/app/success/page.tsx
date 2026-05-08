"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type Item = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type Order = {
  _id: string;
  items: Item[];
  totalPrice: number;
  paymentMethod: string;
  createdAt: string;
};

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      if (!orderId) return;

      try {
        const res = await fetch(`/api/orders/${orderId}`);
        const data = await res.json();

        if (!res.ok) {
          console.error(data.error);
          return;
        }

        setOrder(data.order);
      } catch (error) {
        console.error("Failed to fetch order:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (loading) {
    return <p className="text-center mt-10">Loading order...</p>;
  }

  if (!order) {
    return <p className="text-center mt-10">Order not found</p>;
  }

  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="text-2xl font-bold text-center">
        🎉 Order Placed Successfully!
      </h1>

      <div className="mt-6 rounded-xl border p-4">
        <p>
          <strong>Order ID:</strong> {order._id}
        </p>
        <p>
          <strong>Payment:</strong> {order.paymentMethod.toUpperCase()}
        </p>
        <p>
          <strong>Total:</strong> ₹{order.totalPrice}
        </p>
      </div>

      <div className="mt-6 rounded-xl border p-4">
        <h2 className="font-semibold">Items</h2>

        {order.items.map((item) => (
          <div key={item.id} className="flex justify-between border-b py-2">
            <div>
              {item.name} ({item.quantity})
            </div>
            <div>₹{item.price * item.quantity}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
