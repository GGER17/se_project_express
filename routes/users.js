const {
  getUsers,
  createUser,
  getCurrentUser,
  updateUser,
} = require("../controllers/users");

const router = require("express").Router();

router.get("/me", getCurrentUser);
router.patch("/me", updateUser);

module.exports = router;
