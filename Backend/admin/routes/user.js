const router = require("express").Router();
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const verifyToken = require("../middleware/verifyToken");

router.get("/", verifyToken, getUsers);

router.get("/:id", verifyToken, getUser);

router.put("/:id", verifyToken, updateUser);

router.delete("/:id", verifyToken, deleteUser);

module.exports = router;
