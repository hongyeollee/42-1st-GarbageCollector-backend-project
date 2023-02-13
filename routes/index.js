const express = require("express");
const router = express.Router();
const cartRouter = require("./cartRouter");

router.use("/cart", cartRouter.router);

const userRouter = require("./userRouter");
const productRouter = require("./productRouter");

router.use("/user", userRouter.router);
router.use("/products", productRouter.router);

module.exports = router;
