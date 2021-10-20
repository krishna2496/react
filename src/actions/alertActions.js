import { alertConstant } from "../constants/alert-constants";

function success(alert) {
  return { type: alertConstant.SUCCESS, alert };
}

function error(alert) {
  return { type: alertConstant.ERROR, alert };
}

function warning(alert) {
  return { type: alertConstant.WARNING, alert };
}

export const alertActions = {
  success,
  error,
  warning,
};
