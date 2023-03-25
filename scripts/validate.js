//функция показывает ошибку
const showInputError = (errorText, validationMessage, activeErrorClass, input, inputErrorClass) => {
  errorText.textContent = validationMessage;
  errorText.classList.add(activeErrorClass);
  input.classList.add(inputErrorClass);
}

//функция скрывает ошибку
const hideInputError = (errorText, activeErrorClass, input, inputErrorClass) => {
  errorText.classList.remove(activeErrorClass);
  errorText.textContent = '';
  input.classList.remove(inputErrorClass);
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
const checkInputValidity = (input, activeErrorClass, inputErrorClass) => {
  const inputName = input.getAttribute('name');
  errorText = document.querySelector(`${inputName}`);
  errorText = input.nextElementSibling;
  
  //если поля невалидны, то выводится ошибка
  if(!input.validity.valid) {
    //input.classList.add(inputErrorClass);

    showInputError (errorText, input.validationMessage, activeErrorClass, input, inputErrorClass);
  } else { //если поля невалидны, то выводится ошибка
    //input.classList.remove(inputErrorClass);
    
    hideInputError (errorText, activeErrorClass, input, inputErrorClass);
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

const setEventListeners = (formList, inputSelector, inputErrorClass, activeErrorClass, submitButtonSelector, inactiveButtonClass) => {
  formList.forEach((form) => {
    const inputList = Array.from(form.querySelectorAll(inputSelector));
    const submitButton = form.querySelector(submitButtonSelector);

    form.addEventListener('submit', () => {
      toggleButtonState (inputList, submitButton, inactiveButtonClass);
    });

    inputList.forEach((input) => {
      input.addEventListener('input', () => {
        checkInputValidity(input, activeErrorClass, inputErrorClass);
        toggleButtonState (inputList, submitButton, inactiveButtonClass);
      });
    });
  });
}

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  
  setEventListeners(formList, config.inputSelector, config.inputErrorClass, config.activeErrorClass, config.submitButtonSelector, config.inactiveButtonClass);
}



enableValidation(validationConfig);
