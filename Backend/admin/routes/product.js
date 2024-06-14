const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');
const {getProducts, getProductById, createProduct, updateProduct, deleteProduct} = require('../controllers/productController');

router.get("/", verifyToken, getProducts);

router.get("/:id", verifyToken, getProductById);

router.post("/", verifyToken, createProduct);

router.put("/:id", verifyToken, updateProduct);

router.delete("/:id", verifyToken, deleteProduct);

module.exports = router