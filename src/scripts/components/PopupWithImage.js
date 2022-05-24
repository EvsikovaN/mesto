import {Popup} from "../components/Popup.js";

export class PopupWithImage extends Popup {
  constructor({ popupSelector, selectorPictureImagePopup, selectorTitleImagePopup }) {
    super(popupSelector);
    this._pictureImagePopup = document.querySelector(selectorPictureImagePopup);
    this._titleImagePopup = document.querySelector(selectorTitleImagePopup);
  }

  open(name, link) {
    this._pictureImagePopup.src = link;
    this._pictureImagePopup.alt = name;
    this._titleImagePopup.textContent = name;

    super.open();
  }
}