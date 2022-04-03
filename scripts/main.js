const cardsArray = [
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

const cardTemplate = document.querySelector("#card").content;
const sectionCards = document.querySelector(".cards");
const profileName = document.querySelector(".profile__name");
const profileDetail = document.querySelector(".profile__detail");
const inputName = document.querySelector(".popup__input_type_name");
const inputDetail = document.querySelector(".popup__input_type_detail");
const inputNewCardTitle = document.querySelector(".popup__input_type_title");
const inputNewCardLink = document.querySelector(".popup__input_type_link");
const pictureImagePopup = document.querySelector(".popup__image");
const titleImagePopup = document.querySelector(".popup__image-title");

const btnEditProfile = document.querySelector(".profile__btn_edit");
const btnAddNewCard = document.querySelector(".profile__btn_add");
//не согласна с замечанием что переменная ниже не во множественном числе - btns - мн число. намеренно не писала closeButtons чтобы во-первых сохранить единообразие именования, а во-вторых в предыдущем ревью было сказано, что переменные должны начинаться с имени существительного - btn, а не действия -close. Действия - это к функциям
const btnsClose = document.querySelectorAll(".popup__close");

const popups = document.querySelectorAll(".popup");
const popupEditProfile = document.querySelector("#edit-profile");
const popupAddNewCard = document.querySelector("#add-card");
const popupOpenImage = document.querySelector("#card-image");

const formEditProfile = document.querySelector("[name='edit-profile-popup']");
const formAddNewCard = document.querySelector("[name='add-card-popup']");

//создание карточки и установка слушателей
function addCard(name, link) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardElementImage = cardElement.querySelector(".card__photo")
  const likeElementImage = cardElement.querySelector(".card__btn_like")
  const trashElementImage = cardElement.querySelector(".trash")
  cardElementImage.src = link;
  cardElementImage.alt = name;
  cardElement.querySelector(".card__place").textContent = name;
  cardElementImage.addEventListener("click", openImagePopup);
  likeElementImage.addEventListener("click", toggleLike);
  trashElementImage.addEventListener("click", removeCard);
  return cardElement;
}

//добавление карточки в разметку
function renderCard(elem) {
  const name = elem.name;
  const link = elem.link;
  const newCard = addCard(name, link);
  sectionCards.prepend(newCard);
}

//открытие попапов
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', pressEscape);
}

//закрытие попапов
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', pressEscape);
}

//редактирование информации профиля
function editProfile() {
  openPopup(popupEditProfile);
  fillForm();
}

//добавление новой карточки
function addNewCard() {
  formAddNewCard.reset()
  openPopup(popupAddNewCard);
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

//форма сохранить редактирование данных профиля
function handleProfileFormSubmit(evt) {
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
function handleAddNewCardFormSubmit(evt) {
  evt.preventDefault();
  const valueInputTitle = inputNewCardTitle.value;
  const valueInputLink = inputNewCardLink.value;
  const submitBtn = formAddNewCard.querySelector('button[type="submit"]')
  const newCard = {
    name: valueInputTitle,
    link: valueInputLink,
  };
  renderCard(newCard);
  formEditProfile.reset();
  submitBtn.setAttribute("disabled", true);
  submitBtn.classList.add('popup__save_disabled');
  closePopup(popupAddNewCard);
}

//открыть попап с изображением
function openImagePopup(evt) {
  pictureImagePopup.src = evt.target.src;
  pictureImagePopup.alt = evt.target.alt;
  titleImagePopup.textContent = evt.target.alt;
  openPopup(popupOpenImage);
}

function toggleLike(evt) {
  evt.target.classList.toggle("card__btn_like-active");
}

function removeCard(evt) {
  evt.target.closest(".card").remove();
}

function pressEscape(evt){
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    popup && closePopup(popup);
  }
}

//отрисовка карточек на странице
cardsArray.forEach(renderCard);
//добавление слушателей
popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup__close") || evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
  });
});
btnAddNewCard.addEventListener("click", addNewCard);
btnEditProfile.addEventListener("click", editProfile);
//сабмит на формах
popupEditProfile.addEventListener("submit", handleProfileFormSubmit);
popupAddNewCard.addEventListener("submit", handleAddNewCardFormSubmit);
