export const REGEX_PHON =
  /^0(?:[234689]|5[0-689]|7[246789])(?![01])(?=)(-?\d{7})$/g;
export const REGEX_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
export const REGRX_PASSWORD_UNLIGEL_TUBS = /[(?.*[()\s{}";'\|\.:]/g;
export const REGEX_PASSWORS =
  /^(?!.*[()\s{}[]";'\|\.])(?=.*[0-9]{4,})(?=.*[a-z])(?=.*[A-Z])(?=.*[-*!@$%^&]).{7,}$/g;
