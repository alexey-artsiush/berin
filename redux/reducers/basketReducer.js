import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basket: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    resetBasket: (state, action) => {
      state.basket = []
    },
    setBasket: (state, action) => {
      state.basket = [...state.basket, action.payload]
    },
    replaceBasket: (state, action) => {
      state.basket = action.payload
    },
  },
});

export const { setBasket, resetBasket, replaceBasket } = basketSlice.actions;

export default basketSlice.reducer;
