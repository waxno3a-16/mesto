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
let formElementAdd = document.querySelector('#addPopupForm');
let cardNameInput = document.querySelector('#addPopupForm input[name="add-name"]');
let cardLinkInput = document.querySelector('#addPopupForm input[name="add-link"]');

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

const cardsContainer = document.querySelector('.container');

//выводим массив карточек-фотографий//

const createCard = (card) => {
  const newCard = document.querySelector('#cardTemplate').content.cloneNode(true);
  const cardName = newCard.querySelector('.container__element-name');
  cardName.textContent = card.name;
  const cardImage = newCard.querySelector('.container__image');
  cardImage.setAttribute('src', card.link);
  cardImage.setAttribute('alt', card.alt);
  let cardLikeButton = newCard.querySelector('.container__button');
  function likeCard(){cardLikeButton.classList.toggle('container__button_active');};//добавляем и убираем лайк к карточкам//
  cardLikeButton.addEventListener('click', likeCard);
  let cardDeleteButton = newCard.querySelector('.container__deletebtn');
  function deleteCard(evt){evt.target.closest('.container__element').remove();};//удаляем карточку по клику на корзину
  cardDeleteButton.addEventListener('click', deleteCard);
  //открываем большое изображение и передаем картинку и алт
  
  function openCard(evt){
    let popupImage = document.querySelector('.popup__image');
    let popupHeading = document.querySelector('.popup__image-name');
    popupImage.src = evt.target.src;
    popupHeading.textContent = evt.target.alt;
    document.querySelector('#imagePopup').classList.add('popup_opened');
  };
  let popupImageOpened = newCard.querySelector('.container__image');
  popupImageOpened.addEventListener('click', openCard);
  let popupImageClose = document.querySelector('#closeImagePopup');
  popupImageClose.addEventListener('click', function(){document.querySelector('#imagePopup').classList.remove('popup_opened');});

  return newCard;
}

const renderCard = (card, cardsContainer) => {
  const newCardElement = createCard(card);
  cardsContainer.prepend(newCardElement);
}

initialCards.forEach(data => {renderCard(data, cardsContainer);});

//изменяем в форме название и ссылку и добавляем новую карточку по клику на сабмит//
function cardFormSubmit (evt) {
  evt.preventDefault();
  renderCard({
    name: cardNameInput.value,
    alt: cardNameInput.value,
    link: cardLinkInput.value
  }, cardsContainer);
  closePopupAdd();
}

//открываем попап добавления места//
function openPopupAdd() {
  popupAdd.classList.add('popup_opened');
}

//закрываем попап добавления места//
function closePopupAdd() {
  popupAdd.classList.remove('popup_opened');
}

profileAddButton.addEventListener('click', openPopupAdd);
profileCloseAddButton.addEventListener('click', closePopupAdd);
formElementAdd.addEventListener('submit', cardFormSubmit);



