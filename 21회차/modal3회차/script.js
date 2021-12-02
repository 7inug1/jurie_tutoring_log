let body = document.querySelector('.main-body');
let modals = document.querySelectorAll('.modal');
let modalContainer = document.createElement('div');
modalContainer.id = 'modal-container';
let overflowHidden = 'overflow-hidden';
let defaultSetting = {
  dim: true,
  title: '제목을 입력해주세요',
  content: `defaultSetting 대신 커스텀 세팅을 이용하시고 싶다면 다음의 형식으로 입력해주세요: <br><br>
  {<br>
    &nbspdim: Boolean,<br>
    &nbsptitle: String,<br> 
    &nbspcontent: String,<br>
    &nbspconfirmButton: String,<br>
    &nbspcancelButton: String<br>},<br>`,
  confirmButton: '확인',
  cancelButton: '취소',
};

window.addEventListener('click', (event) => {
  if (event.target.className === 'modal') {
    let clonedModal = event.target.children[0].cloneNode(true);
    modalObj.clone(clonedModal);
  }
});

const modalObj = {
  assignModalId: (wrapper) => {
    let length = modalContainer.children.length;
    let modalId;
    if (length === 0) {
      modalId = `modal-0`;
      wrapper.id = modalId;
    } else {
      let lastModalId = Number(
        modalContainer.childNodes[length - 1].id.split('-')[1]
      );
      let newModalId = `modal-${lastModalId + 1}`;
      wrapper.id = newModalId;
    }
  },
  open: (setting) => {
    modalObj.createBodyOverflow();
    console.log(!body.contains(modalContainer));
    modalObj.createModalContainer(!body.contains(modalContainer));

    let header = modalObj.getHeader(setting.title);
    let main = modalObj.getMain(setting.content);
    let wrapper = modalObj.getWrapper();
    let dim = modalObj.getDim(wrapper, setting.dim);
    let wrapper01 = modalObj.getWrapper01(header, main, wrapper, setting, dim);

    wrapper.appendChild(wrapper01);
    wrapper.appendChild(dim);
    modalContainer.appendChild(wrapper);
  },
  close: (wrapper, dim) => {
    modalContainer.removeChild(wrapper);
    wrapper.removeChild(dim);

    modalObj.removeModalContainer(modalContainer.hasChildNodes());
    modalObj.removeBodyOverflow();
  },
  clone: (clonedModal) => {
    console.log(this);

    let wrapper = modalObj.getWrapper();
    let dim = modalObj.getDim(wrapper, true);
    console.log(clonedModal);
    let closeButton = clonedModal.querySelector('.close-button');
    let buttonContainer = clonedModal.querySelector('.button-container');
    let confirmButton = buttonContainer.children[0];
    console.log(buttonContainer);
    console.log(closeButton);
    console.log(clonedModal);
    if (buttonContainer.children.length > 1) {
      let cancelButton = buttonContainer.children[1];
      cancelButton.addEventListener('click', () => {
        modalObj.close(wrapper, dim);
      });
    }

    closeButton.addEventListener('click', () => {
      modalObj.close(wrapper, dim);
    });
    confirmButton.addEventListener('click', () => {
      modalObj.close(wrapper, dim);
    });

    modalObj.createBodyOverflow();
    modalObj.createModalContainer(!body.contains(modalContainer));

    wrapper.appendChild(clonedModal);
    wrapper.appendChild(dim);
    modalContainer.appendChild(wrapper);
  },
  getHeader: (titleText) => {
    let header = document.createElement('div');
    header.className = 'header';
    let title = document.createElement('h1');
    title.className = 'title01';
    title.innerHTML = `${titleText}`;

    header.appendChild(title);

    return header;
  },
  getMain: (content) => {
    let main = document.createElement('div');
    main.className = 'main01';
    main.innerHTML = content;

    return main;
  },
  createBodyOverflow: () => {
    if (!body.classList.contains(overflowHidden)) {
      body.classList.add(overflowHidden);
    }
  },
  removeBodyOverflow: () => {
    if (
      body.classList.contains(overflowHidden) &&
      !(body.lastChild.className === 'modal-container')
    ) {
      body.classList.remove(overflowHidden);
    }
  },
  getButtonContainer: (confirmButtonText, cancelButtonText, wrapper, dim) => {
    let buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    buttonContainer.appendChild(
      modalObj.getConfirmButton(wrapper, confirmButtonText, dim)
    );
    buttonContainer.appendChild(
      modalObj.getCancelButton(wrapper, cancelButtonText, dim)
    );

    return buttonContainer;
  },
  getConfirmButton: (wrapper, confirmButtonText, dim) => {
    let confirmButton = document.createElement('button');
    confirmButton.className = 'button01_head_orange';
    let confirmButton_tail = document.createElement('span');
    confirmButton_tail.className = 'button01_tail';
    let confirmButton_body = document.createElement('span');
    confirmButton_body.className = 'button01_body';
    confirmButton_body.innerHTML = `${confirmButtonText}`;

    confirmButton.appendChild(confirmButton_tail);
    confirmButton_tail.appendChild(confirmButton_body);

    confirmButton.addEventListener('click', () => {
      modalObj.close(wrapper, dim);
    });

    return confirmButton;
  },
  getCancelButton: (wrapper, cancelButtonText, dim) => {
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
      modalObj.close(wrapper, dim);
    });

    return cancelButton;
  },
  createModalContainer: (hasChild) => {
    if (hasChild) {
      body.appendChild(modalContainer);
    }
  },
  removeModalContainer: (hasChild) => {
    if (!hasChild) {
      body.removeChild(modalContainer);
    }
  },
  getWrapper: () => {
    let wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    modalObj.assignModalId(wrapper);
    return wrapper;
  },
  getWrapper01: (header, main, wrapper, setting, dim) => {
    let wrapper01 = document.createElement('div');
    wrapper01.className = 'wrapper01';
    wrapper01.appendChild(header);
    wrapper01.appendChild(main);
    wrapper01.appendChild(
      modalObj.getButtonContainer(
        setting.confirmButton,
        setting.cancelButton,
        wrapper,
        dim
      )
    );

    return wrapper01;
  },
  getDim: (wrapper, isClosable) => {
    let dim = document.createElement('div');
    dim.className = 'dim';
    if (isClosable) {
      dim.addEventListener('click', () => {
        console.log('here');
        modalObj.close(wrapper, dim);
      });
    }

    return dim;
  },
};
