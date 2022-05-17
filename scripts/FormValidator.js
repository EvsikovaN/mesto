export class FormValidator {
  constructor(data, form) {
    this._data = data,
    this._form = form
  }

  _setEventListeners(formElement) {
    const inputList = formElement.querySelectorAll(`${this._data.inputSelector}`);
    const submitbuttonElement = formElement.querySelector(`${this._data.submitButtonSelector}`);
    this._toggleButtonState(inputList, submitbuttonElement);
    inputList.forEach((inputElement) => {
      const handleInput = (event) => {
        this._checkValidity(formElement, inputElement);
        this._toggleButtonState(inputList, submitbuttonElement);
      };
      inputElement.addEventListener("input", handleInput);
    });
  }

  _toggleButtonState(inputList, submitbuttonElement) {
    const inputElements = Array.from(inputList);
    const hasInvalidInput = inputElements.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  
    if (hasInvalidInput) {
      submitbuttonElement.classList.add(`${this._data.inactiveButtonClass}`);
      submitbuttonElement.setAttribute("disabled", true);
    } else {
      submitbuttonElement.classList.remove(`${this._data.inactiveButtonClass}`);
      submitbuttonElement.removeAttribute('disabled');
    }
  }

  _checkValidity(formElement, inputElement){
    const isInputValid = !inputElement.validity.valid;
    if (isInputValid) {
      const errorMessage = inputElement.validationMessage;
      this._showError(formElement, inputElement, errorMessage);
    } else {
      this._hideError(formElement, inputElement);
    }
  }

  _showError(formElement, inputElement, errorMessage) {
    const errorElement = this._getErrorElement(inputElement);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(`${this._data.errorClass}_active`);
    inputElement.classList.add(`${this._data.inputErrorClass}`);
  }

  _hideError(formElement, inputElement) {
    const errorElement = this._getErrorElement(inputElement);
    errorElement.textContent = "";
    errorElement.classList.remove(`${this._data.errorClass}_active`);
    inputElement.classList.remove(`${this._data.inputErrorClass}`);
  }

  _getErrorElement(inputElement) {
    return inputElement.closest(`${this._data.formSection}`).querySelector(`.${this._data.errorClass}`);
  }

  enableValidation() {
    const handleFormSubmit = (event) => {
      event.preventDefault();
    };
    this._form.addEventListener("submit", handleFormSubmit);
    this._setEventListeners(this._form)
  }
}