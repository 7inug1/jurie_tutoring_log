let body = document.querySelector('body');
let modalLinks = document.querySelectorAll('.modal-link');
let modalContainer = document.createElement('div');
modalContainer.className = 'modal-container';

modalLinks.forEach((modalLink) => {
  modalLink.addEventListener('click', (event) => {
    onModalClick(modalLink, {});
  });
});

createCustomModal({
  dim: true,
  title: '제목1',
  content: undefined,
  button: 'undefined',
});

function createCustomModal(setting) {
  console.log(setting.dim);
  console.log(setting.title);
  console.log(setting.content);
  console.log(setting.button);

  let wrapper = document.createElement('div');
  wrapper.className = 'wrapper';

  let wrapper01 = document.createElement('div');
  wrapper01.className = 'wrapper01';
  let header = getHeader(setting.title);

  let main = document.createElement('div');
  main = getMain(setting.content);

  let dim = document.createElement('div');
  dim.className = 'dim';

  let buttonContainer = document.createElement('div');
  buttonContainer.className = 'button-container';

  if (setting.dim) {
    dim.addEventListener('click', () => {
      closeModal(wrapper);
    });
  }

  if (!body.contains(modalContainer)) {
    body.appendChild(modalContainer);
  }

  wrapper01.appendChild(header);
  wrapper01.appendChild(main);
  wrapper01.appendChild(main);
  if (setting.button === undefined) {
    wrapper01.appendChild(getButtonContainer('확인'));
  } else {
    wrapper01.appendChild(getButtonContainer(setting.button));
  }

  wrapper.appendChild(wrapper01);
  wrapper.appendChild(dim);
  modalContainer.appendChild(wrapper);

  // if (setting.title !== undefined) {
  //   title.innerText = setting.title;
  // }

  // if (setting.content !== undefined) {
  //   content.innerText = setting.content;
  // }
  // return wrapper;

  if (setting.button === undefined) {
    getButtonContainer('확인');
  } else {
  }
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

function getMain(content) {
  let main = document.createElement('div');
  main.className = 'main01';
  main.innerHTML = content;
  return main;
}

// function getButtonContainer(wrapper, confirmButtonText, cancelButtonText) {
function getButtonContainer(confirmButtonText) {
  let buttonContainer = document.createElement('div');
  buttonContainer.className = 'button-container';

  buttonContainer.appendChild(getConfirmButton(confirmButtonText));
  // if (cancelButtonText !== null) {
  //   buttonContainer.appendChild(getCancelButton(wrapper, cancelButtonText));
  // }

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

// function getCancelButton(wrapper, cancelButtonText) {
//   let cancelButton = document.createElement('button');
//   cancelButton.className = 'button01_head_white';
//   let cancelButton_tail = document.createElement('span');
//   cancelButton_tail.className = 'button01_tail';
//   let cancelButton_body = document.createElement('span');
//   cancelButton_body.className = 'button01_body';
//   cancelButton_body.innerHTML = `${cancelButtonText}`;
//   cancelButton.appendChild(cancelButton_tail);
//   cancelButton_tail.appendChild(cancelButton_body);
//   cancelButton.addEventListener('click', () => {
//     closeModal(wrapper);
//   });
//   return cancelButton;
// }

function getCloseButton(wrapper) {
  let closeButton = document.createElement('button');
  closeButton.className = 'close-button';
  closeButton.addEventListener('click', () => {
    closeModal(wrapper);
  });
  let closeButtonImg = document.createElement('img');
  closeButtonImg.src = './images/close-button.png';
  closeButton.appendChild(closeButtonImg);
  return closeButton;
}

function onModalClick(modalLink) {
  let wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  let clone = modalLink.cloneNode(true);
  let dim = document.createElement('div');
  dim.className = 'dim';

  dim.addEventListener('click', () => {
    closeModal(wrapper);
  });

  wrapper.appendChild(clone);
  wrapper.appendChild(dim);

  if (!body.contains(modalContainer)) {
    body.appendChild(modalContainer);
  }

  wrapper.appendChild(clone);
  wrapper.appendChild(dim);

  modalContainer.appendChild(wrapper);
}

function getModal(modalLink) {}

function closeModal(wrapper) {
  modalContainer.removeChild(wrapper);
  console.log('dim click');
}
