export class Card {
  constructor(data, selector, handleCardClick) {
    this._image = data.link;
    this._title = data.name;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
  }

  _getElement() {
    const cardElement = document
      .querySelector(this._selector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _toggleLike() {
    this._element.querySelector('.card__btn_like').classList.toggle("card__btn_like-active");
  }

  _removeCard() {
    this._element.remove()
  }

  _setEventListeners() {
    this._element.querySelector(".card__btn_like").addEventListener("click", () => {
      this._toggleLike();
    });
    this._element.querySelector(".trash").addEventListener("click", () => {
      this._removeCard();
    });
    this._element.querySelector(".card__photo").addEventListener("click", () => {
      this._handleCardClick(this._title, this._image);
    });
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
