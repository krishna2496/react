import { commonConstants } from "../constants/common.constant";

let intialState = { loading: true };
export function productReducer(state = intialState, action) {
  switch (action.type) {
    case commonConstants.PRODUCT_REQUEST:
      return {
        data: {},
        total: "",
        loading: true,
      };
    case commonConstants.PRODUCT_SUCCESS:
      return {
        data: action.data.product,
        total: action.data.total,
        loading: false,
      };
    case commonConstants.PRODCUT_FAILURE:
      return {
        data: {},
        total: "",
        message: action.message,
        loading: false,
      };
    default:
      return state;
  }
}
