let modalOne = document.querySelector('.modal-one');
let modalThree = document.querySelector('.modal-three');
let modalFour = document.querySelector('.modal-four');
let modalFive = document.querySelector('.modal-five');
let modalSix = document.querySelector('.modal-six');

modalOne.addEventListener('click', () => {
  makeModal('캠페인 새로 만들기', '확인');
});
modalThree.addEventListener('click', () => {
  makeModal('상품발송하기 도움말', '확인');
});
modalFour.addEventListener('click', () => {
  makeModal('번호변경 재발송', '확인');
});
modalFive.addEventListener('click', () => {
  makeModal('환불 받을 계좌 정보 확인', '환불요청', '취소');
});
modalSix.addEventListener('click', () => {
  makeModal('재발송/번호변경 재발송/발송취소 도움말', '확인');
});

let body = document.querySelector('body');

function makeModal(titleText, confirmButtonText, cancelButtonText) {
  let wrapper = getWrapper();

  wrapper.appendChild(getHeader(titleText));
  wrapper.appendChild(getMain());
  wrapper.appendChild(getButtonContainer(confirmButtonText, cancelButtonText));
  wrapper.appendChild(getCloseButton());

  body.appendChild(wrapper);
}

function getWrapper() {
  let wrapper = document.createElement('div');
  wrapper.className = 'wrapper01';
  return wrapper;
}

function getHeader(titleText) {
  let header = document.createElement('div');
  header.className = 'header';
  let title = document.createElement('h1');
  title.className = 'title01';
  title.innerHTML = `${titleText}`;
  header.appendChild(title);

  return header;
}

function getMain() {
  let main = document.createElement('div');
  main.className = 'main01';

  let content = document.createElement('div');
  content.className = 'content03';

  return main;
}

function getButtonContainer(confirmButtonText, cancelButtonText) {
  let buttonContainer = document.createElement('div');
  buttonContainer.className = 'button-container';

  buttonContainer.appendChild(getConfirmButton(confirmButtonText));
  buttonContainer.appendChild(getCancelButton(cancelButtonText));

  return buttonContainer;
}

function getConfirmButton(confirmButtonText) {
  let confirmButton = document.createElement('button');
  confirmButton.className = 'button01_head_orange';
  let confirmButton_tail = document.createElement('span');
  confirmButton_tail.className = 'button01_tail';
  let confirmButton_body = document.createElement('span');
  confirmButton_body.className = 'button01_body';
  confirmButton_body.innerHTML = `${confirmButtonText}`;
  confirmButton.appendChild(confirmButton_tail);
  confirmButton_tail.appendChild(confirmButton_body);
  return confirmButton;
}

function getCancelButton(cancelButtonText) {
  let cancelButton = document.createElement('button');
  cancelButton.className = 'button01_head_white';
  let cancelButton_tail = document.createElement('span');
  cancelButton_tail.className = 'button01_tail';
  let cancelButton_body = document.createElement('span');
  cancelButton_body.className = 'button01_body';
  cancelButton_body.innerHTML = `${cancelButtonText}`;
  cancelButton.appendChild(cancelButton_tail);
  cancelButton_tail.appendChild(cancelButton_body);
  return cancelButton;
}

function getCloseButton() {
  let closeButton = document.createElement('button');
  closeButton.className = 'close-button';
  let closeButtonImg = document.createElement('img');
  closeButtonImg.src = './images/close-button.png';
  closeButton.appendChild(closeButtonImg);
  return closeButton;
}

// wrapper, header, body 구조 다 짜고 창으로 띄워보기.
