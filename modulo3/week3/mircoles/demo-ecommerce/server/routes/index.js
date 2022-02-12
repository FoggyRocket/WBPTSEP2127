const router = require("express").Router();
const authRoutes = require("./auth");
const orderRoutes = require("./order.routes")
const productRoutes = require("./product.routes");
const cartRoutes = require("./cart.routes")
/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", authRoutes);
router.use("/product",productRoutes);
router.use("/cart",cartRoutes);
router.use("/order",orderRoutes);

module.exports = router;
