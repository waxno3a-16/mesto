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
const cardNameInput = document.querySelector('#addPopupForm input[name="card-name"]');
const cardLinkInput = document.querySelector('#addPopupForm input[name="card-link"]');
const buttonSubmitCard = document.querySelector('.popup__submit_function_create-card');

const popupOpenedImage = document.querySelector('.popup_type_zoom');
const popupImageClose = document.querySelector('#closeImagePopup');
const popupImage = document.querySelector('.popup__image');
const popupHeading = document.querySelector('.popup__image-name');

//const cardTemplate = document.querySelector('#cardTemplate').content.querySelector('.container__element');
const cardsContainer = document.querySelector('.container');

const closeButtons = document.querySelectorAll('.popup__close-button');

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    buttonSubmitCardSelector: '.popup__submit_function_create-card',
    inactiveButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__input-error',
    activeErrorClass: 'popup__input-error_active'
}

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