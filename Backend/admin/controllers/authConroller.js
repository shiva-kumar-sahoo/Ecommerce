const AdminUser = require("../../models/AdminUser");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const newAdminUser = new AdminUser({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedAdminUser = await newAdminUser.save();
    res.status(201).json({ message: "Admin added successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
};

const login = async (req, res) => {
  try {
    const user = await AdminUser.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).json({ message: "Admin not found" });
      return;
    }
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    if (req.body.password !== originalPassword) {
      res.status(401).json({ message: "Wrong credentials" });
      return;
    }
    const accessToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SEC,
      {
        expiresIn: "3d",
      }
    );
    res
      .status(200)
      .json({
        message: "Login successful",
        id: user._id,
        accessToken: accessToken,
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { register, login };
