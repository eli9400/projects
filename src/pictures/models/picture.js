import { randomNumBetween } from "../../utils/alogomethod.js";

class picture {
  #id;
  url;
  alt;
  credits;
  #price;
  #createdAt;
  likes = [];
  category;
  #user_id;
  constructor(picture, pictures = []) {
    const { url, alt, credits, price, category, user_id } = picture;
    if (!url || !alt || !price || !credits || !user_id)
      throw new Error("bad request! ");
    this.#id = this.generateId(pictures);
    this.url = url;
    this.alt = alt;
    this.credits = credits;
    this.#price = price;
    this.category = category || "";
    this.#user_id = user_id;
    this.#createdAt = new Date();
  }
  generateId(arrayofPictures) {
    if (arrayofPictures.length >= 8_999_999)
      throw new Error("max pics in array");
    const randomNumber = randomNumBetween(1_000_000, 9_999_999);
    const pic = arrayofPictures.findIndex((pic) => pic._id === randomNumber);
    if (pic === -1) return randomNumber;
    this.generateId(arrayofPictures);
  }
  get _id() {
    return this.#id;
  }
  get createdAt() {
    return this.#createdAt;
  }
  get price() {
    return this.#price;
  }
  get user_id() {
    return this.#user_id;
  }

  /*   set price({ newPrice, user }) {
    if (user._id !== this.#user_id)
      throw new Error("only user that made the card can change it's price!");
    this.#price = newPrice;
  } */
}

export default picture;

/* try {
  const pic = new picture({
    url: "dd",
    alt: "dd",
    credits: "dd",
    price: 5,
    user_id: "dddd",
  });
  console.log(pic);
} catch (error) {
  error.status = 400;
  console.log(error.message);
  console.log(error.status);
} */
