import { takeEvery, put } from 'redux-saga/effects';
import {GET_BASKET} from '../constants';
import { getBasketGoods } from '../../api/index';
import {setBasketGoods} from "@/redux/actions/actionCreator";

export function* handleBasketGoods() {
  const data = yield getBasketGoods()
  yield put(setBasketGoods(data));
}

export function* watchClickSaga() {
  yield takeEvery(GET_BASKET, handleBasketGoods);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
