import useForm from "../../forms/forms/useForm.js";
/* import initialData from "../../initial-data/initial.data.js"; */
import { onInputChange, onReset } from "../../forms/forms/utils/formMethods.js";
import PAGES from "../../routes/pagemodels.js";
import { onchangepage } from "../../routes/rauter.js";
import {
  CREAT_PIC_URL_FIELD,
  CREAT_PIC_URL_EROR,
  CREAT_PIC_ALT_FIELD,
  CREAT_PIC_ALT_FIELD_EROR,
  CREAT_PIC_CREDITS_FIELD,
  CREAT_PIC_CREDITS_FIELD_EROR,
  CREAT_PIC_PRICE_FIELD,
  CREAT_PIC_PRICE_FIELD_EROR,
  CREAT_PIC_CENCEL_BTN,
  CREAT_PIC_SUBMIT_BTN,
} from "../../services/domservice.js";
import Picture from "../models/picture.js";
import CREAT_PIC_SCHEMA from "../models/schema/creat_pic_schema.js";
/* array of inputs elemnts */
const pictureServices = () => {
  const INPUTS_ARRAY = [
    CREAT_PIC_URL_FIELD,
    CREAT_PIC_ALT_FIELD,
    CREAT_PIC_CREDITS_FIELD,
    CREAT_PIC_PRICE_FIELD,
  ];
  /* array of errors elemnts */
  const ERRORS_ARRAY = [
    CREAT_PIC_URL_EROR,
    CREAT_PIC_ALT_FIELD_EROR,
    CREAT_PIC_CREDITS_FIELD_EROR,
    CREAT_PIC_PRICE_FIELD_EROR,
  ];

  /* initial form */
  const INITIAL_CRETE_PIC_FORM = {
    url: "",
    alt: "",
    credits: "",
    price: "",
  };

  /* handleSubmit method */
  const handleSubmitCreatePic = (data) => {
    data.user_id = "123";
    const pic = new Picture(data);
    onReset(INPUTS_ARRAY, ERRORS_ARRAY, rest.handleReset);
    pictures.push(pic);
    onchangepage(PAGES.HOME);
  };

  /* use Form method */
  const { errors, ...rest } = useForm(
    INITIAL_CRETE_PIC_FORM,
    CREAT_PIC_SCHEMA,
    handleSubmitCreatePic
  );

  /* event listeners */
  CREAT_PIC_URL_FIELD.addEventListener("input", (e) =>
    onInputChange(
      e,
      CREAT_PIC_URL_EROR,
      CREAT_PIC_SUBMIT_BTN,
      rest.handleInputChange,
      rest.handleDisableSubmitBtn
    )
  );
  CREAT_PIC_ALT_FIELD.addEventListener("input", (e) =>
    onInputChange(
      e,
      CREAT_PIC_ALT_FIELD_EROR,
      CREAT_PIC_SUBMIT_BTN,
      rest.handleInputChange,
      rest.handleDisableSubmitBtn
    )
  );
  CREAT_PIC_CREDITS_FIELD.addEventListener("input", (e) =>
    onInputChange(
      e,
      CREAT_PIC_ALT_FIELD_EROR,
      CREAT_PIC_SUBMIT_BTN,
      rest.handleInputChange,
      rest.handleDisableSubmitBtn
    )
  );
  CREAT_PIC_PRICE_FIELD.addEventListener("input", (e) =>
    onInputChange(
      e,
      CREAT_PIC_ALT_FIELD_EROR,
      CREAT_PIC_SUBMIT_BTN,
      rest.handleInputChange,
      rest.handleDisableSubmitBtn
    )
  );
  CREAT_PIC_CENCEL_BTN.addEventListener("click", (e) =>
    onReset(INPUTS_ARRAY, ERRORS_ARRAY, rest.handleReset)
  );
  CREAT_PIC_SUBMIT_BTN.addEventListener("click", rest.onSubmit);
};
export default pictureServices;
