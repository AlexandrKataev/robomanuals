import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { productApi } from 'src/shared/api';

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 'wedo1' | 'wedo2' | 'wedo3';
  imageUrl: string;
};

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface PizzaState {
  products: Product[];
  status: Status;
}

const initialState: PizzaState = {
  products: [],
  status: Status.LOADING,
};

// export const fetchPizzas = createAsyncThunk<Pizza[], FetchPizzasArgs>(
//   'pizza/fetchPizzasStatus',
//   async (params) => {
//     const { categoryId, sortType } = params;
//     const response = await axios.get<Pizza[]>(
//       `https://632a05584c626ff832cfe7bb.mockapi.io/items?${
//         categoryId > 0 ? `category=${categoryId}` : ''
//       }&sortBy=${sortType}&order=desc`,
//     );
//     return response.data;
//   },
// );

// export const fetchProducts = createAsyncThunk<Product[]>(
//   'pizza/fetchProductsStatus',
//   async () => {
//     await productApi.getProducts().then((data) => {
//       const fetchedProducts = data.map((doc) => {
//         return doc.data();
//       });
//       return fetchedProducts;
//     });
//   }
// );

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchProducts.pending, (state, action) => {
  //     state.products = []; //  на всякий случай
  //     state.status = Status.LOADING;
  //   });
  //   builder.addCase(fetchProducts.fulfilled, (state, action) => {
  //     state.products = action.payload; // здесь передаем в state загруженные пиццы
  //     state.status = Status.SUCCESS;
  //   });
  //   builder.addCase(fetchProducts.rejected, (state, action) => {
  //     state.status = Status.ERROR;
  //     state.products = []; //  на всякий случай
  //   });
  // },
});

export const selectProducts = (state: RootState) => state.products;

/* Экспортируем редьюсеры */
export const { setItems } = productSlice.actions;

/* по дефолту экспортируем слайс (для создания стора) */
export default productSlice.reducer;
