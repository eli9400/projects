import { onInputChange, onReset } from "../../forms/utils/formMethods.js";
import {
  LOGIN_EMAIL_FIELD,
  LOGIN_EMAIL_ERROR,
  LOGIN_PASSWORD_FIELD,
  LOGIN_PASSWORD_ERROR,
  LOGIN_SUBMIT_BTN,
  REGISTER_CUNTRY,
  REGISTER_STATE,
  REGISTER_FIRST_NAME,
  REGISTER_LAST_NAME,
  REGISTER_CITY,
  REGISTER_EMAIL,
  REGISTER_HOUSENUMBER,
  REGISTER_PASSWORD,
  REGISTER_PHONE,
  REGISTER_STREET,
  REGISTER_ZIP,
  REGISTER_CUNTRY_ERROR,
  REGISTER_STATE_ERROR,
  REGISTER_CITY_ERROR,
  REGISTER_EMAIL_ERROR,
  REGISTER_HOUSENUMBER_ERROR,
  REGISTER_FIRST_NAME_ERROR,
  REGISTER_LAST_NAME_ERROR,
  REGISTER_PASSWORD_ERROR,
  REGISTER_PHONE_ERROR,
  REGISTER_STREET_ERROR,
  REGISTER_ZIP_ERROR,
  REGISTER_SUBMIT_BTN,
  REGISTER_CENCEL_BTN,
  CHECK_BUSINESS_BTN,
} from "../../services/domService.js";
import User from "../models/User.js";
import useForm from "./../../forms/useForm.js";
import { getUser, setToken } from "./localStorageService.js";

export const login = () => {
  const INITIAL_LOGIN_FORM = {
    email: "",
    password: "",
  };

  const LOGIN_SCHEMA = {
    email: "email",
    password: "password",
  };

  const LOGIN_INPUTS_ARRAY = [LOGIN_EMAIL_FIELD, LOGIN_PASSWORD_FIELD];
  const LOGIN_ERROR_ARRAY = [LOGIN_EMAIL_ERROR, LOGIN_PASSWORD_ERROR];

  const handleLoginSubmit = (data) => {
    // זיהוי אם יש משתמשים

    if (!getUser()) return console.log("not have a users");
    // זיהוי המשתמש במערך המשתמשים
    const loguser = getUser();
    console.dir(loguser);
    /* users.includes(email); */

    // אותנתיקציה של הסיסמה שהוזנה עם סיסמת המשתמש

    // creating token - payload
    // set token in localStorage
    // set global variable user

    onReset(
      LOGIN_INPUTS_ARRAY,
      LOGIN_ERROR_ARRAY,
      LOGIN_SUBMIT_BTN,
      form.handleReset
    );
    // move to home page
  };

  const form = useForm(INITIAL_LOGIN_FORM, LOGIN_SCHEMA, handleLoginSubmit);

  LOGIN_EMAIL_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      LOGIN_EMAIL_ERROR,
      LOGIN_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
  });

  LOGIN_PASSWORD_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      LOGIN_PASSWORD_ERROR,
      LOGIN_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
  });

  LOGIN_SUBMIT_BTN.addEventListener("click", form.onSubmit);
};

export const registerService = () => {
  const INISHIL_REGISTERFORM = {
    first: "",
    last: "",
    country: "",
    state: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
    phone: "",
    email: "",
    password: "",
  };
  const REGISTAR_SCHEMA = {
    first: ["min", 2],
    last: ["min", 2],
    country: ["min", 2],
    state: ["min", 2],
    city: ["min", 2],
    street: "required",
    houseNumber: "required",
    zip: "required",
    phone: "string",
    email: "email",
    password: "password",
  };
  const REGISTAR_INPUTS_ARRAY = [
    REGISTER_CUNTRY,
    REGISTER_STATE,
    REGISTER_FIRST_NAME,
    REGISTER_LAST_NAME,
    REGISTER_CITY,
    REGISTER_EMAIL,
    REGISTER_HOUSENUMBER,
    REGISTER_PASSWORD,
    REGISTER_PHONE,
    REGISTER_STREET,
    REGISTER_ZIP,
  ];
  const REGISTAR_ERRORS_ARRAY = [
    REGISTER_CUNTRY_ERROR,
    REGISTER_STATE_ERROR,
    REGISTER_CITY_ERROR,
    REGISTER_EMAIL_ERROR,
    REGISTER_HOUSENUMBER_ERROR,
    REGISTER_FIRST_NAME_ERROR,
    REGISTER_LAST_NAME_ERROR,
    REGISTER_PASSWORD_ERROR,
    REGISTER_PHONE_ERROR,
    REGISTER_STREET_ERROR,
    REGISTER_ZIP_ERROR,
  ];
  const hendelSubmitRgistar = (data) => {
    data.isBusiness = CHECK_BUSINESS_BTN.checked;

    const {
      state,
      country,
      city,
      street,
      houseNumber,
      zip,
      first,
      last,
      email,
      password,
    } = data;
    data.address = { state, country, city, street, houseNumber, zip };
    data.name = { first, last };

    const user = new User(data);
    users.push(user);
    const obj = { email, password };
    setToken(users);

    /* console.log(localStorage); */
    onReset(
      REGISTAR_INPUTS_ARRAY,
      REGISTAR_ERRORS_ARRAY,
      REGISTER_SUBMIT_BTN,
      reg.handleReset
    );
  };
  const reg = useForm(
    INISHIL_REGISTERFORM,
    REGISTAR_SCHEMA,
    hendelSubmitRgistar
  );
  REGISTER_FIRST_NAME.addEventListener("input", (e) =>
    onInputChange(
      e,
      REGISTER_FIRST_NAME_ERROR,
      REGISTER_SUBMIT_BTN,
      reg.handleInputChange,
      reg.handleDisableSubmitBtn
    )
  );
  REGISTER_LAST_NAME.addEventListener("input", (e) =>
    onInputChange(
      e,
      REGISTER_LAST_NAME_ERROR,
      REGISTER_SUBMIT_BTN,
      reg.handleInputChange,
      reg.handleDisableSubmitBtn
    )
  );
  REGISTER_CUNTRY.addEventListener("input", (e) =>
    onInputChange(
      e,
      REGISTER_CUNTRY_ERROR,
      REGISTER_SUBMIT_BTN,
      reg.handleInputChange,
      reg.handleDisableSubmitBtn
    )
  );
  REGISTER_STATE.addEventListener("input", (e) =>
    onInputChange(
      e,
      REGISTER_STATE_ERROR,
      REGISTER_SUBMIT_BTN,
      reg.handleInputChange,
      reg.handleDisableSubmitBtn
    )
  );
  REGISTER_CITY.addEventListener("input", (e) =>
    onInputChange(
      e,
      REGISTER_CITY_ERROR,
      REGISTER_SUBMIT_BTN,
      reg.handleInputChange,
      reg.handleDisableSubmitBtn
    )
  );
  REGISTER_EMAIL.addEventListener("input", (e) =>
    onInputChange(
      e,
      REGISTER_EMAIL_ERROR,
      REGISTER_SUBMIT_BTN,
      reg.handleInputChange,
      reg.handleDisableSubmitBtn
    )
  );
  REGISTER_HOUSENUMBER.addEventListener("input", (e) =>
    onInputChange(
      e,
      REGISTER_HOUSENUMBER_ERROR,
      REGISTER_SUBMIT_BTN,
      reg.handleInputChange,
      reg.handleDisableSubmitBtn
    )
  );
  REGISTER_PASSWORD.addEventListener("input", (e) =>
    onInputChange(
      e,
      REGISTER_PASSWORD_ERROR,
      REGISTER_SUBMIT_BTN,
      reg.handleInputChange,
      reg.handleDisableSubmitBtn
    )
  );
  REGISTER_PHONE.addEventListener("input", (e) =>
    onInputChange(
      e,
      REGISTER_PHONE_ERROR,
      REGISTER_SUBMIT_BTN,
      reg.handleInputChange,
      reg.handleDisableSubmitBtn
    )
  );
  REGISTER_STREET.addEventListener("input", (e) =>
    onInputChange(
      e,
      REGISTER_STREET_ERROR,
      REGISTER_SUBMIT_BTN,
      reg.handleInputChange,
      reg.handleDisableSubmitBtn
    )
  );
  REGISTER_ZIP.addEventListener("input", (e) =>
    onInputChange(
      e,
      REGISTER_ZIP_ERROR,
      REGISTER_SUBMIT_BTN,
      reg.handleInputChange,
      reg.handleDisableSubmitBtn
    )
  );
  REGISTER_CENCEL_BTN.addEventListener("click", () =>
    onReset(
      REGISTAR_INPUTS_ARRAY,
      REGISTAR_ERRORS_ARRAY,
      REGISTER_SUBMIT_BTN,
      reg.handleReset
    )
  );
  REGISTER_SUBMIT_BTN.addEventListener("click", reg.onSubmit);
};
