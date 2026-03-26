"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  selectCartItemsMap,
  selectCartTotalPrice,
} from "../../store/cart/cartSelectors";
import { clearCart } from "../../store/cart/cartSlice";
import OrderSummary from "../../components/OrderSummary";

type PaymentMethod = "upi" | "cod" | null;

export default function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>(null);
  const [upiConfirmed, setUpiConfirmed] = useState(false);

  const itemsMap = useAppSelector(selectCartItemsMap);
  const totalPrice = useAppSelector(selectCartTotalPrice);

  const items = Object.values(itemsMap);

  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setUpiConfirmed(false);
  }, [selectedMethod]);

  const handlePlaceOrder = async () => {
    if (!selectedMethod) return;

    const orderData = {
      items,
      totalPrice,
      paymentMethod: selectedMethod,
    };

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error);
        return;
      }

      console.log("Order success:", data);

      dispatch(clearCart());

      router.push("/success");
    } catch (error) {
      console.error("Order failed:", error);
    }
  };

  return (
    <main className="mx-auto max-w-3xl p-4">
      <h1 className="text-xl font-bold">Payment</h1>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border bg-white p-4">
          <h2 className="text-base font-semibold">Choose Payment Method</h2>

          {/* UPI Option */}
          <button
            onClick={() => setSelectedMethod("upi")}
            className={`mt-4 w-full rounded-xl border p-3 text-left ${
              selectedMethod === "upi" ? "border-black" : "border-gray-300"
            }`}
          >
            Pay via UPI
          </button>

          {/* COD Option */}
          <button
            onClick={() => setSelectedMethod("cod")}
            className={`mt-2 w-full rounded-xl border p-3 text-left ${
              selectedMethod === "cod" ? "border-black" : "border-gray-300"
            }`}
          >
            Cash on Delivery
          </button>

          {selectedMethod === "upi" && (
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                Scan QR and complete payment
              </p>

              <div className="mt-2 h-40 w-full bg-gray-200 flex items-center justify-center">
                QR CODE
              </div>

              <button
                type="button"
                onClick={() => setUpiConfirmed(true)}
                className="mt-4 w-full rounded-xl bg-green-600 py-3 text-sm font-medium text-white"
              >
                I have paid
              </button>

              {upiConfirmed && (
                <p className="mt-2 text-sm text-green-600">
                  Payment confirmed. You can now place your order.
                </p>
              )}
            </div>
          )}

          {/* COD Section */}
          {selectedMethod === "cod" && (
            <p className="mt-4 text-sm text-gray-600">
              Pay in cash at the time of delivery.
            </p>
          )}

          <button
            type="button"
            onClick={handlePlaceOrder}
            disabled={
              !selectedMethod || (selectedMethod === "upi" && !upiConfirmed)
            }
            className={`mt-6 w-full rounded-xl py-3 text-sm font-medium text-white ${
              !selectedMethod || (selectedMethod === "upi" && !upiConfirmed)
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black"
            }`}
          >
            Place Order
          </button>
        </section>

        <section className="rounded-2xl border bg-white p-4">
          <h2 className="text-base font-semibold">Order Summary</h2>
          <OrderSummary />
        </section>
      </div>
    </main>
  );
}
