const { author } = require("../utils/author");
const {
  getProductDetails,
  getProductDescription
} = require("../services/products.service");

const getProduct = async (req, res, next) => {
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
};

module.exports = { getProduct };
