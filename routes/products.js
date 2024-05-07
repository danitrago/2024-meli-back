var express = require("express");
const {
  getProductDetails,
  getProductDescription
} = require("../services/products.service");
const { author } = require("../utils/author");
var router = express.Router();

/* GET product details. */
router.get("/:productId", async function (req, res, next) {
  try {
    const [details, description] = await Promise.all([
      getProductDetails(req.params.productId),
      getProductDescription(req.params.productId)
    ]);
    res.json({
      author,
      item: { ...details.data, description: description.data.plain_text }
    });
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;
