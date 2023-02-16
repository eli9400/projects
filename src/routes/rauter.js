import PAGES from "../services/pagemodels.js";
import {
  HOME_PAGE,
  ABUT_PAGE,
  CREAT_PIC,
  LOGIN_PAGE,
  SIGNUP_PAGE,
  EROR_PAGE,
} from "../services/domservice.js";
export const onchangepage = (page) => {
  HOME_PAGE.className = "d-none";
  ABUT_PAGE.className = "d-none";
  CREAT_PIC.className = "d-none";
  SIGNUP_PAGE.className = "d-none";
  LOGIN_PAGE.className = "d-none";
  EROR_PAGE.className = "d-none";

  if (page === PAGES.HOME) return (HOME_PAGE.className = "d-block");
  if (page === PAGES.ABUT) return (ABUT_PAGE.className = "d-block");
  if (page === PAGES.CREAT) return (CREAT_PIC.className = "d-block");
  if (page === PAGES.SIGNUP) return (SIGNUP_PAGE.className = "d-block");
  if (page === PAGES.LOGIN) return (LOGIN_PAGE.className = "d-block");
  return (EROR_PAGE.className = "d-block");
};
