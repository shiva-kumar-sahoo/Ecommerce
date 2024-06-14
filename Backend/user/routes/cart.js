const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');
const {getCartItems, addCartItem, deleteCartItem} = require('../controllers/cartController');

// get cart items
router.get('/:id', verifyToken, getCartItems );
// add cart item
router.post('/add/:id', verifyToken, addCartItem );
// delete cart item
router.delete('/delete/:cartid', verifyToken, deleteCartItem );
module.exports = router