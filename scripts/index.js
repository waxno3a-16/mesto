let editProfileButton = document.querySelector('.profile__button');
let editProfile = document.querySelector('.popup');
let closeEditProfileButton = document.querySelector('.popup__close-button');
let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector('.popup__input-descript');
let userName = document.querySelector('.profile__name');
let userPosition = document.querySelector('.profile__descript');
let formElement = document.querySelector('.popup__container');

function openPopup() {
  editProfile.classList.add('popup_opened');
}

function closePopup(){
  editProfile.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userPosition.textContent = jobInput.value;
}

editProfileButton.addEventListener('click', openPopup);
closeEditProfileButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);




