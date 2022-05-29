import { Popup } from "../components/Popup.js";

export class PopupWithConfirm extends Popup {
  constructor(popupSelector, handleSabmitPopupWithConfirm) {
    super(popupSelector);
    this._formPopup = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleSabmitPopupWithConfirm;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formPopup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._id);
    });
  }

  getIdCard(card) {
    this._id = card._id;
    this._card = card;
  }
}
