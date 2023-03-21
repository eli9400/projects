import Picture from "../pictures/models/picture.js";
import User from "../users/models/User.js";
const initialData = () => {
  const database = {
    pictures: [
      {
        url: "https://cdn.pixabay.com/photo/2023/01/31/05/59/zebra-7757193_960_720.jpg",
        alt: "zebra",
        credits: "Jessica rabbit",
        user_id: 12345,
        price: 5,
      },
      {
        url: "https://cdn.pixabay.com/photo/2023/01/23/09/26/cat-7738210_960_720.jpg",
        alt: "cat",
        credits: "hillary clinton",
        user_id: 12345,
        price: 5,
      },
      {
        url: "https://cdn.pixabay.com/photo/2023/01/27/06/17/pheasant-7747830_960_720.jpg",
        alt: "pigeon",
        credits: "shula zaken",
        user_id: 12345,
        price: 5,
      },
    ],
    users: [
      {
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
      },
      {
        address: {
          state: "tel aviv",
          country: "israel",
          city: "gvfgf",
          street: "gcvg",
          houseNumber: 1,
          zip: 12345,
        },
        phone: "0584797759",
        name: {
          First: "ELI",
          Last: "blechmaN",
        },
        email: "test@gmail.com",
        password: "Eli94001!",
        isAdmin: true,
        isBusiness: false,
      },
      {
        address: {
          state: "haifa",
          country: "israel",
          city: "nb",
          street: "soomsom",
          houseNumber: 1,
          zip: 12345,
        },
        phone: "0584797750",
        name: {
          First: "yosi",
          Last: "choen",
        },
        email: "test1@gmail.com",
        password: "Eli94001!",
        isAdmin: true,
        isBusiness: false,
      },
    ],
  };
  try {
    const pictures = database.pictures.map((picture, index, pictures) => {
      return new Picture(picture, pictures);
    });
    /*  const users = database.users.map((user, index, users) => {
      new User(user, users);
    }); */
    return { pictures };
  } catch (error) {
    console.log(error.massage);
  }
};
export default initialData;
