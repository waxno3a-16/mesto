import {Card} from './Card.js';

//функция открытия любого попапа
export function openPopup(popup){
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', esc);
}

//передаем значения имени и должности в профайле в форму попапа
function openProfilePopup(popup){
  nameInput.value = userName.textContent;
  jobInput.value = userPosition.textContent;
  openPopup(popup);
}

//открытие попапа "Новое место", при открытии попапа добавления карточки кнопка сабмита неактивна
profileEditButton.addEventListener('click', () => openProfilePopup(popupProfile));
buttonAddCard.addEventListener('click', () => {
  disableButton(buttonSubmitCard, validationConfig.inactiveButtonClass);
  openPopup(popupCardAdd);
});

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

//закрываем попап кликом по оверлею
allPopups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
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

//изменяя текст в полях имя и должность, изменяется информация в профайле
function editProfileFormSubmit (evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userPosition.textContent = jobInput.value;
  closePopup(popupProfile);
}
profilePopupForm.addEventListener('submit', editProfileFormSubmit);

//изменяем в форме название и ссылку и добавляем новую карточку по клику на сабмит
function submitCardForm (evt) {
  evt.preventDefault();
  renderCard({
    name: cardNameInput.value,
    alt: cardNameInput.value,
    link: cardLinkInput.value
  }, cardsContainer);
  cardAddForm.reset();
  closePopup(popupCardAdd);
}
cardAddForm.addEventListener('submit', submitCardForm);

//функция вставки карточек в DOM
function renderCard(item){
  const card = new Card(item, '#cardTemplate');
  const cardElement = card.createCard();
  document.querySelector('.container').prepend(cardElement);
}

initialCards.forEach(item => {renderCard(item)})