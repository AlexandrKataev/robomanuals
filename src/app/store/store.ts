import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cartSlice';
import filterReducer from './filterSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: { cart: cartReducer, filter: filterReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
