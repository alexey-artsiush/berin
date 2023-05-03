import {
  GET_BASKET,
  SET_BASKET,
} from "../constants";

export const getBasketGoods = () => ({
  type: GET_BASKET,
});

export const setBasketGoods = (payload) => ({
  type: SET_BASKET,
  payload,
});
