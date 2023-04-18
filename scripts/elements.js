export const allPopups = document.querySelectorAll('.popup');

export const popupProfile = document.querySelector('.popup_type_edit-profile');
export const profileEditButton = document.querySelector('.profile__button_function_edit');
export const profilePopupForm = document.querySelector('.popup__form_function_edit-profile');
export const nameInput = document.querySelector('.popup__input_info_name');
export const jobInput = document.querySelector('.popup__input_info_descript');
export const userName = document.querySelector('.profile__name');
export const userPosition = document.querySelector('.profile__descript');

export const popupCardAdd = document.querySelector('.popup_type_add-card');
export const buttonAddCard = document.querySelector('.profile__button_function_add-place');
export const cardAddForm = document.querySelector('.popup__form_function_create');
export const cardNameInput = document.querySelector('#addPopupForm input[name="card-name"]');
export const cardLinkInput = document.querySelector('#addPopupForm input[name="card-link"]');

export const popupOpenedImage = document.querySelector('.popup_type_zoom');
export const popupImage = document.querySelector('.popup__image');
export const popupHeading = document.querySelector('.popup__image-name');

export const cardsContainer = document.querySelector('.container');
export const closeButtons = document.querySelectorAll('.popup__close-button');


//комментарий для себя - данные переменные не нужны, но пока оставлю так
//const profileCloseEditButton = document.querySelector('.popup__close-button');
//const buttonCloseAddCard = document.querySelector('#closeAddPopup');
//const buttonSubmitCard = document.querySelector('.popup__submit_function_create-card');
//const popupImageClose = document.querySelector('#closeImagePopup');
//const cardTemplate = document.querySelector('#cardTemplate').content.querySelector('.container__element');