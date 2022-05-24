import { Popup } from "../components/Popup.js";

export class PopupWithForm extends Popup {
  constructor({ popupSelector, handleSabmitPopupWithForm }) {
    super(popupSelector);
    this._popupWithForm = this._popupSelector.querySelector(".popup__form");
    this._handleFormSubmit = handleSabmitPopupWithForm;
    this._inputList = this._popupWithForm.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValue;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popupWithForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._popupWithForm.reset();
  }
}

