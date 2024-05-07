const productDetailsAdapter = (data) => {
  const process = {
    id: data.id,
    title: data.title,
    price: {
      currency: data.currency_id,
      amount: data.price
    },
    picture: data.pictures[0].url,
    condition: data.condition,
    free_shipping: data.shipping.free_shipping,
    sold_quantity: data.initial_quantity
  };
  return process;
};

module.exports = { productDetailsAdapter };
