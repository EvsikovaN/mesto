const objectSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__input_error",
  errorClass: "popup__form-error-message",
  formSection: ".popup__form-section"
};

function enableValidation(objectSettings) {
  const formList = document.querySelectorAll(`${objectSettings.formSelector}`);
  formList.forEach((formElement) => {
    const handleFormSubmit = (event) => {
      event.preventDefault();
    };
    formElement.addEventListener("submit", handleFormSubmit);
    setEventListeners(formElement);
  });
};

//formElement здесь и в последующих функциях берется из цикла в enableValidation. а все строки-селекторы содержатся в объекте валидации objectSettings и передаются в enableValidation
function setEventListeners(formElement) {
    const inputList = formElement.querySelectorAll(`${objectSettings.inputSelector}`);
    const submitbuttonElement = formElement.querySelector(`${objectSettings.submitButtonSelector}`);
    toggleButtonState(inputList, submitbuttonElement);
    inputList.forEach((inputElement) => {
      const handleInput = (event) => {
        checkValidity(formElement, inputElement);
        toggleButtonState(inputList, submitbuttonElement);
      };
      inputElement.addEventListener("input", handleInput);
    });
  };

function checkValidity(formElement, inputElement)  {
  const isInputValid = !inputElement.validity.valid;
  if (isInputValid) {
    const errorMessage = inputElement.validationMessage;
    showError(formElement, inputElement, errorMessage);
  } else {
    hideError(formElement, inputElement);
  }
};

function hideError(formElement, inputElement) {
  const errorElement = getErrorElement(inputElement);
  errorElement.textContent = "";
  errorElement.classList.remove(`${objectSettings.errorClass}_active`);
  inputElement.classList.remove(`${objectSettings.inputErrorClass}`);
};

function showError(formElement, inputElement, errorMessage) {
  const errorElement = getErrorElement(inputElement);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(`${objectSettings.errorClass}_active`);
  inputElement.classList.add(`${objectSettings.inputErrorClass}`);
};

function getErrorElement(inputElement) {
  return inputElement.closest(`${objectSettings.formSection}`).querySelector(`.${objectSettings.errorClass}`);
};

function toggleButtonState(inputList, submitbuttonElement) {
  const inputElements = Array.from(inputList);
  const hasInvalidInput = inputElements.some((inputElement) => {
    return !inputElement.validity.valid;
  });

  if (hasInvalidInput) {
    submitbuttonElement.classList.add(`${objectSettings.inactiveButtonClass}`);
    submitbuttonElement.setAttribute("disabled", true);
  } else {
    submitbuttonElement.classList.remove(`${objectSettings.inactiveButtonClass}`);
    submitbuttonElement.removeAttribute('disabled');
  }
};

enableValidation(objectSettings);
