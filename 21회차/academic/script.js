let popup = document.querySelector('.popup_wrapper');
let dim = document.querySelector('.dim');
let closeButton = document.querySelector('.close-button');
let blackConfirmButton = document.querySelector('.black-button_head.confirm');
let blackCloseButton = document.querySelector('.black-button_head.close');

let popupButton = document.querySelector('.popup-button');
popupButton.addEventListener('click', popupButtonOnClick);

dim.addEventListener('click', closePopup);
closeButton.addEventListener('click', closePopup);
blackConfirmButton.addEventListener('click', closePopup);
blackCloseButton.addEventListener('click', closePopup);

function popupButtonOnClick() {
  popup.classList.toggle('hidden');
  dim.classList.toggle('hidden');
}

function closePopup() {
  popup.classList.toggle('hidden');
  dim.classList.toggle('hidden');
}
