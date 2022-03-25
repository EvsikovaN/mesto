document.addEventListener("DOMContentLoaded", function (event) {
  const editProfile = document.querySelector(".profile__btn_edit");
  const popup = document.querySelector(".popup");
  const closeButton = document.querySelector(".popup__close");
  const profileName = document.querySelector(".profile__name");
  const profileDetail = document.querySelector(".profile__detail");
  const inputName = document.querySelector(".popup__input_type_name");
  const inputDetail = document.querySelector(".popup__input_type_detail");
  const formPopup = document.querySelector(".popup__form");
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

  let nameContent;
  let detailContent;
  let valueInputName;
  let valueInputDetail;

  function openPopup() {
    popup.classList.add("popup_opened");
    fillForm();
  }

  function closePopup() {
    popup.classList.remove("popup_opened");
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

    closePopup();
  }

  function createsCards () {
    initialCards.forEach(function (card) {
      const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
      // наполняем содержимым
      cardElement.querySelector('.card__photo').src = card.link;
      cardElement.querySelector('.card__photo').alt = card.alt;
      cardElement.querySelector('.card__place').textContent = card.name;
      // отображаем на странице
      sectionCards.append(cardElement)
    });
  }

  createsCards();
  editProfile.addEventListener("click", openPopup);
  closeButton.addEventListener("click", closePopup);
  formPopup.addEventListener("submit", formSubmitHandler);
});
