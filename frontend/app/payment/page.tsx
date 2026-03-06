"use client";

import { useState } from "react";
import OrderSummary from "../../components/OrderSummary";

export default function PaymentPage() {
  const [showUPIQR, setShowUPIQR] = useState(false);

  return (
    <main className="mx-auto max-w-3xl p-4">
      <h1 className="text-xl font-bold">Payment</h1>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border bg-white p-4">
          <h2 className="text-base font-semibold">Choose Payment Method</h2>

          <div className="mt-4 rounded-xl border p-4">
            <div className="text-sm font-semibold">UPI (Recommended)</div>
            <p className="mt-1 text-xs text-gray-600">
              Pay using any UPI app (Google Pay, PhonePe, Paytm, BHIM).
            </p>

            <button
              type="button"
              onClick={() => setShowUPIQR(true)}
              className="mt-4 w-full rounded-xl bg-black py-3 text-sm font-medium text-white"
            >
              Pay with UPI
            </button>
          </div>

          {showUPIQR && (
            <div className="mt-6 rounded-xl border p-4">
              <div className="text-sm font-semibold">Scan & Pay</div>
              <p className="mt-1 text-xs text-gray-600">
                Scan this QR code using your UPI app.
              </p>

              <div className="mt-4 flex items-center justify-center rounded-lg bg-gray-100 p-6 text-sm text-gray-600">
                UPI QR Code will appear here
              </div>

              <p className="mt-3 text-xs text-gray-500">
                After payment, click “I have paid” (we’ll add confirmation
                later).
              </p>
            </div>
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
