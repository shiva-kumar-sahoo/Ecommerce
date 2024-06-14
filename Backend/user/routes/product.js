const router = require('express').Router();
const {getProducts, getProductById, getProductBySearch, getProductByCategory} = require('../controllers/productController');

// get products
router.get('/', getProducts );
// get product by search
router.get('/search', getProductBySearch );
// get product by id
router.get('/:id', getProductById );
// get product by category
router.get('/category/:category', getProductByCategory );

module.exports = router