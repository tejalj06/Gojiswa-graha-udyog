"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "../../store/hooks";
import { clearCart } from "../../store/cart/cartSlice";
import OrderSummary from "../../components/OrderSummary";

type PaymentMethod = "upi" | "cod" | null;

export default function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>(null);
  const [upiConfirmed, setUpiConfirmed] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setUpiConfirmed(false);
  }, [selectedMethod]);

  const handlePlaceOrder = () => {
    if (!selectedMethod) return;

    const orderData = {
      paymentMethod: selectedMethod,
      date: new Date().toISOString(),
    };

    localStorage.setItem("latestOrder", JSON.stringify(orderData));

    dispatch(clearCart());
    router.push("/success");
  };

  return (
    <main className="mx-auto max-w-3xl p-4">
      <h1 className="text-xl font-bold">Payment</h1>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border bg-white p-4">
          <h2 className="text-base font-semibold">Choose Payment Method</h2>

          {/* UPI Option */}
          <div className="mt-4 rounded-xl border p-4">
            <div className="text-sm font-semibold">UPI (Recommended)</div>
            <p className="mt-1 text-xs text-gray-600">
              Pay using any UPI app (Google Pay, PhonePe, Paytm, BHIM).
            </p>

            <button
              type="button"
              onClick={() => setSelectedMethod("upi")}
              className={`mt-4 w-full rounded-xl py-3 text-sm font-medium text-white ${
                selectedMethod === "upi" ? "bg-black" : "bg-gray-700"
              }`}
            >
              Pay with UPI
            </button>
          </div>

          {/* COD Option */}
          <div className="mt-4 rounded-xl border p-4">
            <div className="text-sm font-semibold">Cash on Delivery</div>
            <p className="mt-1 text-xs text-gray-600">
              Pay in cash when your order is delivered.
            </p>

            <button
              type="button"
              onClick={() => setSelectedMethod("cod")}
              className={`mt-4 w-full rounded-xl py-3 text-sm font-medium text-white ${
                selectedMethod === "cod" ? "bg-black" : "bg-gray-700"
              }`}
            >
              Choose Cash on Delivery
            </button>
          </div>

          {/* UPI QR Section */}
          {selectedMethod === "upi" && (
            <div className="mt-6 rounded-xl border p-4">
              <div className="text-sm font-semibold">Scan & Pay</div>
              <p className="mt-1 text-xs text-gray-600">
                Scan this QR code using your UPI app.
              </p>

              <div className="mt-4 flex items-center justify-center rounded-lg bg-gray-100 p-6 text-sm text-gray-600">
                UPI QR Code will appear here
              </div>

              <button
                type="button"
                onClick={() => setUpiConfirmed(true)}
                className="mt-4 w-full rounded-xl bg-green-600 py-3 text-sm font-medium text-white"
              >
                I have paid
              </button>
            </div>
          )}

          {selectedMethod === "cod" && (
            <div className="mt-6 rounded-xl border p-4">
              <div className="text-sm font-semibold">
                Cash on Delivery Selected
              </div>
              <p className="mt-2 text-sm text-gray-600">
                You will pay when your order is delivered to your address.
              </p>
            </div>
          )}

          <button
            type="button"
            disabled={
              !selectedMethod || (selectedMethod === "upi" && !upiConfirmed)
            }
            onClick={handlePlaceOrder}
            className={`mt-6 w-full rounded-xl py-3 text-sm font-medium text-white ${
              !selectedMethod ? "bg-gray-400 cursor-not-allowed" : "bg-black"
            }`}
          >
            Place Order
          </button>

          {upiConfirmed && (
            <p className="mt-2 text-sm text-green-600">
              Payment confirmed. You can now place your order.
            </p>
          )}
        </section>

        <section className="rounded-2xl border bg-white p-4">
          <h2 className="text-base font-semibold">Order Summary</h2>
          <OrderSummary />
        </section>
      </div>
    </main>
  );
}
