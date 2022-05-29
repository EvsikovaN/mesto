export class Card {
  constructor(data, selector, handleCardClick, handleLikeClick, handleDeleteCardClick, userId) {
    this._data = data;
    this._image = data.link;
    this._title = data.name;
    this._likes = data.likes;
    this._id = data._id;
    this._myId = userId;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteCardClick = handleDeleteCardClick;
  }

  _getElement() {
    const cardElement = document
      .querySelector(this._selector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  setLikeToCard(isLike, data){
    if (!isLike) {
      this._btnLike.classList.add("card__btn_like-active");
      this._likeCounter.textContent = data.likes.length;
    } else {
      this._btnLike.classList.remove("card__btn_like-active");
      this._likeCounter.textContent = data.likes.length;
    }
  }

  _checkLike(){
    const arrayLikes = this._likes
    for(let i=0; i<arrayLikes.length; i++){
       if(arrayLikes[i]['_id'] === this._myId) {
        this._btnLike.classList.add("card__btn_like-active")
       }
    }
  }

  _checkIsOwner() {
    if(this._data.owner._id != this._myId){
      this._trash.remove();
    } 
  }

  _setEventListeners() {
    this._btnLike.addEventListener("click", (evt) => {
      this._handleLikeClick(this,evt.target.classList.contains("card__btn_like-active"))
    });
    this._trash.addEventListener("click", () => {
      this._handleDeleteCardClick(this)
    });
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._title, this._image);
    });
  }

  deleteCard(){
    this._element.remove();
  }

  generate() {
    this._element = this._getElement();
    this._btnLike = this._element.querySelector('.card__btn_like');
    this._cardImage = this._element.querySelector(".card__photo");
    this._likeCounter = this._element.querySelector('.like__counter');
    this._trash = this._element.querySelector(".trash");
    this._setEventListeners();
    this._checkLike();
    this._checkIsOwner();

    this._cardImage.src = this._image;
    this._cardImage.alt = this._title;
    this._likeCounter.textContent = this._likes.length
    this._element.querySelector(".card__place").textContent = this._title;

    return this._element;
  }
}
