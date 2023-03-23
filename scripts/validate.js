//функция показывает ошибку
const showInputError = (errorText, validationMessage, activeErrorClass) => {
  errorText.textContent = validationMessage;
  errorText.classList.add(activeErrorClass);
}

//функция скрывает ошибку
const hideInputError = (errorText, activeErrorClass) => {
  errorText.classList.remove(activeErrorClass);
  errorText.textContent = '';
}


const disableButton = (submitButton, inactiveButtonClass) => {
  submitButton.classList.add(inactiveButtonClass);
  submitButton.disabled = true;
}

const enableButton = (submitButton, inactiveButtonClass) => {
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;
}

//функция проверяет валидность полей
const checkInputValidity = (input, activeErrorClass, inputErrorClass, inputTypeErrorClass) => {
  const inputName = input.getAttribute('name');
  errorText = document.querySelector(`${inputName}`);
  errorText = input.nextElementSibling;
  
  if(!input.validity.valid) {
    input.classList.add(inputErrorClass);
    input.classList.add(inputTypeErrorClass);

    showInputError (errorText, input.validationMessage, activeErrorClass, inputTypeErrorClass);
  } else {
    input.classList.remove(inputErrorClass);
    input.classList.remove(inputTypeErrorClass);
    
    hideInputError (errorText, activeErrorClass, inputTypeErrorClass);
  }
}

const hasInvalidInput = (inputList) => {
  return Array.from(inputList).some((input) => !input.validity.valid);
}

const toggleButtonState = (inputList, submitButtons, inactiveButtonClass) => {
  submitButtons.forEach((submitButton) => {
    if (hasInvalidInput(inputList)) {
      disableButton(submitButton, inactiveButtonClass);
    } else {
      enableButton(submitButton, inactiveButtonClass);
    }
  });
}

const setEventListeners = (formList, inputList, inputErrorClass, activeErrorClass, inputTypeErrorClass, submitButton, inactiveButtonClass) => {
  formList.forEach((form, input) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      toggleButtonState (input, submitButtonSelector, inactiveButtonClass);
    });
  });

  inputList.forEach((input) => {
    input.addEventListener('input', (evt) => {
      checkInputValidity(input, activeErrorClass, inputErrorClass, inputTypeErrorClass);
      toggleButtonState (inputList, submitButton, inactiveButtonClass);
    });
  });
}

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  const inputList = Array.from(document.querySelectorAll(config.inputSelector));
  const submitButtons = Array.from(document.querySelectorAll(config.submitButtonSelector));

  setEventListeners(formList, inputList, config.inputErrorClass, config.activeErrorClass, config.inputTypeErrorClass, submitButtons, config.inactiveButtonClass);
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input-error',
  activeErrorClass: 'popup__error_active',
  inputTypeErrorClass: 'popup__input_type_error'
});