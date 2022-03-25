document.addEventListener("DOMContentLoaded", function (event) {
  const editProfile = document.querySelector(".profile__btn_edit");
  const popup = document.querySelector(".popup");
  const closeButtons = document.querySelectorAll(".popup__close");
  const profileName = document.querySelector(".profile__name");
  const profileDetail = document.querySelector(".profile__detail");
  const inputName = document.querySelector(".popup__input_type_name");
  const inputDetail = document.querySelector(".popup__input_type_detail");
  const formPopup = document.querySelector(".popup__form");
  let nameContent;
  let detailContent;
  let valueInputName;
  let valueInputDetail;
  
  //добавление карточек на страницу
  const cardTemplate = document.querySelector("#card").content;
  const sectionCards = document.querySelector(".cards");
  const initialCards = [
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

  //форма добавления карточки
  const addCardBtn = document.querySelector(".profile__btn_add");
  const addCardPopup = document.querySelector("#add-card");
  const addCardForm = document.querySelector("[name='add-card-popup']");
  const inputNewCardTitle = document.querySelector(".popup__input_type_title");
  const inputNewCardLink = document.querySelector(".popup__input_type_link");
  let valueInputTitle;
  let valueInputLink;

  //открытие попапа с картинкой
  const popupImage = document.querySelector(".popup__image");
  const popupImageTitle = document.querySelector(".popup__image-title");
  const popupShowFullImage = document.querySelector("#card-image");
  let cardItems;

  //лайк карточки
  let likeItems;

  function openPopup() {
    popup.classList.add("popup_opened");
    fillForm();
  }

  function closePopup(evt) {
    evt.target.closest(".popup").classList.remove("popup_opened");
    //проверка если действие было на попапе для добавления карточки - очистить инпуты
    if (evt.target.classList.contains("popup__close_add-card")) {
      inputNewCardTitle.value = "";
      inputNewCardLink.value = "";
      console.log(11);
    }
  }

  function fillForm() {
    //получили то что записано в профиле
    nameContent = profileName.textContent;
    detailContent = profileDetail.textContent;

    //заполнили этими значениями поля формы
    inputName.value = nameContent;
    inputDetail.value = detailContent;
  }

  function formSubmitHandler(evt) {
    evt.preventDefault();
    //получили новые значения, которые ввел пользователь
    valueInputName = inputName.value;
    valueInputDetail = inputDetail.value;

    //записали их в профиль
    profileName.textContent = valueInputName;
    profileDetail.textContent = valueInputDetail;

    popup.classList.remove("popup_opened");
  }

  function addNewCardFormSubmitHandler(evt) {
    evt.preventDefault();
    valueInputTitle = inputNewCardTitle.value;
    valueInputLink = inputNewCardLink.value;
    let newCard = {
      name: valueInputTitle,
      link: valueInputLink,
    };
    createCard(newCard);
    inputNewCardTitle.value = "";
    inputNewCardLink.value = "";
    addCardPopup.classList.remove("popup_opened");
  }

  function createCards() {
    initialCards.forEach(createCard);
  }

  function createCard(card) {
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    // наполняем содержимым
    cardElement.querySelector(".card__photo").src = card.link;
    cardElement.querySelector(".card__photo").alt = card.name;
    cardElement.querySelector(".card__place").textContent = card.name;
    // отображаем на странице
    sectionCards.prepend(cardElement);
    initialCardItems();
    initialLikeItems();
  }

  function openImagePopup(evt) {
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
    popupImageTitle.textContent = evt.target.alt;
    popupShowFullImage.classList.add("popup_opened");
  }

  //функция используется для пересчета всех карточек - после добавления, удаления их со страницы
  function initialCardItems() {
    cardItems = document.querySelectorAll(".card__photo");
    for (let i = 0; i < cardItems.length; i++) {
      cardItems[i].addEventListener("click", openImagePopup);
    }
  }

  function initialLikeItems() {
    likeItems = document.querySelectorAll('.card__btn')
    for (let i = 0; i < likeItems.length; i++) {
      likeItems[i].addEventListener("click", (evt) => evt.target.classList.add('card__btn_like-active'));
    }
  }

  createCards();
  initialLikeItems()
  editProfile.addEventListener("click", openPopup);
  formPopup.addEventListener("submit", formSubmitHandler);
  for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", closePopup);
  }

  //открытие попапа и добавление новой карточки
  addCardBtn.addEventListener("click", () =>
    addCardPopup.classList.add("popup_opened")
  );
  addCardForm.addEventListener("submit", addNewCardFormSubmitHandler);
});
