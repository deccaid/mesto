const edit = document.querySelector(".profile__edit-button");
const add = document.querySelector(".profile__add-button");
const popupButton = document.querySelector(".popup__button");
const closeAdd = document.getElementById("close_add");
const closeEdit = document.getElementById("close_edit");
const closeImage = document.getElementById("close__image");
const formElementEdit = document.getElementById("editPopupForm");
const nameInput = document.getElementById("input__text_type_name");
const jobInput = document.getElementById("input__text_type_profession");
const nameTitle = document.querySelector(".profile__name");
const jobTitle = document.querySelector(".profile__text");
const placesContainer = document.querySelector(".cards");
const placeTemplate = document.querySelector("#place-template").content;
const formElementAdd = document.getElementById("addPopupForm");
const likeCard = document.getElementById("cardlike");
const titleInput = document.getElementById("input__text_type_title");
const srcInput = document.getElementById("input__text_type_src");
const deleteCard = document.getElementById("delete_card");

popupOpenEdit = () => {
  modal = document.getElementById("popup__one");
  modal.style.display = "flex";
  modal.style.visibility = "visible";
  modal.style.opacity = "1";
  modal.style.transition = "1s";
};
popupOpenEditAdd = () => {
  modal = document.getElementById("popup__two");
  modal.style.display = "flex";
  modal.style.visibility = "visible";
  modal.style.opacity = "1";
  modal.style.transition = "1s";
};

popupCloseAdd = () => {
  modal.style.visibility = "hidden";
  modal.style.opacity = "0";
  modal.style.transition = "1s";
};
popupEditAdd = () => {
  modal.style.visibility = "hidden";
  modal.style.opacity = "0";
  modal.style.transition = "1s";
};
popupCloseImage = () => {
  let modal = document.getElementById("popupImage");
  modal.style.visibility = "hidden";
  modal.style.opacity = "0";
  modal.style.transition = "1s";
};

handleFormSubmitEdit = (evt) => {
  evt.preventDefault();
  nameTitle.textContent = nameInput.value;
  jobTitle.textContent = jobInput.value;
  popupCloseAdd();
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
  placeInfo.forEach(renderCard);
}

function renderCard({ name, link }) {
  const placeElement = placeTemplate.querySelector(".card").cloneNode(true);
  placeElement.querySelector(".card__image").src = link;
  placeElement
    .querySelector(".card__image")
    .addEventListener("click", function () {
      let popupImage = document.getElementById("popupImage");
      popupImage.style.visibility = "visible";
      popupImage.style.display = "flex";
      popupImage.style.opacity = "1";
      popupImage.style.transition = "1s";
      modal.style.opacity = "0";
      modal.style.transition = "1s";
      document.querySelector(".popup__img").src = link;
      document.querySelector(".popup__caption").textContent = name;
    });
  placeElement.querySelector(".card__name").textContent = name;
  placeElement
    .querySelector(".card__like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("card__like_active");
    });
  placeElement
    .querySelector(".card__delete")
    .addEventListener("click", function () {
      let card = document.querySelector(".card");
      card.remove();
    });

  placesContainer.prepend(placeElement);
}
render();

handleFormSubmitAdd = (evt) => {
  evt.preventDefault();
  const template = document.querySelector("#place-template");
  const item = template.content.cloneNode(true);
  item.querySelector(".card__name").textContent = titleInput.value;
  item.querySelector(".card__image").src = srcInput.value;
  item.querySelector(".card__image").addEventListener("click", function () {
    let popupImage = document.getElementById("popupImage");
    popupImage.style.display = "flex";
    document.querySelector(".popup__img").src = link;
    document.querySelector(".popup__caption").textContent = name;
  });
  item.querySelector(".card__like").addEventListener("click", function (evt) {
    evt.target.classList.toggle("card__like_active");
  });
  item.querySelector(".card__delete").addEventListener("click", function (evt) {
    let card = document.querySelector(".card");
    card.remove();
  });
  placesContainer.prepend(item);
  popupCloseAdd();
};

formElementAdd.addEventListener("submit", handleFormSubmitAdd);
edit.addEventListener("click", popupOpenEdit);
add.addEventListener("click", popupOpenEditAdd);
closeImage.addEventListener("click", popupCloseImage);
closeAdd.addEventListener("click", popupCloseAdd);
closeEdit.addEventListener("click", popupEditAdd);
formElementEdit.addEventListener("submit", handleFormSubmitEdit);
