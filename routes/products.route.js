const express = require("express");
const router = express.Router();
const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/product.controller");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const upload = require("../middleware/upload");

router.get("/", getAllProducts);
router.get("/:id", getProductById);

router.post("/", auth, admin, upload.array("images", 5), createProduct);
router.put("/:id", auth, admin, upload.array("images", 5), updateProduct);
router.delete("/:id", auth, admin, deleteProduct);

module.exports = router;