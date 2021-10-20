import { alertConstant } from "../constants/alert-constants";

export function alertReducer(state = {}, action) {
  switch (action.type) {
    case alertConstant.SUCCESS:
      return {
        type: "succeess",
        message: action.alert.message,
      };

    case alertConstant.ERROR:
      return {
        type: "danger",
        message: action.alert.message,
      };

    case alertConstant.WARNING:
      return {
        type: "warning",
        message: action.alert.message,
      };

    default:
      return state;
  }
}
