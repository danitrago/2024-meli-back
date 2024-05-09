const { searchProducts } = require("../services/search.service");
const { author } = require("../utils/author");

const getSearchResults = async (req, res, next) => {
  try {
    const response = await searchProducts(req.query.q);
    res.json({
      author,
      ...response.data
    });
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = { getSearchResults };
