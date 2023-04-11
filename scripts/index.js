//функция открытия любого попапа
function openPopup(popup){
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', esc);
}

//передаем значения имени и должности в профайле в форму попапа
function openProfilePopup(popup){
  nameInput.value = userName.textContent;
  jobInput.value = userPosition.textContent;
  openPopup(popup);
}

//открытие попапа "Новое место"б при открытии попапа добавления карточки, кнопка сабмита неактивна
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

//создаем класс card для вывода карточек в дом
class Card {
  constructor(data, cardTemplate){
    this._name = data.name;
    this._alt = data.name;
    this._link = data.link;
    this._cardTemplate = cardTemplate;
  }

  //создаем шаблон и клонируем его, возвращаем новоую карточку
  _getTemplate(){
    const newCard = document.querySelector(this._cardTemplate).content.querySelector('.container__element').cloneNode(true);
    return newCard;
  }

  //создаем карточку и возвращаем
  createCard(){
    this._element = this._getTemplate();

    this._elementTitle = this._element.querySelector('.container__element-name');
    this._elementImage = this._element.querySelector('.container__image');
   
    this._elementTitle.textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;

    return this._element;
  }
}

//перебираем массив карточек и вставляем в DOM
initialCards.forEach((item) => {
  const card = new Card(item, '#cardTemplate');
  const cardElement = card.createCard();
  document.querySelector('.container').prepend(cardElement);
})


//функция открытия карточки с изображением
function openCard(card){
  popupImage.src = card.link;
  popupHeading.textContent = card.name;
  popupImage.alt = card.name;
  openPopup(popupOpenedImage);
};

//добавляем и убираем лайк к карточкам//
function likeCard(evt){evt.target.closest('.container__button').classList.toggle('container__button_active');};

//удаляем карточку по клику на корзину
function deleteCard(evt){evt.target.closest('.container__element').remove();};