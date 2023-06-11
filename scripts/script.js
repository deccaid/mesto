// const popup = document.querySelector('.popup');
const edit = document.querySelector('.profile__edit-button');
const add = document.querySelector('.profile__add-button');
const popupButton = document.querySelector('.popup__button');
const closeAdd= document.getElementById('close_add');
const closeEdit = document.getElementById('close_edit');
const formElementEdit = document.getElementById('editPopupForm');
const profileEdit = document.querySelector('.profile__menu');
const  nameInput = document.getElementById('input__text_type_name');
const  jobInput = document.getElementById('input__text_type_profession');
const  nameTitle = document.querySelector('.profile__name');
const  jobTitle = document.querySelector('.profile__text');


popupOpenEdit = () =>  {
  modal = document.getElementById("popup__one");
  modal.style.display = "flex";
}
popupOpenEditAdd = () => {
  modal = document.getElementById("popup__two");
  modal.style.display = "flex";
}

popupCloseAdd = () => {
  modal.style.display = "none";
}
popupEditAdd = () => {
  modal.style.display = "none";
}

handleFormSubmitEdit = (evt) => {
  evt.preventDefault();
  nameTitle.textContent = nameInput.value;
  jobTitle.textContent = jobInput.value;
  popupCloseAdd(); 
}

edit.addEventListener('click', popupOpenEdit);
add.addEventListener('click', popupOpenEditAdd);
closeAdd.addEventListener('click', popupCloseAdd);
closeEdit.addEventListener('click', popupEditAdd);
formElementEdit.addEventListener('submit', handleFormSubmitEdit);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 



const placesContainer = document.querySelector('.cards');
const placeTemplate = document.querySelector('#place-template').content;
const formElementAdd = document.getElementById('addPopupForm');
const  titleInput = document.getElementById('input__text_type_title');
const  srcInput = document.getElementById('input__text_type_src');  


const placeInfo = initialCards.map(function (item) {
return {
name: item.name,
link: item.link
};
});

function render() {
placeInfo.forEach(renderCard);
}

function renderCard({ name, link }) {
const placeElement = placeTemplate
  .querySelector('.card')
   .cloneNode(true);
placeElement.querySelector('.card__image').src = link;
placeElement.querySelector('.card__name').textContent = name;
placesContainer.prepend(placeElement);

}
render();  
handleFormSubmitAdd = (evt) => {
  evt.preventDefault();  
const template = document.querySelector('#place-template');
const item = template.content.cloneNode(true);
item.querySelector('.card__name').textContent = titleInput.value
item.querySelector('.card__image').src = srcInput.value
placesContainer.prepend(item);
popupCloseAdd(); 
}

formElementAdd.addEventListener('submit', handleFormSubmitAdd);












