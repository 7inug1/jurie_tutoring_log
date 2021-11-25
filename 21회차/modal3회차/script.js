let body = document.querySelector('.main-body');
let modals = document.querySelectorAll('.modal');
let modalContainer = document.createElement('div');
modalContainer.className = 'modal-container';
let overflowHidden = 'overflow-hidden';

window.addEventListener('click', (event) => {
  console.log(event.target);
});

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

function toggleBodyOverflow() {
  body.classList.contains(overflowHidden)
    ? body.classList.remove(overflowHidden)
    : body.classList.add(overflowHidden);
}

function getButtonContainer(confirmButtonText, cancelButtonText, wrapper) {
  let buttonContainer = document.createElement('div');
  buttonContainer.className = 'button-container';

  buttonContainer.appendChild(getConfirmButton(confirmButtonText));
  buttonContainer.appendChild(getCancelButton(wrapper, cancelButtonText));

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

function getCancelButton(wrapper, cancelButtonText) {
  console.log(cancelButtonText);
  let cancelButton = document.createElement('button');
  cancelButton.className = 'button01_head_white';
  let cancelButton_tail = document.createElement('span');
  cancelButton_tail.className = 'button01_tail';
  let cancelButton_body = document.createElement('span');
  cancelButton_body.className = 'button01_body';
  cancelButton_body.innerHTML = `${cancelButtonText}`;
  cancelButton.appendChild(cancelButton_tail);
  cancelButton_tail.appendChild(cancelButton_body);
  cancelButton.addEventListener('click', () => {
    closeModal(wrapper);
  });
  return cancelButton;
}

function closeModal(wrapper) {
  modalContainer.removeChild(wrapper);
  toggleBodyOverflow();
}

const modalObj = {
  id: () => {
    let id = 0;
    let idStr = `id + ${id}`;
    i++;
    return idStr;
  },
  open: () => {
    // window.addEventListener('click', (event) => {
    //   if
    // });

    let wrapper = document.createElement('div');
    wrapper.className = 'wrapper';

    let wrapper01 = document.createElement('div');
    wrapper01.className = 'wrapper01';
    let header = getHeader(defaultSetting.title);

    let main = getMain(defaultSetting.content);

    let dim = document.createElement('div');
    dim.className = 'dim';

    let buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    if (defaultSetting.dim) {
      dim.addEventListener('click', () => {
        closeModal(wrapper);
      });
    }

    if (!body.contains(modalContainer)) {
      body.appendChild(modalContainer);
    }

    wrapper01.appendChild(header);
    wrapper01.appendChild(main);

    wrapper01.appendChild(
      getButtonContainer(
        defaultSetting.confirmButton,
        defaultSetting.cancelButton,
        wrapper
      )
    );

    wrapper.appendChild(wrapper01);
    wrapper.appendChild(dim);
    modalContainer.appendChild(wrapper);
  },
  close: () => {},
};

let defaultSetting = {
  dim: true,
  title: '제목을 입력해주세요',
  content: '내용을 입력해주세요',
  confirmButton: '확인',
  cancelButton: '취소',
};

modals.forEach((modal) => {
  modal.addEventListener('click', (event) => {
    modal = modalObj;
    // onModalClick(modal, {});
  });
});
