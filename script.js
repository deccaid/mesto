let popup = document.querySelector('.popup');
let edit = document.querySelector('.profile__edit-button');
let closePopup = document.querySelector('.popup__exit');
let formElement = document.querySelector('.popup__form');
let profileEdit = document.querySelector('.profile__menu');
let nameInput = document.querySelector('.input__text_type_name');
let jobInput = document.querySelector('.input__text_type_profession');
let nameTitle = document.querySelector('.profile__name');
let jobTitle = document.querySelector('.profile__text');




popupOpen = () => {
    popup.classList.add("popup__opened");
    nameInput.value = nameTitle.textContent;
    jobInput.value = jobTitle.textContent;
}

popupClose = () => {
    popup.classList.remove("popup__opened");
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


