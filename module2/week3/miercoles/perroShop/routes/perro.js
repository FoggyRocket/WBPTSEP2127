const router = require("express").Router();

/* GET home page */
//https://www.perroShop.com/perro/shop
router.get("/shop", (req, res, next) => {
  res.render("index");
});
//https://www.perroShop.com/perro/order
router.get("/order", (req, res, next) => {
    res.render("index");
  });

module.exports = router;
