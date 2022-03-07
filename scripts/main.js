document.addEventListener("DOMContentLoaded", function (event) {
  const editProfile = document.querySelector(".edit-profile");
  const popup = document.querySelector(".popup");
  const closeButton = document.querySelector(".popup__close");
  const profileName = document.querySelector(".profile__name");
  const profileDetail = document.querySelector(".profile__detail");
  const inputName = document.querySelector(".popup__input_name");
  const inputDetail = document.querySelector(".popup__input_detail");
  const formPopup = document.querySelector(".popup__form");

  editProfile.addEventListener("click", openPopup);
  closeButton.addEventListener("click", closePopup);
  formPopup.addEventListener("submit", formSubmitHandler);

  function openPopup() {
    popup.classList.add("popup_opened");
    fillForm();
  }

  function closePopup() {
    popup.classList.remove("popup_opened");
  }

  function fillForm() {
    let nameContent = profileName.textContent;
    let detailContent = profileDetail.textContent;

    inputName.value = nameContent;
    inputDetail.value = detailContent;
  }

  function formSubmitHandler(evt) {
    evt.preventDefault();
    let valueInputName = inputName.value;
    let valueInputDetail = inputDetail.value;

    profileName.textContent = valueInputName;
    profileDetail.textContent = valueInputDetail;

    closePopup();
  }
});
