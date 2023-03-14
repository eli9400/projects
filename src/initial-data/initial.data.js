import useForm from "../forms/forms/useForm.js";
import Picture from "../pictures/models/picture.js";
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
    users: [],
  };
  try {
    const pictures = database.pictures.map((picture, index, pictures) => {
      console.log(database);
      return new Picture(picture, pictures);
    });

    return { pictures };
  } catch (error) {
    console.log(error.massage);
  }
};
export default initialData;
