import { combineReducers } from 'redux';
import basketReducer from "./basketReducer";
import alertReducer from "./alertReducer";

const reducer = combineReducers({
  basket: basketReducer,
  alerts: alertReducer,
});

export default reducer;
