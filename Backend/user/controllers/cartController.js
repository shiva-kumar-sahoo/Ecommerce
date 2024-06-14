const Cart = require('../../models/Cart');

const getCartItems = async (req, res) => {
    const cart = await Cart.find({userId: req.params.id});
    if(cart.length > 0){
        res.status(200).json(cart);
    }else{
        res.status(200).json({message: "Cart is empty"});
    }
}

const addCartItem = async (req, res) => {

    const newCart = new Cart({
        userId: req.params.id,
        products: req.body
    });

    try{
        const savedCart = await newCart.save();
        res.status(200).json({"message": "Cart added successfully"});
    } catch(err){
        res.status(500).json(err);
    }
}

const deleteCartItem = async (req, res) => {

    try{
        const deletedCart = await Cart.findByIdAndDelete(req.params.cartid);
        if(!deletedCart) return res.status(404).json({"message": "Item does not exist in cart"});
        res.status(200).json({"message": "Cart deleted successfully"});
    } catch(err){
        res.status(500).json(err);
    }

}

module.exports = {getCartItems, addCartItem, deleteCartItem}