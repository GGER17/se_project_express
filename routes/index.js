const router = require("express").Router();
const userRouter = require("./users");
const clothingItemsRouter = require("./clothingItems");
const { login, createUser } = require("../controllers/users");
const auth = require("../middlewares/auth");
const { getItems } = require("../controllers/clothingItems");

router.post("/signup", createUser);
router.post("/signin", login);

router.get("/items", getItems);

router.use(auth);

router.use("/items", clothingItemsRouter);
router.use("/users", userRouter);

module.exports = router;
