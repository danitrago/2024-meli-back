var express = require("express");
const { searchProducts } = require("../services/search.service");
const { author } = require("../utils/author");
var router = express.Router();

/* GET products listing. */
router.get("/", async function (req, res, next) {
  try {
    const response = await searchProducts(req.query.q);
    res.json({
      author,
      ...response.data
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
