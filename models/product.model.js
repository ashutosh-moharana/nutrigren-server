const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
      name: { type: String, required: true },
      description: String,
      price: { type: Number, required: true },
      stock: { type: Number, required: true },
      images: [{ type: String }],
      category: { type: String, default: "General" },

}, { timestamps: true })

module.exports = mongoose.model("product", productSchema);