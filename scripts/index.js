let profileEditButton = document.querySelector('.profile__button_function_edit');
let profileEdit = document.querySelector('.popup');
let profileCloseEditButton = document.querySelector('.popup__close-button');
let nameInput = document.querySelector('.popup__input_info_name');
let jobInput = document.querySelector('.popup__input_info_descript');
let userName = document.querySelector('.profile__name');
let userPosition = document.querySelector('.profile__descript');
let formElement = document.querySelector('.popup__form');
let popupAdd = document.querySelector('#addPopup');
let profileAddButton = document.querySelector('.profile__button_function_add-place');
let profileCloseAddButton = document.querySelector('#closeAddPopup');
let picName = document.querySelector('.container__element-name');
let picLink = document.querySelector('.container__image');
let cardNameInput = document.querySelector('.popup__input_info_name');
let cardLinkInput = document.querySelector('.popup__input_info_descript');


//открываем попап редактирования профиля//
function openPopup() {
  profileEdit.classList.add('popup_opened');
  nameInput.value = userName.textContent;
  jobInput.value = userPosition.textContent;
}

//закрываем попап редактирования профиля//
function closePopup(){
  profileEdit.classList.remove('popup_opened');
}

//изменяя текст в полях имя и должность, изменяется информация в профайле//
function handleFormSubmit (evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userPosition.textContent = jobInput.value;
  closePopup();
}

profileEditButton.addEventListener('click', openPopup);
profileCloseEditButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);

const initialCards = [
  {
    name: 'Архыз',
    alt: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    alt: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    alt: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    alt: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    alt: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    alt: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const page = document.querySelector('.container');

//выводим массив карточек-фотографий//
initialCards.forEach(function(card) {
  const newCard = document.querySelector('#cardTemplate').content.cloneNode(true);
  const cardName = newCard.querySelector('.container__element-name');
  cardName.textContent = card.name;
  const cardImage = newCard.querySelector('.container__image');
  cardImage.setAttribute('src', card.link);
  cardImage.setAttribute('alt', card.alt);
  page.append(newCard);
});

//открываем попап добавления места//
function openPopupAdd() {
  popupAdd.classList.add('popup_opened');
}

//закрываем попап добавления места//
function closePopupAdd() {
  popupAdd.classList.remove('popup_opened');
}

//изменяем в форме название и ссылку и добавляем новую карточку по клику на сабмит//
function picFormSubmit (evt) {
  evt.preventDefault();
  picName.textContent = cardNameInput.value;
  picLink.textContent = cardLinkInput.value;
  closePopup();
}

profileAddButton.addEventListener('click', openPopupAdd);
profileCloseAddButton.addEventListener('click', closePopupAdd);

//добавляем и убираем лайк к карточкам//
let likeButtons = document.querySelectorAll('.container__button');
likeButtons.forEach((likeButton) => {
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('container__button_active');
  });
});




