import { combineReducers } from 'redux';
import basketReducer from "./basketReducer";

const reducer = combineReducers({
  basket: basketReducer,
});

export default reducer;
