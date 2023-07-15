import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from './store';
import { IProduct } from '@services';

export interface ICart {
  products: IProduct[];
}

const initialState: ICart = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductInCart: (state, action: PayloadAction<IProduct>) => {
      state.products.push(action.payload);
    },
    deleteProductFromCart: (state, action: PayloadAction<string>) => {
      state.products.filter((el) => el.title !== action.payload);
      state.products = state.products.filter((el) => el.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProductInCart, deleteProductFromCart } = cartSlice.actions;

export const selectCartProductsCount = (state: RootState) => state.cart.products.length;
export const selectCartProducts = (state: RootState) => state.cart.products;

export default cartSlice.reducer;
