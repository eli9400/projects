import {
  chckDuplicateAddress,
  generateId,
  makeEveryFirstLetterCapital,
  makeFirstLetterCapital,
} from "../../utils/alogomethod.js";

class User {
  #id;
  #name;
  address;
  #phone;
  #email;
  #password = "";
  #createdAt;
  #isAdmin = false;
  #isBusiness = false;
  constructor(user, users = []) {
    const { address, phone, name, email, password } = user;
    const { state, cuntry, city, street, housNumber, zip } = address;
    this.address = { state, cuntry, city, street, housNumber, zip };

    this.#phone = this.checkPhone(phone);
    this.#createdAt = new Date();
    this.#id = generateId(users, 1_000_000, 9_999_999);
    this.#name = this.setName(name);

    this.#email = this.checkEmail(email, users);

    this.#password = this.checkPassword(password);
  }
  setName({ First, Last }) {
    return {
      First: makeFirstLetterCapital(First),
      Last: makeFirstLetterCapital(Last),
    };
  }
  checkPhone(numberPhon) {
    const regexPhon =
      /^0(?:[234689]|5[0-689]|7[246789])(?![01])(?=)(-?\d{7})$/g;
    if (!regexPhon.test(numberPhon)) throw Error("The phone number is wrong");
    return numberPhon;
  }
  checkEmail(email, users) {
    const regexMaile = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!regexMaile.test(email)) throw Error("The email address is wrong");
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
    const regexPasswordUnlogelTubs = /[(?.*[()\s{}";'\|\.:]/g;
    const regexPassword =
      /^(?!.*[()\s{}[]";'\|\.])(?=.*[0-9]{4,})(?=.*[a-z])(?=.*[A-Z])(?=.*[-*!@$%^&]).{7,}$/g;
    if (
      !regexPassword.test(password) ||
      regexPasswordUnlogelTubs.test(password)
    )
      throw Error(
        "The password must contain at least one uppercase letter in English. One lowercase letter in English. Four numbers and one of the following special characters !@#$%^&*-"
      );
    return password;
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
}

export default User;
const test = {
  address: {
    state: "mechora",
    cuntry: "israel",
    street: "mechora",
    housNumber: "1",
    zip: 12345,
  },
  phone: "0584797758",
  name: {
    First: "ELI",
    Last: "blechmaN",
  },
  email: "eli92402@gmail.com",
  password: "Eli9400!",
};

const user = new User(test);
console.log(user);
