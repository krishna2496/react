import { commonConstants } from "../constants/common.constant";
let cart = JSON.parse(localStorage.getItem("cart"));
if (!cart) {
  cart = { data: [] };
}
export function cartReducer(state = cart, action) {
  switch (action.type) {
    case commonConstants.ADD_TO_CART_SUCCESS:
      return {
        data: action.data,
      };
    default:
      return state;
  }
}
