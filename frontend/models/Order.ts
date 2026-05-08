import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  items: [
    {
      id: String,
      name: String,
      price: Number,
      quantity: Number,
    },
  ],

  customer: {
    name: String,
    address: String,
    phone: String,
    email: String,
    remarks: String,
  },

  totalPrice: Number,
  paymentMethod: String,
  createdAt: String,
});

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
