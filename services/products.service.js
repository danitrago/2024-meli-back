const { productInstance } = require("./axios-instances/product.instance");

const getProductDetails = async (productId) =>
  productInstance.get(`/items/${productId}`);
const getProductDescription = async (productId) =>
  productInstance.get(`/items/${productId}/description`);

module.exports = {
  getProductDetails,
  getProductDescription
};
