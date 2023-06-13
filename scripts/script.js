
const closeAdd = document.getElementById("close_add");
const closeEdit = document.getElementById("close_edit");
const closeImage = document.getElementById("close__image");
const formElementEdit = document.getElementById("editPopupForm");
const nameInput = document.getElementById("input__text_type_name");
const jobInput = document.getElementById("input__text_type_profession");
const nameTitle = document.querySelector(".profile__name");
const jobTitle = document.querySelector(".profile__text");
const placesContainer = document.querySelector(".cards");
const placeTemplate = document.getElementById("place-template").content;
const formElementAdd = document.getElementById("addPopupForm");
const titleInput = document.getElementById("input__text_type_title");
const srcInput = document.getElementById("input__text_type_src");
const popupInscrease = document.getElementById("popupInscrease");
const popupCaption = popupInscrease.querySelector('.popup__caption')
const popupImg = popupInscrease.querySelector(".popup__img");
const btns = document.querySelectorAll('*[data-modal-btn]');
const cardImage = placeTemplate.querySelector('.card__image');

for(let i = 0; i <btns.length; i++) {
  btns[i].addEventListener('click', function () {
    const name = btns[i].getAttribute('data-modal-btn')
    const popupOpen = document.querySelector ("[data-modal-window='"+name+"']")
    popupOpen.classList.add('popup_opened');
    returnNameEdit()
    const popupClose = popupOpen.querySelector('.popup__exit');
    const buttonSubmitClose = popupOpen.querySelector('.popup__button')
    buttonSubmitClose.addEventListener('click', function () {
    popupOpen.classList.remove('popup_opened');
    })
    popupClose.addEventListener('click', function () {
      popupOpen.classList.remove('popup_opened');
      })
  })
}
function returnNameEdit(){
  nameInput.value = 'Жак-Ив Кусто';
  jobInput.value = 'Исследователь океана';
  titleInput.value = 'Название';
  srcInput.value = 'Ссылка на картинку'
}


handleFormSubmitEdit = (evt) => {
  evt.preventDefault();
  nameTitle.textContent = nameInput.value;
  jobTitle.textContent = jobInput.value;
};
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
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const placeInfo = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link,
  };
});

function render() {
  placeInfo.forEach(createCard);
}
function createCard({ name, link }) {
  const placeElement = placeTemplate.querySelector(".card").cloneNode(true);
  const cardImage = placeElement.querySelector('.card__image')
  placeElement.querySelector(".card__name").textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  placesContainer.prepend(placeElement);
  cardImage.addEventListener("click", function () {
      let popup = document.getElementById('popupInscrease')
      popup.style.display = 'flex'
      popupImg.src = link;
      popupImg.alt = name;
      popupCaption.textContent = name; 
    });
  renderCard();
}
render();


function renderCard() {
  const closeImage = document.getElementById('close__image');
  closeImage.addEventListener("click", function () {
    let popup = document.getElementById('popupInscrease')
    popup.style.display = 'none'
  });
  const likeCard = document.querySelector('.card__like');
    likeCard.addEventListener("click", function (evt) {
      evt.target.classList.toggle("card__like_active");
    });
  const deleteCard = document.querySelector('.card__delete')
    deleteCard.addEventListener("click", function () {
      let card = deleteCard.closest(".card");
     card.remove();
    });

}

handleFormSubmitAdd = (evt) => {
  evt.preventDefault();
  const item = placeTemplate.cloneNode(true);
  item.querySelector(".card__name").textContent = titleInput.value;
  item.querySelector(".card__image").src = srcInput.value;
  placeTemplate.addEventListener("click", function () {
  document.querySelector(".popup__img").src = link;
  document.querySelector(".popup__caption").textContent = name;  
  });
  placesContainer.prepend(item);
  renderCard();
};
formElementAdd.addEventListener("submit", handleFormSubmitAdd);
formElementEdit.addEventListener("submit", handleFormSubmitEdit);

