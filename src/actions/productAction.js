import { commonConstants } from "../constants/common.constant";
import { productService } from "../services/productService";

function getProduct() {
  return (dispatch) => {
    dispatch(request());
    productService.fetchProduct().then(
      (data) => {
        dispatch(success(data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };

  function request() {
    return { type: commonConstants.PRODUCT_REQUEST };
  }
  function success(data) {
    return { type: commonConstants.PRODUCT_SUCCESS, data };
  }
  function failure() {
    return { type: commonConstants.PRODCUT_FAILURE };
  }
}

export const productAtion = {
  getProduct,
};
