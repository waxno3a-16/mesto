const popup = document.querySelector('.popup');
const allPopups = document.querySelectorAll('.popup');

const popupProfile = document.querySelector('.popup_type_edit-profile');
const profileEditButton = document.querySelector('.profile__button_function_edit');
const profileCloseEditButton = document.querySelector('.popup__close-button');
const profilePopupForm = document.querySelector('.popup__form_function_edit-profile');
const nameInput = document.querySelector('.popup__input_info_name');
const jobInput = document.querySelector('.popup__input_info_descript');
const userName = document.querySelector('.profile__name');
const userPosition = document.querySelector('.profile__descript');

const popupCardAdd = document.querySelector('.popup_type_add-card');
const buttonAddCard = document.querySelector('.profile__button_function_add-place');
const buttonCloseAddCard = document.querySelector('#closeAddPopup');
const cardAddForm = document.querySelector('.popup__form_function_create');
const cardNameInput = document.querySelector('#addPopupForm input[name="add-name"]');
const cardLinkInput = document.querySelector('#addPopupForm input[name="add-link"]');

const popupOpenedImage = document.querySelector('.popup_type_zoom');
const popupImageClose = document.querySelector('#closeImagePopup');
const popupImage = document.querySelector('.popup__image');
const popupHeading = document.querySelector('.popup__image-name');

const cardTemplate = document.querySelector('#cardTemplate').content.querySelector('.container__element');
const cardsContainer = document.querySelector('.container');

const closeButtons = document.querySelectorAll('.popup__close-button');

//функция открытия любого попапа
function openPopup(popup){
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', esc);
}

profileEditButton.addEventListener('click', () => openPopup(popupProfile), openProfilePopup());
buttonAddCard.addEventListener('click', () => openPopup(popupCardAdd));

//передаем значения имени и должности в профайле в форму попапа
function openProfilePopup(){
  nameInput.value = userName.textContent;
  jobInput.value = userPosition.textContent;
}

//функция закрытия любого попапа
function closePopup(popup){
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', esc);
}

//перебираем массив "крестиков" и закрываем попап кликом по ближайшему крестику
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

allPopups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
      if(evt.target === popup){
        closePopup(popup);
    }
  });
});

//функция закрытия попапов на нажатие escape
function esc (evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

//popup.addEventListener('click', () =>  closePopup(popup));  //--- комент для себя: кажется, это больше не нужно, но это не точно

//изменяя текст в полях имя и должность, изменяется информация в профайле
function profileEditFormSubmit (evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userPosition.textContent = jobInput.value;
  closePopup(popupProfile);
}
profilePopupForm.addEventListener('submit', profileEditFormSubmit);

//изменяем в форме название и ссылку и добавляем новую карточку по клику на сабмит
function cardFormSubmit (evt) {
  evt.preventDefault();
  renderCard({
    name: cardNameInput.value,
    alt: cardNameInput.value,
    link: cardLinkInput.value
  }, cardsContainer);
  evt.target.reset();
  closePopup(popupCardAdd);
}
cardAddForm.addEventListener('submit', cardFormSubmit);

//выводим массив карточек-фотографий//
const createCard = (card) => {
  const newCard = cardTemplate.cloneNode(true);
  const cardName = newCard.querySelector('.container__element-name');
  cardName.textContent = card.name;
  const cardImage = newCard.querySelector('.container__image');
  cardImage.setAttribute('src', card.link);
  cardImage.setAttribute('alt', card.name);

  //переменные для функции лайка
  const cardLikeButton = newCard.querySelector('.container__button');
  cardLikeButton.addEventListener('click', likeCard);
  
  //переменные для функции удаления карточки
  const cardDeleteButton = newCard.querySelector('.container__deletebtn');
  cardDeleteButton.addEventListener('click', deleteCard);
  
  //переменные для открытия и закрытия попапа с большим изображением 
  cardImage.addEventListener('click', () => openCard(card));

  return newCard;
}

const renderCard = (card, cardsContainer) => {
  const newCardElement = createCard(card);
  cardsContainer.prepend(newCardElement);
}

initialCards.forEach(data => {renderCard(data, cardsContainer);});

//функция открытия карточки с изображением
function openCard(card){
  popupImage.src = card.link;
  popupHeading.textContent = card.name;
  popupImage.alt = card.name;
  openPopup(popupOpenedImage);
};

//функция закрытия карточки с изображением
function closeCard(){popupPicture.classList.remove('popup_opened');};

//добавляем и убираем лайк к карточкам//
function likeCard(evt){evt.target.closest('.container__button').classList.toggle('container__button_active');};

//удаляем карточку по клику на корзину
function deleteCard(evt){evt.target.closest('.container__element').remove();};