import {
  popupEditProfile,
  popupAddNewCard,
  profileName,
  profileDetail,
  inputName,
  inputDetail,
  formAddNewCard,
  inputNewCardTitle,
  inputNewCardLink,
  sectionCards,
  formEditProfile,
} from "../scripts/constants.js";
import { Card } from "../scripts/Card.js";

//открытие попапов
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", pressEscape);
}

//закрытие попапов
export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", pressEscape);
}

function pressEscape(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_opened");
    popup && closePopup(popup);
  }
}

//редактирование информации профиля
export function editProfile() {
  openPopup(popupEditProfile);
  fillForm();
}

//заполнение формы профиля данными со страницы при открытии попапа
function fillForm() {
  //получили то что записано в профиле
  const nameContent = profileName.textContent;
  const detailContent = profileDetail.textContent;
  //заполнили этими значениями поля формы
  inputName.value = nameContent;
  inputDetail.value = detailContent;
}

//открытие попапа добавление новой карточки
export function addNewCard() {
  formAddNewCard.reset();
  openPopup(popupAddNewCard);
}

//форма сохранить редактирование данных профиля
export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  //получили новые значения, которые ввел пользователь
  const valueInputName = inputName.value;
  const valueInputDetail = inputDetail.value;

  //записали их в профиль
  profileName.textContent = valueInputName;
  profileDetail.textContent = valueInputDetail;

  closePopup(popupEditProfile);
}

//форма создать новую карточку
export function handleAddNewCardFormSubmit(evt) {
  evt.preventDefault();
  const valueInputTitle = inputNewCardTitle.value;
  const valueInputLink = inputNewCardLink.value;
  const submitBtn = formAddNewCard.querySelector('button[type="submit"]');
  const newCard = {
    name: valueInputTitle,
    link: valueInputLink,
  };
  renderCard(newCard);
  formEditProfile.reset();
  submitBtn.setAttribute("disabled", true);
  submitBtn.classList.add("popup__save_disabled");
  closePopup(popupAddNewCard);
}

//создание и добавление карточки в разметку
export function renderCard(elem) {
  const card = new Card(elem, "#card");
  const cardElement = card.generate();

  sectionCards.prepend(cardElement);
}
