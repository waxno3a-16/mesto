const showInputError = (errorText, validationMessage, activeErrorClass, input, inputTypeErrorClass) => {
  errorText.textContent = validationMessage;
  errorText.classList.add(activeErrorClass);
  input.classList.add(inputTypeErrorClass);
}

const hideInputError = (errorText, activeErrorClass, input, inputTypeErrorClass) => {
  errorText.classList.remove(activeErrorClass);
  errorText.textContent = '';
  input.classList.remove(inputTypeErrorClass);
}


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

const setEventListeners = (formList, inputList, submitButtonSelector, inactiveButtonClass, inputErrorClass, activeErrorClass, inputTypeErrorClass) => {
  formList.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  });

  inputList.forEach((input) => {
    input.addEventListener('input', (evt) => {
      checkInputValidity(input, activeErrorClass, inputErrorClass, inputTypeErrorClass);
    });
  });
}

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  const inputList = Array.from(document.querySelectorAll(config.inputSelector));

  setEventListeners(formList, inputList, config.submitButtonSelector, config.inactiveButtonClass, config.inputErrorClass, config.activeErrorClass, config.inputTypeErrorClass);
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input-error',
  activeErrorClass: 'popup__error_active',
  inputTypeErrorClass: 'popup__input_type_error'
});