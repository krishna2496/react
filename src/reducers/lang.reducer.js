import { commonConstants } from "../constants/common.constant";

let lang = localStorage.getItem("lang");
const initialState = lang ? { lang: lang } : { lang: "en" };

export function langReducer(state = initialState, action) {
  switch (action.type) {
    case commonConstants.CHANGE_LANG:
      return {
        lang: action.langCode,
      };

    default:
      return state;
  }
}
