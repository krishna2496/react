import { commonConstants } from "../constants/common.constant";

function changeLang(langCode) {
  localStorage.setItem("lang", langCode);
  return { type: commonConstants.CHANGE_LANG, langCode };
}

export const commonActions = {
  changeLang,
};
