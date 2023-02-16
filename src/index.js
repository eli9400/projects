import PAGES from "./services/pagemodels.js";
import { onchangepage } from "./routes/rauter.js";
import {
  HOME_PAGE_link,
  ABUT_PAGE_link,
  CREAT_PIC_link,
  SIGNUP_PAGE_LINK,
  LOGIN_PAGE_LINK,
} from "./services/domservice.js";
HOME_PAGE_link.addEventListener("click", () => onchangepage(PAGES.HOME));
ABUT_PAGE_link.addEventListener("click", () => onchangepage(PAGES.ABUT));
CREAT_PIC_link.addEventListener("click", () => onchangepage(PAGES.CREAT));
SIGNUP_PAGE_LINK.addEventListener("click", () => onchangepage(PAGES.SIGNUP));
LOGIN_PAGE_LINK.addEventListener("click", () => onchangepage(PAGES.LOGIN));
