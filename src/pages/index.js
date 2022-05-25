import './index.css';

import {cardsArray, btnAddNewCard, btnEditProfile, objectSettings, containerSelector, inputName, inputDetail, inputNewCardTitle, inputNewCardLink, formEditProfile, formAddNewCard} from '../scripts/utils/constants.js';
import {FormValidator} from '../scripts/components/FormValidator.js';
import {Card} from "../scripts/components/Card.js";
import {Section} from  '../scripts/components/Section.js';
import {PopupWithImage} from  '../scripts/components/PopupWithImage.js';
import {PopupWithForm} from  '../scripts/components/PopupWithForm.js';
import {UserInfo} from  '../scripts/components/UserInfo.js';

const createCard = (item) => {
  const card = new Card(item, "#card", handleCardClick);
  const cardElement = card.generate();
  return cardElement
}

const renderNewCard = (item) => {
  const newCard = createCard(item)
  cardsList.addItem(newCard);
}

//генерация карточек
const cardsList = new Section({
  items: cardsArray,
  renderer: renderNewCard
  },
  containerSelector
);

//увеличение картинки при клике
const handleCardClick = (name, link) => {
  popupFullImage.open(name, link);
};

//отрисовка карточек при загрузке страницы
cardsList.renderItems();

//создание попапа с изображением
const popupFullImage = new PopupWithImage({
  popupSelector: "#card-image",
  selectorPictureImagePopup: '.popup__image',
  selectorTitleImagePopup: '.popup__image-title',
});

//добавление слушателя на попап с изображеним
popupFullImage.setEventListeners();

//информация пользователя
const dataUser = new UserInfo({selectorName: ".profile__name", selectorDetail: ".profile__detail"})

//экземпляр формы с полями (редактирование профиля)
const formProfile = new FormValidator(objectSettings, formEditProfile)
//запуск валидации
formProfile.enableValidation();
//экземпляр формы с полями (добавление новой карточки)
const formNewCard = new FormValidator(objectSettings, formAddNewCard)
//запуск валидации
formNewCard.enableValidation();

//попап редактирования профиля
const popupEditProfile = new PopupWithForm('#edit-profile', (item) => {
    dataUser.setUserInfo(item)
  }
)

//добавление слушателя на попап редактировать профиль
popupEditProfile.setEventListeners();

//клик на кнопку редактировать профиль
btnEditProfile.addEventListener("click", () => {
  const profileData = dataUser.getUserInfo();
  //заполнили этими значениями поля формы
  inputName.value = profileData.name;
  inputDetail.value = profileData.detail;
  //проверка заполнения полей формы и установка состояния кнопки 
  formProfile.resetInputError();
  popupEditProfile.open()
});

//попап добавить карточку
const popupAddCard = new PopupWithForm('#add-card', (item) => {
    const cardElement = createCard(item)
    cardsList.addItem(cardElement);
  }
)

//установка слушателя на попап добавления новой карточки
popupAddCard.setEventListeners();

//клик по кнопке добавить карточку
btnAddNewCard.addEventListener("click", () => {
  formNewCard.resetInputError();
  popupAddCard.open();
});