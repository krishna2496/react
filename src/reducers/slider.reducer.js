import { sliderConstants } from "../constants/slider.constant";
let sliders = JSON.parse(localStorage.getItem("slider"));
const initialState = sliders
  ? { data: sliders, message: "", loading: true }
  : { data: {}, message: "", loading: true };

export function slider(state = initialState, action) {
  switch (action.type) {
    case sliderConstants.SLIDER_REQUESTS:
      return {
        data: {},
        message: "",
        loading: true,
      };

    case sliderConstants.SLIDER_SUCCESS:
      return {
        data: action.data,
        message: "",
        loading: false,
      };

    case sliderConstants.SLIDER_FAILURE:
      return {
        data: {},
        message: "",
        loading: false,
      };

    default:
      return state;
  }
}
