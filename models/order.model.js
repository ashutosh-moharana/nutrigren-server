const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
      quantity: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  mode:{type:String,
    enum:["Cash On Delivery","Razorpay"],
    default:"Razorpay"
  },
  paymentStatus: {
    type: String,
    enum: ["pending", "paid"],
    default: "pending",
  },
  razorpayOrderId: String,
  razorpayPaymentId: String,
  
},{timestamps:true});

module.exports = mongoose.model("order", orderSchema);
