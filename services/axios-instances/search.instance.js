const axios = require("axios");
const { searchResultsAdapter } = require("../../adapters/searchResults.adapter");

const searchInstance = axios.create({
  baseURL: process.env.API_URL
});

searchInstance.interceptors.response.use((response) => {
  const process = searchResultsAdapter(response.data);
  response.data = process;
  return response;
});

module.exports = { searchInstance };
