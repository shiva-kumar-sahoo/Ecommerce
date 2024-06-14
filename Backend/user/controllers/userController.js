const User = require("../../models/User");
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res
      .status(200)
      .json({
        username: user.username,
        email: user.email,
        address: user.address,
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateUser = async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json({ message: "User updated successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getUser, updateUser, deleteUser };
