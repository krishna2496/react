import { sliderService } from "../services/sliderService";
import { sliderConstants } from "../constants/slider.constant";
import { history } from "../helper/history";
import { alertActions } from "./alertActions";

function slider() {
  return (dispatch) => {
    dispatch(request());
    sliderService.slider().then(
      (data) => {
        dispatch(success(data));
      },
      (error) => {
        console.log(error.toString());
      }
    );
  };

  function request(data) {
    return { type: sliderConstants.SLIDER_REQUESTS, data };
  }

  function success(data) {
    return { type: sliderConstants.SLIDER_SUCCESS, data };
  }
  function request() {
    return { type: sliderConstants.SLIDER_REQUESTS };
  }
}

export const sliderActions = {
  slider,
};
