"use client";

import { useMemo } from "react";
import { useAppSelector } from "../../store/hooks";
import {
  selectCartItemsMap,
  selectCartTotalPrice,
  selectCartTotalCount,
} from "../../store/cart/cartSelectors";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const checkoutSchema = z.object({
  name: z
    .string()
    .min(5, "Name must be at least 5 characters")
    .regex(/^[a-zA-Z ]+$/, "Name must contain only letters"),
  address: z.string().trim().min(10, "Address must be at least 10 characters"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  remarks: z.string().optional(),
});

export default function CheckoutPage() {
  const itemsMap = useAppSelector(selectCartItemsMap);
  const totalPrice = useAppSelector(selectCartTotalPrice);
  const totalCount = useAppSelector(selectCartTotalCount);

  const router = useRouter();

  useEffect(() => {
    if (totalCount === 0) {
      router.push("/");
    }
  }, [totalCount, router]);

  const items = useMemo(() => Object.values(itemsMap), [itemsMap]);

  type CheckoutFormData = z.infer<typeof checkoutSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = (data: CheckoutFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <main className="mx-auto max-w-3xl p-4">
      <h1 className="text-xl font-bold">Checkout</h1>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border bg-white p-4">
          <h2 className="text-base font-semibold">Customer Details</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
            <div>
              <label className="text-sm font-medium">Name *</label>
              <input
                {...register("name")}
                className="mt-1 w-full rounded-xl border p-3 text-sm outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">Address *</label>
              <textarea
                {...register("address")}
                className="mt-1 w-full rounded-xl border p-3 text-sm outline-none focus:ring-2 focus:ring-black"
                rows={3}
                placeholder="Enter full address"
              />
              {errors.address && (
                <p className="text-xs text-red-500">{errors.address.message}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">Phone Number *</label>
              <input
                {...register("phone")}
                className="mt-1 w-full rounded-xl border p-3 text-sm outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter phone number"
              />
              {errors.phone && (
                <p className="text-xs text-red-500">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">Email (optional)</label>
              <input
                {...register("email")}
                className="mt-1 w-full rounded-xl border p-3 text-sm outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter email"
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">Remarks (optional)</label>
              <textarea
                {...register("remarks")}
                className="mt-1 w-full rounded-xl border p-3 text-sm outline-none focus:ring-2 focus:ring-black"
                rows={2}
                placeholder="Any note for the business"
              />
            </div>

            <button
              type="submit"
              disabled={totalCount === 0 || isSubmitting}
              className={`w-full rounded-xl py-3 text-sm font-medium text-white ${
                totalCount === 0 || isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-black"
              }`}
            >
              {isSubmitting ? "Processing..." : "Continue to Payment"}
            </button>
          </form>
        </section>

        <section className="rounded-2xl border bg-white p-4">
          <h2 className="text-base font-semibold">Order Summary</h2>

          {items.length === 0 ? (
            <p className="mt-4 text-sm text-gray-600">Your cart is empty.</p>
          ) : (
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
                        ₹{item.price} × {item.quantity}
                      </div>
                    </div>

                    <div className="text-sm font-semibold">
                      ₹{item.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-600">{totalCount} items</div>
                <div className="text-base font-bold">₹{totalPrice}</div>
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
