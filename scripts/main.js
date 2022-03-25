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
  const cardTemplate = document.querySelector('#card').content; 
  const sectionCards = document.querySelector('.cards')
  const initialCards = [
    {
      name: 'Карачаевск',
      link: './images/places/pic-1.jpg',
      alt: 'Карачаевск'
    },
    {
      name: 'Гора Эльбрус',
      link: './images/places/pic-2.jpg',
      alt: 'Гора Эльбрус'
    },
    {
      name: 'Домбай',
      link: './images/places/pic-3.jpg',
      alt: 'Домбай'
    },
    {
      name: 'Гора Эльбрус',
      link: './images/places/pic-2.jpg',
      alt: 'Гора Эльбрус'
    },
    {
      name: 'Домбай',
      link: './images/places/pic-3.jpg',
      alt: 'Домбай'
    },
    {
      name: 'Карачаевск',
      link: './images/places/pic-1.jpg',
      alt: 'Карачаевск'
    },
  ];

  //форма добавления карточки
  const addCardBtn =  document.querySelector(".profile__btn_add");
  const addCardPopup = document.querySelector("#add-card");
  const addCardForm = document.querySelector("[name='add-card-popup']");
  const inputNewCardTitle = document.querySelector(".popup__input_type_title");
  const inputNewCardLink = document.querySelector(".popup__input_type_link");
  let valueInputTitle;
  let valueInputLink;

  function openPopup() {
    popup.classList.add("popup_opened");
    fillForm();
  }

  function closePopup(evt) {
    evt.target.closest('.popup').classList.remove("popup_opened");
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
    console.log(valueInputTitle,valueInputLink)
    let newCard = {
      name: valueInputTitle,
      link: valueInputLink,
      alt: valueInputTitle
    }
    createCard(newCard)
    addCardPopup.classList.remove("popup_opened");
  }

  function createCards () {
    initialCards.forEach(createCard);
  }

  function createCard (card) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    // наполняем содержимым
    cardElement.querySelector('.card__photo').src = card.link;
    cardElement.querySelector('.card__photo').alt = card.alt;
    cardElement.querySelector('.card__place').textContent = card.name;
    // отображаем на странице
    sectionCards.prepend(cardElement)
  }

  createCards();
  editProfile.addEventListener("click", openPopup);
  formPopup.addEventListener("submit", formSubmitHandler);
  for (let i=0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", closePopup);
  }

  //добавление новой карточки
  addCardBtn.addEventListener("click", () => addCardPopup.classList.add("popup_opened"));
  addCardForm.addEventListener("submit", addNewCardFormSubmitHandler);
});
