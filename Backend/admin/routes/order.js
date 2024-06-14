const router = require("express").Router();
const verifyToken = require("../middleware/verifyToken");
const {
  getOrders,
  getOrderById,
  placeOrder,
  cancelOrder,
  updateOrder,
} = require("../controllers/orderController");

router.get("/", verifyToken, getOrders);

router.get("/:id", verifyToken, getOrderById);

router.post("/", verifyToken, placeOrder);

router.post("/:id", verifyToken, cancelOrder);

router.put("/:id", verifyToken, updateOrder);

module.exports = router;
