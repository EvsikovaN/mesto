import '../../pages/index.css';

import {cardsArray, btnAddNewCard, btnEditProfile, objectSettings, containerSelector, inputName, inputDetail, inputNewCardTitle, inputNewCardLink, formEditProfile, formAddNewCard} from '../utils/constants.js';
import {FormValidator} from '../components/FormValidator.js';
import {Card} from "../components/Card.js";
import {Section} from  '../components/Section.js';
import {PopupWithImage} from  '../components/PopupWithImage.js';
import {PopupWithForm} from  '../components/PopupWithForm.js';
import {UserInfo} from  '../components/UserInfo.js';

const renderNewCard = (item) => {
  const card = new Card(item, "#card", handleCardClick);
  const cardElement = card.generate();

  cardsList.addItem(cardElement);
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
const popupEditProfile = new PopupWithForm({
  popupSelector: '#edit-profile',
  handleSabmitPopupWithForm: () => {
  //получили новые значения, которые ввел пользователь
  const valueInputName = inputName.value;
  const valueInputDetail = inputDetail.value;
  //записали их в профиль
  dataUser.setUserInfo({name: valueInputName, detail: valueInputDetail})
  }
})

//добавление слушателя на попап редактировать профиль
popupEditProfile.setEventListeners();

//клик на кнопку редактировать профиль
btnEditProfile.addEventListener("click", () => {
  formProfile.resetInputError();
  const profileData = dataUser.getUserInfo();
  //заполнили этими значениями поля формы
  inputName.value = profileData.name;
  inputDetail.value = profileData.detail; 
  popupEditProfile.open()
});


//попап добавить карточку
const popupAddCard = new PopupWithForm({
  popupSelector: '#add-card',
  handleSabmitPopupWithForm: () => {
    const valueInputTitle = inputNewCardTitle.value;
    const valueInputLink = inputNewCardLink.value;
    const dataCard = [{
      name: valueInputTitle,
      link: valueInputLink,
    }];
    const newCard = new Section({
      items: dataCard,
      renderer: renderNewCard
      },
      containerSelector
    );
    newCard.renderItems();
  }
})

//установка слушателя на попап добавления новой карточки
popupAddCard.setEventListeners();

//клик по кнопке добавить карточку
btnAddNewCard.addEventListener("click", () => {
  formNewCard.resetInputError();
  popupAddCard.open();
});