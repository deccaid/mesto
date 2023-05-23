const popup = document.querySelector('.popup');
const edit = document.querySelector('.profile__edit-button');
const closePopup = document.querySelector('.popup__exit');
const formElement = document.querySelector('.popup__form');
const profileEdit = document.querySelector('.profile__menu');
const nameInput = document.getElementById('input__text_type_name');
const jobInput = document.getElementById('input__text_type_profession');
const nameTitle = document.querySelector('.profile__name');
const jobTitle = document.querySelector('.profile__text');




popupOpen = () => {
    popup.classList.add("popup_opened");
    nameInput.value = nameTitle.textContent;
    jobInput.value = jobTitle.textContent;
}

popupClose = () => {
    popup.classList.remove("popup_opened");
}

handleFormSubmit = (evt) => {
    evt.preventDefault();
    nameTitle.textContent = nameInput.value;
    jobTitle.textContent = jobInput.value;
    popupClose();
}

closePopup.addEventListener('click', popupClose);
edit.addEventListener('click', popupOpen);
formElement.addEventListener('submit', handleFormSubmit); 


