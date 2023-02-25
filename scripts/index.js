let profileEditButton = document.querySelector('.profile__button_function_edit');
let profileEdit = document.querySelector('.popup');
let profileCloseEditButton = document.querySelector('.popup__close-button');
let nameInput = document.querySelector('.popup__input_info_name');
let jobInput = document.querySelector('.popup__input_info_descript');
let userName = document.querySelector('.profile__name');
let userPosition = document.querySelector('.profile__descript');
let formElement = document.querySelector('.popup__form');

//открываем попап//
function openPopup() {
  profileEdit.classList.add('popup_opened');
  nameInput.value = userName.textContent;
  jobInput.value = userPosition.textContent;
}

//закрываем попап//
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




