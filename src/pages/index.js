import "./index.css";

import {
  btnAddNewCard,
  btnEditProfile,
  btnEditAvatar,
  objectSettings,
  containerSelector,
  inputName,
  inputDetail,
  formEditProfile,
  formAddNewCard,
  formAvatar,
} from "../scripts/utils/constants.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { Card } from "../scripts/components/Card.js";
import { Section } from "../scripts/components/Section.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { PopupWithConfirm } from "../scripts/components/PopupWithConfirm.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
import { Api } from "../scripts/components/Api.js";

//большое спасибо что подсказали и не отклонили!
let userId;
const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-41/",
  headers: {
    authorization: "6a9581f6-9d1d-43e7-9fc7-f5d661b4a5e9",
    "Content-Type": "application/json",
  },
});

const createCard = (item, userId) => {
  const card = new Card(
    item,
    "#card",
    handleCardClick,
    handleLikeClick,
    handleDeleteCardClick,
    userId
  );
  const cardElement = card.generate();
  return cardElement;
};

const renderNewCard = (item, userId) => {
  const newCard = createCard(item, userId);
  cardsList.addItem(newCard);
};

const cardsList = new Section(renderNewCard, containerSelector);

//увеличение картинки при клике
const handleCardClick = (name, link) => {
  popupFullImage.open(name, link);
};

function handleLikeClick(card, isLike) {
  const cardLike = isLike ? api.removeLike(card._id) : api.setLike(card._id);
  cardLike
    .then((res) => {
      card.setLikeToCard(isLike, res);
    })
    .catch((err) => console.log(err));
}

function handleDeleteCardClick(card) {
  popupConfirmDeleteCard.open();
  popupConfirmDeleteCard.getIdCard(card);
}

//информация пользователя
const dataUser = new UserInfo({
  selectorName: ".profile__name",
  selectorDetail: ".profile__detail",
  selectorAvatar: ".profile__btn_avatar",
});

const formProfile = new FormValidator(objectSettings, formEditProfile);
const formNewCard = new FormValidator(objectSettings, formAddNewCard);
const formEditAvatar = new FormValidator(objectSettings, formAvatar);
formProfile.enableValidation();
formNewCard.enableValidation();
formEditAvatar.enableValidation();

const popupConfirmDeleteCard = new PopupWithConfirm("#delete-card", (item) => {
  popupConfirmDeleteCard.renderLoading(true)
  api
    .deleteCard(item)
    .then(() => {
      popupConfirmDeleteCard._card.deleteCard();
      popupConfirmDeleteCard.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupConfirmDeleteCard.renderLoading(false)
    });
});

const popupEditProfile = new PopupWithForm("#edit-profile", (item) => {
  popupEditProfile.renderLoading(true)
  api
    .setProfileInfo(item)
    .then((item) => {
      dataUser.setUserInfo(item);
      popupEditProfile.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupEditProfile.renderLoading(false)
    });
});

const popupAddCard = new PopupWithForm("#add-card", (item) => {
  popupAddCard.renderLoading(true)
  api
    .pushNewCard(item)
    .then((item) => {
      const cardElement = createCard(item,userId);
      cardsList.addItem(cardElement);
      popupAddCard.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupAddCard.renderLoading(false)
    });
});

const popupEditAvatar = new PopupWithForm("#edit-avatar", (item) => {
  popupEditAvatar.renderLoading(true)
  api
    .setProfileAvatar(item)
    .then((item) => {
      dataUser.setAvatar(item.avatar);
      popupEditAvatar.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupEditAvatar.renderLoading(false)
    })
});

const popupFullImage = new PopupWithImage({
  popupSelector: "#card-image",
  selectorPictureImagePopup: ".popup__image",
  selectorTitleImagePopup: ".popup__image-title",
});

//добавление слушателей на попапы
popupEditProfile.setEventListeners();
popupAddCard.setEventListeners();
popupFullImage.setEventListeners();
popupEditAvatar.setEventListeners();
popupConfirmDeleteCard.setEventListeners();

//клики по кнопкам
btnEditProfile.addEventListener("click", () => {
  const profileData = dataUser.getUserInfo();
  //заполнили этими значениями поля формы
  inputName.value = profileData.name;
  inputDetail.value = profileData.about;
  //проверка заполнения полей формы и установка состояния кнопки
  formProfile.resetInputError();
  popupEditProfile.open();
});

btnAddNewCard.addEventListener("click", () => {
  formNewCard.resetInputError();
  popupAddCard.open();
});

btnEditAvatar.addEventListener("click", () => {
  popupEditAvatar.open();
});

Promise.all([api.getProfileInfo(), api.getAllCards()])
  .then(([userData, userCard]) => {
    dataUser.setUserInfo(userData);
    dataUser.setAvatar(userData.avatar);
    cardsList.renderItems(userCard, userData._id);
    userId = userData._id;
  })
  .catch((err) => console.log(err));
