import { commonConstants } from "../constants/common.constant";
function addToCart(product) {
  return (dispatch) => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart.data.length) {
      console.log(cart);
      cart.data.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch(success(cart.data));
    } else {
      let cartArray = { data: [] };
      cartArray.data.push(product);
      localStorage.setItem("cart", JSON.stringify(cartArray));
      dispatch(success(cartArray.data));
    }
  };
  function success(data) {
    return { type: commonConstants.ADD_TO_CART_SUCCESS, data };
  }
  function failure(data) {
    return { type: commonConstants.ADD_TO_CART_FAILURE, data };
  }
}
export const cartAction = {
  addToCart,
};
