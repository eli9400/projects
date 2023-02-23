const setCounter = (Array, counter, controller = "") => {
  let newcounter;
  if (controller === "next") {
    newcounter = counter < Array.length - 1 ? counter + 1 : 0;
    return newcounter;
  }
  if (controller === "perv") {
    newcounter = counter > 0 ? counter - 1 : Array.length - 1;
    return newcounter;
  }
  return 0;
};

export default setCounter;
