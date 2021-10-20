import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { alertReducer } from "./AlertReducer";
import { slider } from "./slider.reducer";
import { langReducer } from "./lang.reducer";
import { productReducer } from "./ProductReducer";
import { cartReducer } from "./CartReducer";

const rootReducer = combineReducers({
  langReducer,
  loginReducer,
  alertReducer,
  slider,
  productReducer,
  cartReducer,
});

export default rootReducer;
