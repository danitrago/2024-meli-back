var express = require("express");
var router = express.Router();
const { getSearchResults } = require("../controllers/search");

/* GET products listing. */
router.get("/", getSearchResults);

module.exports = router;
