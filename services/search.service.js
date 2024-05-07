const { searchInstance } = require("./axios-instances/search.instance");

const searchProducts = async (query) =>
  searchInstance.get(`/sites/MLA/search?q=${query}`);

module.exports = {
  searchProducts
};
