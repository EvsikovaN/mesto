import {cardsArray, sectionCards, popups, btnAddNewCard, btnEditProfile, popupEditProfile, popupAddNewCard, formList, objectSettings} from '../scripts/constants.js';
import {closePopup, addNewCard, editProfile, handleProfileFormSubmit, handleAddNewCardFormSubmit, renderCard} from '../scripts/utils.js';
import {FormValidator} from '../scripts/FormValidator.js';
//по условию в ПР класс Card импортируeтся в index.js и используются в нём, но т.к я вынесла генерацию карточек в отдельную функцию, которая описана в utils.js, он ипортирован туда. а сама функция renderCard - в index.js

//отрисовка карточек на станице
cardsArray.forEach(renderCard);

//добавление слушателей на попапы
popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup__close") || evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
  });
});

//клик по кнопкам
btnAddNewCard.addEventListener("click", addNewCard);
btnEditProfile.addEventListener("click", editProfile);
//сабмит на формах
popupEditProfile.addEventListener("submit", handleProfileFormSubmit);
popupAddNewCard.addEventListener("submit", handleAddNewCardFormSubmit);

//валидация полей формы
formList.forEach((form) => {
  const formElement = new FormValidator(objectSettings, form);
  formElement.enableValidation();
});