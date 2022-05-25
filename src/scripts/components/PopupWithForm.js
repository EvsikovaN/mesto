import { Popup } from "../components/Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSabmitPopupWithForm) {
    super(popupSelector);
    this._formPopup = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleSabmitPopupWithForm;
    this._inputList = this._formPopup.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });

    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._formPopup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._formPopup.reset();
  }
}

