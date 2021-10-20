import { authService } from "../services/authService";
import { userConstants } from "../constants/user.constants";
import { history } from "../helper/history";
import { alertActions } from "./alertActions";

function login(email, password, from) {
  return (dispatch) => {
    authService.login(email, password).then(
      (user) => {
        dispatch(success(user));
        history.push("/home");
      },
      (error) => {
        dispatch(alertActions.error({ message: error.toString() }));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
}

export const authActions = {
  login,
  logout,
};
