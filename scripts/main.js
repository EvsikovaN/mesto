document.addEventListener("DOMContentLoaded", function (event) {
  const editProfile = document.querySelector(".profile__btn_edit");
  const popup = document.querySelector(".popup_type_edit-profile");
  const closeButton = document.querySelector(".popup__close_form_edit-profile");
  const profileName = document.querySelector(".profile__name");
  const profileDetail = document.querySelector(".profile__detail");
  const inputName = document.querySelector(".popup__input_name");
  const inputDetail = document.querySelector(".popup__input_detail");
  const formPopup = document.querySelector(".popup__form_type_edit-profile");

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

  editProfile.addEventListener("click", openPopup);
  closeButton.addEventListener("click", closePopup);
  formPopup.addEventListener("submit", formSubmitHandler);
});
