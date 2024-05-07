const searchResultsAdapter = (data) => {
  const categoryFilter = data.filters.find(
    (filter) => filter.id === "category"
  );

  let categoryNames = [];

  if (categoryFilter) {
    const { values } = categoryFilter;
    const categories = values.map((category) => category.path_from_root);
    categoryNames = categories.flat().map((category) => category.name);
  }

  const process = {
    categories: categoryNames,
    items: data.results.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping
      };
    })
  };
  return process;
};

module.exports = { searchResultsAdapter };
