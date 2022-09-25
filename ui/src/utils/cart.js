/* 
state = {
    totalItems: 0,
    totalPrice: 0,
    displayTotalPrice: "0.00",
    items: [{
       product,
    productId,
    quantity,
    totalItemPrice
    }],
  },
*/

const addItem = (state, product) => {
  state.items.push({
    product,
    productId: product.id,
    quantity: 1,
    totalItemPrice: product.price,
  });
};

const updateItems = (state, product) => {
  const { items = [] } = state;
  const index = items.findIndex((item) => item.productId === product.id);

  if (index >= 0) {
    state.items[index].quantity += 1;
    state.items[index].totalItemPrice += product.price;
  }
};

export const updateItemsInCart = (state, { payload: product }) => {
  updateItems(state, product);
  state.totalItems++;
  state.totalPrice += product.price;
  state.displayTotalPrice = state.totalPrice.toFixed(2);
};

export const addProductToCart = (state, { payload: product }) => {
  state.totalItems++;
  state.totalPrice += product.price;
  state.displayTotalPrice = state.totalPrice.toFixed(2);

  const { items } = state;

  if (!items.length) addItem(state, product);
  else if (!items.find((item) => item.productId === product.id)) {
    addItem(state, product);
  } else updateItems(state, product);
};

export const removeProductFromCart = (state, { payload: product }) => {
  const { items = [] } = state;
  const index = items.findIndex((item) => item.productId === product.id);

  if (index >= 0) {
    console.log(state.items);
    if (items[index].quantity > 1) {
      state.items[index].quantity -= 1;
      state.items[index].totalItemPrice -= product.price;
    } else {
      state.items.splice(index, 1);
    }
    state.totalItems--;
    state.totalPrice -= product.price;
    state.displayTotalPrice = state.totalPrice.toFixed(2);
  }
};
