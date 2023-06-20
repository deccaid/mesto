const popup = document.querySelector('.popup'); 
const buttonOpenEditProfileForm = document.querySelector('.profile__edit-button'); 
const buttonOpenAddCardForm = document.querySelector('.profile__add-button');
const popupEditProfile = document.querySelector('.popup_edit_profile');
const popupAddCard = document.querySelector('.popup_add_card');
const formEditProfile = popupEditProfile.querySelector('.popup__form');
const formAddCard= popupAddCard.querySelector('.popup__form');
const popupImageCard = document.querySelector('.popup_type_image')  
const profileEdit = document.querySelector('.profile__menu'); 
const nameInput = popupEditProfile.querySelector('.popup__input_type_name'); 
const jobInput = popupEditProfile.querySelector('.popup__input_type_profession');
const titleInput = popupAddCard.querySelector(".popup__input_type_name"); 
const srcInput = popupAddCard.querySelector(".popup__input_type_src");  
const nameTitle = document.querySelector('.profile__name'); 
const jobTitle = document.querySelector('.profile__text');
const closePopupProfile = popupEditProfile.querySelector('.popup__exit');
const closePopupCard = popupAddCard.querySelector('.popup__exit');
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
    openPopup(popupImageCard);
})

  return newCard;
}

const renderCards = () => {
    initialCards.forEach(function (cardTemp) {
    const newCard = createCard(cardTemp);
    cardContainer.append(newCard)
  })
}

 
openPopup = (popupElement) => { 
    popupElement.classList.add("popup_opened");     
}  
closePopup = (popupElement) => { 
    popupElement.classList.remove("popup_opened"); 
} 
 
handleFormSubmitEdit = (evt) => { 
    evt.preventDefault(); 
    nameTitle.textContent = nameInput.value; 
    jobTitle.textContent = jobInput.value; 
    closePopup(popupEditProfile); 
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
  closePopup(popupAddCard); 
} 

closePopupCard.addEventListener('click', function () {
  closePopup(popupAddCard);
});

closePopupProfile.addEventListener('click', function () {
  closePopup(popupEditProfile);
});
closePopupImage.addEventListener('click', function () {
  closePopup(popupImageCard);
});

buttonOpenAddCardForm.addEventListener('click', function () {
  openPopup(popupAddCard);

});

buttonOpenEditProfileForm.addEventListener('click', function () {
  openPopup(popupEditProfile);
  nameInput.value = nameTitle.textContent; 
  jobInput.value = jobTitle.textContent;
});
formEditProfile.addEventListener('submit', handleFormSubmitEdit);  
formAddCard.addEventListener('submit', handleFormSubmitAdd)
renderCards();

