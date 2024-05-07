const axios = require("axios");
const { productDetailsAdapter } = require("../../adapters/productDetails.adapter");

const productInstance = axios.create({
  baseURL: process.env.API_URL
});

productInstance.interceptors.response.use((response) => {
  // PRODUCT DETAILS ADAPTER
  const regex = /^\/items\/[A-Z]{3}\d{10}$/; // /items/MLA123456789 whitout /description
  if (regex.test(response.config.url)) {
    const process = productDetailsAdapter(response.data);
    response.data = process;
    return response;
  }
  return response;
});

module.exports = { productInstance };
