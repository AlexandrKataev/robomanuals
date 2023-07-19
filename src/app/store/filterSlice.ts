import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Categories } from '@services';

interface IFilterState {
  searchValue: string;
  category: Categories | 'all';
}

const initialState: IFilterState = {
  searchValue: '',
  category: 'all',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<Categories | 'all'>) => {
      state.category = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const selectCategory = (state: RootState) => state.filter.category;
export const selectSearchValue = (state: RootState) => state.filter.searchValue;

export const { setCategory, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
