const express = require("express");
const {
  createCODOrder,
  createRazorpayOrder,
  verifyRazorpayPayment,
  getUserOrders,
  getAllOrders,
  updateOrderStatus,
  handleRazorpayWebhook,
} = require("../controllers/order.controller");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const router = express.Router();

router.get("/", auth, getUserOrders);
router.post("/cod", auth, createCODOrder);
router.post("/create-payment", auth, createRazorpayOrder);
router.post("/verify-payment", auth, verifyRazorpayPayment);
router.post("/webhook", handleRazorpayWebhook);

// Admin Routes
router.get("/all", auth, admin, getAllOrders);
router.put("/:id/status", auth, admin, updateOrderStatus);

module.exports = router;

