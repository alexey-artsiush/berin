import { takeEvery, put } from 'redux-saga/effects';
import {GET_BASKET} from '../constants';
import { getBasketGoods } from '../../api/index';
import {setBasket} from "@/redux/reducers/basketReducer";

export function* handleBasketGoods() {
  const data = yield getBasketGoods()
  yield put(setBasket(data));
}

export function* watchClickSaga() {
  yield takeEvery(GET_BASKET, handleBasketGoods);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
