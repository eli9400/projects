import "./routes/links.js";
import renderSlider from "./pictures/components/rendeslider.js";
import "./pictures/models/picture.js";
import "./users/models/User.js";
import initialData from "./initial-data/initial.data.js";
import "./pictures/services/pictureServices.js";

/* window.pictures = initialData().pictures; */

window.pictures = initialData().pictures;
console.log(initialData().pictures);
renderSlider(pictures, 0);
