const popup = document.querySelector('.popup'); 
const edit = document.querySelector('.profile__edit-button'); 
const add = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_edit_profile');
const popupAdd = document.querySelector('.popup_add_card');
const formEdit = popupEdit.querySelector('.popup__form');
const formAdd = popupAdd.querySelector('.popup__form');
const popupImageCard = document.querySelector('.popup_type_image')  
const profileEdit = document.querySelector('.profile__menu'); 
const nameInput = popupEdit.querySelector('.popup__input_type_name'); 
const jobInput = popupEdit.querySelector('.popup__input_type_profession');
const titleInput = popupAdd.querySelector(".popup__input_type_name"); 
const srcInput = popupAdd.querySelector(".popup__input_type_src");  
const nameTitle = document.querySelector('.profile__name'); 
const jobTitle = document.querySelector('.profile__text');
const closePopupProfile = popupEdit.querySelector('.popup__exit');
const closePopupCard = popupAdd.querySelector('.popup__exit');
const closePopupImage = popupImageCard.querySelector('.popup__exit');
const cardTemplate = document.querySelector('#place-template').content;
const cardContainer = document.querySelector('.cards');
const imagePopup = document.querySelector('.popup__img')
const captionPopup = document.querySelector('.popup__caption')


const createCard = ({name, link}) => {
  const newCard = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteCard = newCard.querySelector('.card__delete');
  const imageCard = newCard.querySelector('.card__image');
  const nameCard = newCard.querySelector('.card__name');
  const likeCard = newCard.querySelector('.card__like');
  
  imageCard.src = link;
  imageCard.alt = name;

  nameCard.textContent = name;

  deleteCard.addEventListener('click', function () {
    newCard.remove();
  })
  likeCard.addEventListener('click', function () {
      likeCard.classList.toggle('card__like_active');
  })
  imageCard.addEventListener('click', function () {
    imagePopup.src = link;
    imagePopup.alt = name;
    captionPopup.textContent = name;
    popupOpen(popupImageCard);
})

  return newCard;
}

const renderCards = () => {
    initialCards.forEach(function (cardTemp) {
    const newCard = createCard(cardTemp);
    cardContainer.append(newCard)
  })
}


 
 
 
popupOpen = (popupElement) => { 
    popupElement.classList.add("popup_opened");     
}  
popupClose = (popupElement) => { 
    popupElement.classList.remove("popup_opened"); 
} 
 
handleFormSubmitEdit = (evt) => { 
    evt.preventDefault(); 
    nameTitle.textContent = nameInput.value; 
    jobTitle.textContent = jobInput.value; 
    popupClose(popupEdit); 
} 
handleFormSubmitAdd = (evt) => { 
  evt.preventDefault();
  const newCard = createCard({
    name: titleInput.value,
    link: srcInput.value
  });
  titleInput.value = ''
  srcInput.value = ''
  cardContainer.prepend(newCard)
  popupClose(popupAdd); 
} 

 


closePopupCard.addEventListener('click', function () {
  popupClose(popupAdd);
});

closePopupProfile.addEventListener('click', function () {
  popupClose(popupEdit);
});
closePopupImage.addEventListener('click', function () {
  popupClose(popupImageCard);
});

add.addEventListener('click', function () {
  popupOpen(popupAdd);

});

edit.addEventListener('click', function () {
  popupOpen(popupEdit);
  nameInput.value = nameTitle.textContent; 
  jobInput.value = jobTitle.textContent;
});
formEdit.addEventListener('submit', handleFormSubmitEdit);  
formAdd.addEventListener('submit', handleFormSubmitAdd)
renderCards();

