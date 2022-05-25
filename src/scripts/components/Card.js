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
    this._btnLike.classList.toggle("card__btn_like-active");
  }

  _removeCard() {
    this._element.remove()
  }

  _setEventListeners() {
    this._btnLike.addEventListener("click", () => {
      this._toggleLike();
    });
    this._element.querySelector(".trash").addEventListener("click", () => {
      this._removeCard();
    });
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._title, this._image);
    });
  }

  generate() {
    this._element = this._getElement();
    this._btnLike = this._element.querySelector('.card__btn_like');
    this._cardImage = this._element.querySelector(".card__photo");
    
    this._cardImage.src = this._image;
    this._cardImage.alt = this._title;
    this._element.querySelector(".card__place").textContent = this._title;

    this._setEventListeners();

    return this._element;
  }
}
