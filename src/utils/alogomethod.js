export const makeFirstLetterCapital = (text) => {
  const term = text.toLowerCase().trim();

  return term.charAt(0).toUpperCase() + term.slice(1);
};

/* export const makeEveryFirstLetterCapital = (text) => {
  const term = text.toLowerCase().trim();
  const splitText = term.split(" ");

  for (let i = 0; i < splitText.length; i++) {
    splitText[i] = splitText[i].charAt(0).toUpperCase() + splitText[i].slice(1);
  }

  return splitText.join(" ");
};
 */
export const makeEveryFirstLetterCapital = (text) => {
  console.log(text);
  const term = text.toLowerCase().trim();
  const splitText = term.split(" ");

  for (let i = 0; i < splitText.length; i++) {
    splitText[i] = splitText[i].charAt(0).toUpperCase() + splitText[i].slice(1);
  }

  return splitText.join(" ");
};
export const randomNumBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
export const chckDuplicateAddress = (address) => {
  return address;
};
export const generateId = (array, min, max) => {
  if (array.length >= max - min) throw new Error("max item in array");

  const randomNumber = randomNumBetween(min, max);
  const item = array.findIndex((item) => item._id === randomNumber);
  if (item === -1) return randomNumber;
  this.generateId(array);
};
