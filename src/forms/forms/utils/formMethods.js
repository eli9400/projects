export const onReset = (inputsArray, errorsArray, handleReset) => {
  handleReset();
  inputsArray.map((input) => {
    input.value = "";
  });
  errorsArray.map((err) => {
    err.innerHTML = "";
  });
};

export const onInputChange = (
  e,
  errorEl,
  submitBtn,
  handleInputChange,
  handleDisableSubmitBtn
) => {
  const { error } = handleInputChange(e);
  errorEl.innerHTML = error;
  const isFormValidate = handleDisableSubmitBtn();
  if (!isFormValidate) return submitBtn.removeAttribute("disabled");
  submitBtn.setAttribute("disabled", "disabled");
};
