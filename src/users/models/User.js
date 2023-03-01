import {
  chckDuplicateAddress,
  randomNumBetween,
} from "../../utils/alogomethod.js";

class User {
  #id;
  #name;
  address;
  phone;
  #email = [];
  #password = "";
  #createdAt;
  #isAdmin = false;
  #isBusiness = false;
  constructor(user, users = []) {
    const { address, phone, name, email, password } = user;
    const { state, cuntry, city, street, housNumber, zip } = address;
    this.address = { state, cuntry, city, street, housNumber, zip };

    this.phone = this.checkPhone(phone);
    this.#createdAt = new Date();
    this.#id = this.generateuserId(users);
    this.#name = this.setName(name);

    this.#email[this.#id] = this.checkEmail(email);
    this.#password = this.checkPassword(password);
    /*     this.#email = this.checkEmail(email);
     */
  }
  generateuserId(arrayofusers) {
    if (arrayofusers.length >= 8_999_999) throw new Error("max users in array");
    const randomNumber = randomNumBetween(1_000_000, 9_999_999);
    const user = arrayofusers.findIndex((user) => user._id === randomNumber);
    if (user === -1) return randomNumber;
    this.generateuserId(arrayofusers);
  }
  get _id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }
  setName(name) {
    const regexname = /^[A-Z]{1}[a-z]{1,}/g;
    let first = name.FirstName;
    let lest = name.LastName;
    if (!(typeof first === "string" || lest !== "string"))
      throw Error("A standard name must be entered");
    if (!regexname.test(first)) {
      let firstLeter = first.substr(0, 1);
      let lestLeter = first.substr(1);
      lestLeter = lestLeter.toLowerCase();
      firstLeter = firstLeter.toUpperCase();
      name.FirstName = firstLeter.concat(lestLeter);

      console.log(first);
    }
    if (!regexname.test(lest)) {
      let firstLeter = lest.substr(0, 1);
      let lestLeter = lest.substr(1);
      lestLeter = lestLeter.toLowerCase();
      firstLeter = firstLeter.toUpperCase();
      name.LastName = firstLeter.concat(lestLeter);
      console.log(lest);
    }
    return name;
  }
  checkPhone(numberPhon) {
    const regexPhon =
      /^0(?:[234689]|5[0-689]|7[246789])(?![01])(?=)(-?\d{7})$/g;
    if (!regexPhon.test(numberPhon)) throw Error("The phone number is wrong");
    return numberPhon;
  }
  checkEmail(email) {
    const regexMaile = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!regexMaile.test(email)) throw Error("The email address is wrong");
    if (this.#email.includes(email)) {
      throw Error("The email address is exsist");
    }

    console.log(this.#email);

    return email;
  }
  get email() {
    return this.#email;
  }
  get password() {
    return this.#password;
  }
  checkPassword(password) {
    console.log(password);
    const regexPasswordUnlogelTubs = /[(?.*[()\s{}";'\|\.:]/g;
    const regexPassword =
      /^(?!.*[()\s{}[]";'\|\.])(?=.*[0-9]{4,})(?=.*[a-z])(?=.*[A-Z])(?=.*[-*!@$%^&]).{7,}$/g;
    if (
      !regexPassword.test(password) ||
      regexPasswordUnlogelTubs.test(password)
    )
      throw Error("The password is wrong");
    return password;
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
    FirstName: "elI",
    LastName: "blechmaN",
  },
  email: "eli92402@gmail.com",
  password: "Eli9400!",
};

const user = new User(test);
console.log(user);

const test1 = {
  address: {
    state: "mechora",
    cuntry: "israel",
    street: "mechora",
    housNumber: "1",
    zip: 12345,
  },
  phone: "0584797758",
  name: {
    FirstName: "elI",
    LastName: "blechmaN",
  },
  email: "eli9240@gmail.com",
  password: "Eli9400!",
};
const user1 = new User(test1);
console.log(user1);
