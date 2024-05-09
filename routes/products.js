var express = require("express");
var router = express.Router();
const { getProduct } = require("../controllers/products");

/* GET product details. */
router.get("/:productId", getProduct);

module.exports = router;
