var express = require("express");
const { getSearchResults } = require("../controllers/search");
var router = express.Router();

/* GET products listing. */
router.get("/", getSearchResults);

module.exports = router;
