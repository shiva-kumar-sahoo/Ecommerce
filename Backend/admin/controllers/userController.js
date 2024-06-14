const User = require('../../models/User');
const getUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    } catch(err){
        res.status(500).json(err);
    }
}

const getUser = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch(err){
        res.status(500).json(err);
    }
}

const updateUser = async (req, res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        if(!user) return res.status(404).json({"message": "User not found"});
        res.status(200).json({"message": "User updated successfully"});
    } catch(err){
        res.status(500).json(err);
    }
}

const deleteUser = async (req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user) return res.status(404).json({"message": "User not found"});
        res.status(200).json({"message": "User deleted successfully"});
    } catch(err){
        res.status(500).json(err);
    }
}

module.exports = {getUsers, getUser, updateUser, deleteUser}