import "./routes/links.js";

import "./routes/links.js";
import setCounter from "./pictures/helpers/setCounter.js";
import {
  SLIDER_IMAGE,
  SLIDER_CREDITS,
  SLIDER_NEXT_BTN,
  SLIDER_PREV_BTN,
} from "./services/domService.js";
import renderSlider from "./pictures/helpers/rendeslider.js";

const pictures = [
  {
    url: "https://cdn.pixabay.com/photo/2023/01/31/05/59/zebra-7757193_960_720.jpg",
    alt: "zebra",
    credits: "Jessica rabbit",
  },
  {
    url: "https://cdn.pixabay.com/photo/2023/01/23/09/26/cat-7738210_960_720.jpg",
    alt: "cat",
    credits: "hillary clinton",
  },
  {
    url: "https://cdn.pixabay.com/photo/2023/01/27/06/17/pheasant-7747830_960_720.jpg",
    alt: "pigeon",
    credits: "shula zaken",
  },
];
let counter = 0;
renderSlider(pictures, counter);
const onchengpic = (controler) => {
  counter = setCounter(pictures, counter, controler);
  renderSlider(pictures, counter);
  console.log(counter);
};

SLIDER_NEXT_BTN.addEventListener("click", () => onchengpic("next"));
SLIDER_PREV_BTN.addEventListener("click", () => onchengpic("perv"));
export default pictures;
