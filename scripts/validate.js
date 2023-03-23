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

//функция отключает кнопку ввода данных
const disableButton = (submitButton, inactiveButtonClass) => {
  submitButton.classList.add(inactiveButtonClass);
  submitButton.disabled = true;
}

//функция включает кнопку ввода данных
const enableButton = (submitButton, inactiveButtonClass) => {
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;
}

//функция проверяет валидность полей
const checkInputValidity = (input, activeErrorClass, inputErrorClass, inputTypeErrorClass) => {
  const inputName = input.getAttribute('name');
  errorText = document.querySelector(`${inputName}`);
  errorText = input.nextElementSibling;
  
  //если поля невалидны, то выводится ошибка
  if(!input.validity.valid) {
    input.classList.add(inputErrorClass);
    input.classList.add(inputTypeErrorClass);

    showInputError (errorText, input.validationMessage, activeErrorClass, inputTypeErrorClass);
  } else { //если поля невалидны, то выводится ошибка
    input.classList.remove(inputErrorClass);
    input.classList.remove(inputTypeErrorClass);
    
    hideInputError (errorText, activeErrorClass, inputTypeErrorClass);
  }
}

const hasInvalidInput = (inputList) => {
  return inputList.some((input) => !input.validity.valid);
}

//переключение кнопки ввода данных
const toggleButtonState = (inputList, submitButton, inactiveButtonClass) => {
    if (hasInvalidInput(inputList)) {
      disableButton(submitButton, inactiveButtonClass);
    } else {
      enableButton(submitButton, inactiveButtonClass);
    }
}

const setEventListeners = (formList, inputSelector, inputErrorClass, activeErrorClass, inputTypeErrorClass, submitButtonSelector, inactiveButtonClass) => {
  formList.forEach((form) => {
    const inputList = Array.from(form.querySelectorAll(inputSelector));
    const submitButton = form.querySelector(submitButtonSelector);

    form.addEventListener('submit', () => {
      toggleButtonState (inputList, submitButton, inactiveButtonClass);
    });

    inputList.forEach((input) => {
      input.addEventListener('input', () => {
        checkInputValidity(input, activeErrorClass, inputErrorClass, inputTypeErrorClass);
        toggleButtonState (inputList, submitButton, inactiveButtonClass);
      });
    });
  });
}

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  
  setEventListeners(formList, config.inputSelector, config.inputErrorClass, config.activeErrorClass, config.inputTypeErrorClass, config.submitButtonSelector, config.inactiveButtonClass);
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  buttonSubmitCardSelector: '.popup__submit_function_create-card',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input-error',
  activeErrorClass: 'popup__input-error_active',
  inputTypeErrorClass: 'popup__input_type_error'
});