console.log('check');
let buttonOne = document.querySelector('.button-one');
let str = 'wrapper01';
buttonOne.addEventListener('click', makeModal);
let body = document.querySelector('body');

function makeModal() {
  let wrapper = document.createElement('div');
  wrapper.className = 'wrapper01';

  wrapper.appendChild(getHeader());
  wrapper.appendChild(getMain());
  wrapper.appendChild(buttonContainer);
  wrapper.appendChild(getCloseButton());
  console.log(wrapper);

  body.appendChild(wrapper);
}

function getHeader() {
  let header = document.createElement('div');
  header.className = 'header';
  let title01 = document.createElement('h1');
  title01.className = 'title01';
  header.appendChild(title01);
  let headerTitleImg = document.createElement('img');
  headerTitleImg.src = './images/title01_index1.png';
  title01.appendChild(headerTitleImg);
  return header;
}

function getMain() {
  let main01 = document.createElement('div');
  main01.className = 'main01';
  return main01;
}

function getButtonContainer() {
  let buttonContainer = document.createElement('div');
  buttonContainer.className = 'button-container';

  let button01_head = document.createElement('button');
  let button01_tail = document.createElement('span');
  let button01_body = document.createElement('span');
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
