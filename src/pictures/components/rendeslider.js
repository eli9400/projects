import {
  SLIDER_CREDITS,
  SLIDER_IMAGE,
  SLIDER_NEXT_BTN,
  SLIDER_PREV_BTN,
} from "../../services/domservice.js";
import setCounter from "../helpers/setCounter.js";

const renderSlider = (pictures, num) => {
  if (!pictures.length) return null;
  SLIDER_IMAGE.src = pictures[num].url;
  SLIDER_IMAGE.alt = pictures[num].alt;
  SLIDER_CREDITS.innerHTML = pictures[num].credits;
  return;
};
const onchengpic = (controler) => {
  counter = setCounter(pictures, counter, controler);
  renderSlider(pictures, counter);
};
let counter = 0;
SLIDER_NEXT_BTN.addEventListener("click", () => onchengpic("next"));
SLIDER_PREV_BTN.addEventListener("click", () => onchengpic("perv"));

export default renderSlider;
