import {pictureImagePopup, titleImagePopup, popupOpenImage} from '../scripts/constants.js';
import {openPopup} from '../scripts/utils.js';

export class Card {
  constructor(data, selector) {
    this._image = data.link;
    this._title = data.name;
    this._selector = selector;
  }

  _getElement() {
    const cardElement = document
      .querySelector(this._selector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _toggleLike(evt) {
    evt.target.classList.toggle("card__btn_like-active");
  }

  _removeCard(evt) {
    evt.target.closest(".card").remove();
  }

  _openImagePopup(evt) {
    pictureImagePopup.src = evt.target.src;
    pictureImagePopup.alt = evt.target.alt;
    titleImagePopup.textContent = evt.target.alt;
    openPopup(popupOpenImage);
  }

  _setEventListeners() {
    this._element.querySelector(".card__btn_like").addEventListener("click", this._toggleLike);
    this._element.querySelector(".trash").addEventListener("click", this._removeCard);
    this._element.querySelector(".card__photo").addEventListener("click", this._openImagePopup);
  }

  generate() {
    this._element = this._getElement();
    this._element.querySelector(".card__photo").src = this._image;
    this._element.querySelector(".card__photo").alt = this._title;
    this._element.querySelector(".card__place").textContent = this._title;

    this._setEventListeners();

    return this._element;
  }
}
