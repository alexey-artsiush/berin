import { SET_BASKET } from "../constants";

const initialState = {
  basket: [],
};

const basket = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_BASKET:
      return {
        ...state,
        basket: [...state.basket, ...payload],
      };
    default: return state;
  }
};

export default basket;
