export class FormValidator {
    constructor(validationConfig, formElement, inputError) {
      this._validationConfig = validationConfig;
      this._inputSelector = validationConfig.inputSelector;
      this._submitButtonSelector = validationConfig.submitButtonSelector;
      this._buttonSubmitCardSelector = validationConfig.buttonSubmitCardSelector;
      this._inactiveButtonClass = validationConfig.inactiveButtonClass;
      this._inputErrorClass = validationConfig.inputErrorClass;
      this._activeErrorClass = validationConfig.activeErrorClass;
      this._formSelector = validationConfig.formSelector;
      
      this._formElement = formElement;
      this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
      this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
    }

  
    // метод показывает ошибку
    _showInputError = (input, validationMessage) => {
      const errorElement = input.nextElementSibling;
      errorElement.textContent = validationMessage;
      errorElement.classList.add(this._activeErrorClass);
      input.classList.add(this._inputErrorClass);
    }
  
     // метод скрывает ошибку
    _hideInputError = (input) => {
      const errorElement = input.nextElementSibling;
      errorElement.classList.remove(this._activeErrorClass);
      errorElement.textContent = '';
      input.classList.remove(this._inputErrorClass);
    } 
  
    //деактивируем кнопку сабмит
   _disableButton = () => {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    }
  
    //активируем кнопку сабмит
   _enableButton = () => {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  
    //проверяем валидность полей
    _checkInputValidity = (input) => {
      //если поля невалидны, то выводится ошибка
      if(!input.validity.valid) {
        this._showInputError (input, input.validationMessage);
      } else { //если поля валидны, то не выводится ошибка
        this._hideInputError (input);
      }
    }

    _hasInvalidInput = () => {
      return this._inputList.some((input) => !input.validity.valid);
    }
  
    _toggleButtonState = () => {
      if (this._hasInvalidInput()) {
        this._disableButton();
      } else {
        this._enableButton();
        }
    }

    _setEventListeners = () => {
      this._inputList.forEach((input) => {
        input.addEventListener('input', () => {
          this._checkInputValidity(input);
          this._toggleButtonState()
        });
      });
    }
  
    enableValidation(){
      this._formElement.addEventListener('submit', (evt) => {evt.preventDefault();});
      this._setEventListeners();
    }
}