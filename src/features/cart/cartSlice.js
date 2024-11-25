import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () =>
  JSON.parse(localStorage.getItem('cart')) || defaultState;

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const item = state.cartItems.find((el) => el.cartID === product.cartID);
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.amount * product.price;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success('Item added sucessfully!!');
    },

    clearCart: (state) => {
      localStorage.setItem('cart', JSON.stringify(defaultState));
      return defaultState;
    },

    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const product = state.cartItems.find((item) => item.cartID === cartID);
      state.cartItems = state.cartItems.filter(
        (item) => item.cartID !== cartID
      );

      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.amount * product.price;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success('Item removed sucessfully!!');
    },

    editItem: (state, action) => {
      const { cartID, amount } = action.payload;
      const product = state.cartItems.find((item) => item.cartID === cartID);

      state.numItemsInCart += amount - product.amount;
      state.cartTotal += (amount - product.amount) * product.price;
      product.amount = amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success('Item updated sucessfully!!');
    },

    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.tax;
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;