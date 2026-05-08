import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Order from "@/models/Order";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const { items, totalPrice, paymentMethod, customer } = body;

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    if (!paymentMethod) {
      return NextResponse.json(
        { error: "Payment method required" },
        { status: 400 },
      );
    }

    const order = await Order.create({
      items,
      totalPrice,
      paymentMethod,
      customer,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
