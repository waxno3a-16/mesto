import {openPopup} from './index.js';

//создаем класс card для вывода карточек в дом
export class Card {
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
    this._elementLike = this._element.querySelector('.container__button');
    this._elementDelete = this._element.querySelector('.container__deletebtn');
     
    this._elementTitle.textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
  
    this._setEventListeners();
  
    return this._element;
  }
  
  _openCard(){
    popupImage.src = this._link;
    popupHeading.textContent = this._name;
    popupImage.alt = this._name;
    openPopup(popupOpenedImage);
  };
  
  _likeCard(){
    this._elementLike.classList.toggle('container__button_active');
  };
  
  _deleteCard(){
    this._element.remove();
  };
  
  _setEventListeners(){
    this._elementImage.addEventListener('click', () => {this._openCard()});
  
    this._elementLike.addEventListener('click', () => {this._likeCard()});
  
    this._elementDelete.addEventListener('click', () => {this._deleteCard()});
  }
}

//hghghgh