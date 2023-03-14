import { generateId, makeFirstLetterCapital } from "../../utils/alogomethod.js";
import {
  REGEX_EMAIL,
  REGEX_PASSWORS,
  REGEX_PHON,
  REGRX_PASSWORD_UNLIGEL_TUBS,
} from "../../utils/regex.js";

class User {
  #id;
  #name;
  #address;
  #phone;
  #email;
  #password = "";
  #createdAt;
  #isAdmin;
  #isBusiness;
  constructor(user, users = []) {
    const { address, phone, name, email, password, isAdmin, isBusiness } = user;
    const { state, cuntry, city, street, housNumber, zip } = address;
    this.#id = generateId(users, 1_000_000, 9_999_999);
    this.#name = this.setName(name);
    this.#address = this.checkAddress(address);
    this.#phone = this.checkPhone(phone);
    this.#email = this.checkUniqEmail(email, users);
    this.#password = this.checkPassword(password);
    this.#createdAt = new Date();
    this.#isAdmin = isAdmin || false;
    this.#isBusiness = this.changeBisiness(isBusiness) || false;
  }
  setName({ First, Last }) {
    return {
      First: makeFirstLetterCapital(First),
      Last: makeFirstLetterCapital(Last),
    };
  }
  checkPhone(numberPhon) {
    if (!numberPhon.match(REGEX_PHON)) throw Error("The phone number is wrong");
    return numberPhon;
  }
  checkUniqEmail(email, users) {
    if (!email.match(REGEX_EMAIL)) throw Error("The email address is wrong");
    const user = users.findIndex((user) => user.email === email);
    if (user !== -1) throw Error("The email address is exsist");

    return email;
  }

  checkAddress(address) {
    const { state, country, city, street, houseNumber, zip } = address;

    if (
      country.length < 2 ||
      city.length < 2 ||
      street.length < 2 ||
      typeof houseNumber !== "number" ||
      houseNumber <= 0 ||
      typeof zip !== "number" ||
      zip <= 0
    )
      throw new Error("Please enter a valid address!");

    return { state: state || "", country, city, street, houseNumber, zip };
  }
  checkPassword(password) {
    if (
      !REGEX_PASSWORS.test(password) ||
      REGRX_PASSWORD_UNLIGEL_TUBS.test(password)
    )
      throw Error(
        "The password must contain at least one uppercase letter in English. One lowercase letter in English. Four numbers and one of the following special characters !@#$%^&*-"
      );
    return password;
  }
  changeBisiness(user) {
    if (user._id !== this.#id && user.isAdmin)
      throw new Error("User must be the registered user");
    this.#isBusiness = !this.#isBusiness;
  }

  static findOneAndUpdate(user, users) {
    if (typeof user !== "object") throw new Error("Please enter a valid user!");

    if (Array.isArray(users) !== true || !users.length)
      throw new Error("Please enter array of users");

    const userInArray = users.find((item) => item._id === user._id);

    if (!userInArray) throw new Error("this user in not in the database!");

    const { address, phone, name, email, isBusiness } = user;

    userInArray.#name = userInArray.setName(name);

    userInArray.#address = userInArray.checkAddress(address);

    userInArray.#phone = userInArray.checkPhone(phone);

    userInArray.#email =
      email === userInArray.#email
        ? userInArray.#email
        : userInArray.checkUniqEmail(email, users);

    userInArray.#isBusiness = isBusiness ? isBusiness : userInArray.#isBusiness;

    return users;
  }

  get _id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get email() {
    return this.#email;
  }
  get password() {
    return this.#password;
  }
  get phone() {
    return this.#phone;
  }
  get createdA() {
    return this.#createdAt;
  }
  get isAdmin() {
    return this.#isAdmin;
  }
  get isBusiness() {
    return this.#isBusiness;
  }
  get address() {
    return this.#address;
  }
}

export default User;
const test = {
  address: {
    state: "mechora",
    country: "israel",
    city: "mechora",
    street: "mechora",
    houseNumber: 1,
    zip: 12345,
  },
  phone: "0584797758",
  name: {
    First: "ELI",
    Last: "blechmaN",
  },
  email: "eli92402@gmail.com",
  password: "Eli9400!",
  isAdmin: true,
  isBusiness: false,
};

const user = new User(test);
const test2 = {
  _id: user._id,
  address: {
    state: "nahriia",
    country: "israel",
    city: "mechora",
    street: "hbjhvbhvhjv",
    houseNumber: 1,
    zip: 178787,
  },
  phone: "0584797759",
  name: {
    First: "dodo",
    Last: "bom",
  },
  email: "eli924026@gmail.com",
  password: "Eli9400!",
};

try {
  const array = [user];

  User.findOneAndUpdate(test2, array);

  /* console.log(user); */
} catch (error) {
  console.log(error.message);
}
