import { userConstants } from "../constants/user.constants";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { loggedIn: true, user: user, token: user.token }
  : {};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
        token: action.user.token,
      };

    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
        token: action.user.token,
      };

    case userConstants.LOGIN_FAILURE:
      return {
        loggedIn: false,
        user: {},
        token: "",
      };

    default:
      return state;
  }
}
