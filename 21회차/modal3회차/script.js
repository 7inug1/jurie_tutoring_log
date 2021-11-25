let body = document.querySelector(".main-body");
let modals = document.querySelectorAll(".modal");
let modalContainer = document.createElement("div");
modalContainer.className = "modal-container";
let overflowHidden = "overflow-hidden";

// 화면에 있는 modal 클릭 시
window.addEventListener("click", (event) => {
  if (event.target.className === "modal") {
    console.log(event.target);
    let clonedModal = event.target.children[0].cloneNode(true);
    modalObj.clone(clonedModal);
  }
});

function getHeader(titleText) {
  let header = document.createElement("div");
  header.className = "header";
  let title = document.createElement("h1");
  title.className = "title01";
  title.innerHTML = `${titleText}`;

  header.appendChild(title);

  return header;
}

function getMain(content) {
  let main = document.createElement("div");
  main.className = "main01";
  main.innerHTML = content;

  return main;
}

function toggleBodyOverflow() {
  body.classList.contains(overflowHidden)
    ? body.classList.remove(overflowHidden)
    : body.classList.add(overflowHidden);
}

function getButtonContainer(confirmButtonText, cancelButtonText, wrapper, dim) {
  let buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";

  buttonContainer.appendChild(getConfirmButton(confirmButtonText));
  buttonContainer.appendChild(getCancelButton(wrapper, cancelButtonText, dim));

  return buttonContainer;
}

function getConfirmButton(confirmButtonText) {
  let confirmButton = document.createElement("button");
  confirmButton.className = "button01_head_orange";
  let confirmButton_tail = document.createElement("span");
  confirmButton_tail.className = "button01_tail";
  let confirmButton_body = document.createElement("span");
  confirmButton_body.className = "button01_body";
  confirmButton_body.innerHTML = `${confirmButtonText}`;

  confirmButton.appendChild(confirmButton_tail);
  confirmButton_tail.appendChild(confirmButton_body);

  return confirmButton;
}

function getCancelButton(wrapper, cancelButtonText, dim) {
  let cancelButton = document.createElement("button");
  cancelButton.className = "button01_head_white";
  let cancelButton_tail = document.createElement("span");
  cancelButton_tail.className = "button01_tail";
  let cancelButton_body = document.createElement("span");
  cancelButton_body.className = "button01_body";
  cancelButton_body.innerHTML = `${cancelButtonText}`;

  cancelButton.appendChild(cancelButton_tail);
  cancelButton_tail.appendChild(cancelButton_body);
  cancelButton.addEventListener("click", () => {
    closeModal(wrapper, dim);
  });

  return cancelButton;
}

function closeModal(wrapper, dim) {
  console.log("close modal");
  modalContainer.removeChild(wrapper);
  wrapper.removeChild(dim);

  toggleModalContainer(modalContainer.hasChildNodes());
  toggleBodyOverflow();
}

function toggleModalContainer(hasChild) {
  hasChild
    ? body.appendChild(modalContainer)
    : body.removeChild(modalContainer);
}

// modalFrame
function getWrapper() {
  let wrapper = document.createElement("div");
  wrapper.className = "wrapper";

  return wrapper;
}

function getWrapper01(header, main, wrapper, setting, dim) {
  let wrapper01 = document.createElement("div");
  wrapper01.className = "wrapper01";
  wrapper01.appendChild(header);
  wrapper01.appendChild(main);
  wrapper01.appendChild(
    getButtonContainer(
      setting.confirmButton,
      setting.cancelButton,
      wrapper,
      dim
    )
  );

  return wrapper01;
}

function getDim(wrapper, isClosable) {
  let dim = document.createElement("div");
  dim.className = "dim";
  if (isClosable) {
    dim.addEventListener("click", () => {
      closeModal(wrapper, dim);
    });
  }

  return dim;
}

//

const modalObj = {
  id: () => {
    let id = 0;
    let idStr = `id + ${id}`;
    i++;
    return idStr;
  },
  open: (setting) => {
    toggleBodyOverflow();
    toggleModalContainer(!body.contains(modalContainer));

    let header = getHeader(setting.title);
    let main = getMain(setting.content);
    let wrapper = getWrapper();
    let dim = getDim(wrapper, setting.dim);
    let wrapper01 = getWrapper01(header, main, wrapper, setting, dim);

    wrapper.appendChild(wrapper01);
    wrapper.appendChild(dim);
    modalContainer.appendChild(wrapper);
  },
  close: (wrapper, dim) => {
    modalContainer.removeChild(wrapper);
    wrapper.removeChild(dim);

    toggleModalContainer(modalContainer.hasChildNodes());
    toggleBodyOverflow();
  },
  clone: (clonedModal) => {
    console.log(this);
    toggleBodyOverflow();
    toggleModalContainer(!body.contains(modalContainer));

    let wrapper = getWrapper();
    let dim = getDim(wrapper, true);

    wrapper.appendChild(clonedModal);
    wrapper.appendChild(dim);
    modalContainer.appendChild(wrapper);
  },
};

let defaultSetting = {
  dim: true,
  title: "제목을 입력해주세요",
  content: `defaultSetting 대신 커스텀 세팅을 이용하시고 싶다면 다음의 형식으로 입력해주세요: <br><br>
  {<br>
    &nbspdim: Boolean,<br>
    &nbsptitle: String,<br> 
    &nbspcontent: String,<br>
    &nbspconfirmButton: String,<br>
    &nbspcancelButton: String<br>},<br>`,
  confirmButton: "확인",
  cancelButton: "취소",
};
