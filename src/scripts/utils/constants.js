export const cardsArray = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
];

export const containerSelector = '.cards';
export const inputName = document.querySelector(".popup__input_type_name");
export const inputDetail = document.querySelector(".popup__input_type_detail");
export const inputNewCardTitle = document.querySelector(".popup__input_type_title");
export const inputNewCardLink = document.querySelector(".popup__input_type_link");
export const btnEditProfile = document.querySelector(".profile__btn_edit");
export const btnAddNewCard = document.querySelector(".profile__btn_add");
export const formEditProfile = document.querySelector("[name='edit-profile-popup']");
export const formAddNewCard = document.querySelector("[name='add-card-popup']");
export const formList = document.querySelectorAll(".popup__form");

export const objectSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__input_error",
  errorClass: "popup__form-error-message",
  formSection: ".popup__form-section",
};
