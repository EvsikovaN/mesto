export class FormValidator {
  constructor(data, form) {
    this._data = data;
    this._form = form;
    this._submitbuttonElement = this._form.querySelector(`${this._data.submitButtonSelector}`);
    this._inputList = this._form.querySelectorAll(`${this._data.inputSelector}`);
  }

  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      const handleInput = (event) => {
        this._checkValidity(inputElement);
        this._toggleButtonState();
      };
      inputElement.addEventListener("input", handleInput);
    });
  }

  _toggleButtonState() {
    const inputElements = Array.from(this._inputList);
    const hasInvalidInput = inputElements.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  
    if (hasInvalidInput) {
      this._submitbuttonElement.classList.add(`${this._data.inactiveButtonClass}`);
      this._submitbuttonElement.setAttribute("disabled", true);
    } else {
      this._submitbuttonElement.classList.remove(`${this._data.inactiveButtonClass}`);
      this._submitbuttonElement.removeAttribute('disabled');
    }
  }

  _checkValidity(inputElement){
    const isInputValid = !inputElement.validity.valid;
    if (isInputValid) {
      const errorMessage = inputElement.validationMessage;
      this._showError(inputElement, errorMessage);
    } else {
      this._hideError(inputElement);
    }
  }

  _showError(inputElement, errorMessage) {
    const errorElement = this._getErrorElement(inputElement);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(`${this._data.errorClass}_active`);
    inputElement.classList.add(`${this._data.inputErrorClass}`);
  }

  _hideError( inputElement) {
    const errorElement = this._getErrorElement(inputElement);
    errorElement.textContent = "";
    errorElement.classList.remove(`${this._data.errorClass}_active`);
    inputElement.classList.remove(`${this._data.inputErrorClass}`);
  }

  _getErrorElement(inputElement) {
    return inputElement.closest(`${this._data.formSection}`).querySelector(`.${this._data.errorClass}`);
  }

  resetInputError() {
    const inputs = this._form.querySelectorAll(`${this._data.inputSelector}`);
    const btnSubmit = this._form.querySelector(`${this._data.submitButtonSelector}`);
    this._toggleButtonState(inputs,btnSubmit)
    inputs.forEach((inputELement) => {
      this._hideError(inputELement);
    });
  }

  enableValidation() {
    const handleFormSubmit = (event) => {
      event.preventDefault();
    };
    this._form.addEventListener("submit", handleFormSubmit);
    this._setEventListeners()
  }
}