const Order = require("../../models/Order");
const User = require("../../models/User");
const Product = require("../../models/Product");

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json(err);
  }
};

const placeOrder = async (req, res) => {
  const user = await User.findById(req.body.userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const product = await Product.findById(req.body.productId);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  const amount = product.price * req.body.quantity;
  const newOrder = new Order({
    userId: req.body.userId,
    username: user.username,
    productId: req.body.productId,
    productname: product.name,
    amount: amount,
    address: user.address,
  });
  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};

const cancelOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    order.status = "cancelled";
    await order.save();
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getOrders,
  getOrderById,
  placeOrder,
  cancelOrder,
  updateOrder,
};
