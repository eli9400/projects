import { SLIDER_CREDITS, SLIDER_IMAGE } from "../../services/domservice.js";

const renderSlider = (pictures, num) => {
  if (!pictures.length) return null;
  SLIDER_IMAGE.src = pictures[num].url;
  SLIDER_IMAGE.alt = pictures[num].alt;
  SLIDER_CREDITS.innerHTML = pictures[num].credits;
  return;
};
export default renderSlider;
