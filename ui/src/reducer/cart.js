import { createSlice } from "@reduxjs/toolkit";
import {
  addProductToCart,
  removeProductFromCart,
  updateItemsInCart,
} from "../utils/cart";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalItems: 0,
    totalPrice: 0,
    displayTotalPrice: "0.00",
    items: [],
  },
  reducers: {
    addProduct: addProductToCart,
    removeProduct: removeProductFromCart,
    updateCart: updateItemsInCart,
  },
});

export const { addProduct, removeProduct, updateCart } = cartSlice.actions;

export const getCartInfo = (state) => state.cart;

export default cartSlice;
