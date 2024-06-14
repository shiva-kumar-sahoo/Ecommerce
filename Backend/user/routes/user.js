const verifyToken = require('../middleware/verifyToken');
const router = require('express').Router();
const {getUser, updateUser, deleteUser} = require('../controllers/userController');

// get user
router.get('/profile/:id', verifyToken, getUser );
// update user details
router.put('/update/:id', verifyToken, updateUser );
// delete user
router.delete('/delete/:id', verifyToken, deleteUser);

module.exports = router