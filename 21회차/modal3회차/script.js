let body = document.querySelector(".main-body");
let modals = document.querySelectorAll(".modal");
let modalContainer = document.createElement("div");
modalContainer.className = "modal-container";
let overflowHidden = "overflow-hidden";

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

let modalObj = {
  id: () => {
    let id = 0;
    let idStr = `id + ${id}`;
    i++;
    return idStr;
  },
  open: () => {
    let wrapper = document.createElement("div");
    wrapper.className = "wrapper";

    let wrapper01 = document.createElement("div");
    wrapper01.className = "wrapper01";
    let header = getHeader(defaultSetting.title);

    let main = getMain(defaultSetting.content);

    let dim = document.createElement("div");
    dim.className = "dim";

    let buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";

    // if (setting.dim) {
    //   dim.addEventListener('click', () => {
    //     closeModal(wrapper);
    //   });
    // }

    if (!body.contains(modalContainer)) {
      body.appendChild(modalContainer);
    }

    wrapper01.appendChild(header);
    wrapper01.appendChild(main);
    // wrapper01.appendChild(main);
    // if (setting.button === undefined) {
    //   wrapper01.appendChild(getButtonContainer("확인"));
    // } else {
    //   wrapper01.appendChild(getButtonContainer(setting.button));
    // }

    wrapper.appendChild(wrapper01);
    wrapper.appendChild(dim);
    modalContainer.appendChild(wrapper);
  },
  close: () => {},
};

let defaultSetting = {
  dim: true,
  title: "제목을 입력해주세요",
  content: "내용을 입력해주세요",
  confirmButton: "확인",
  cancelButton: "취소",
};

modals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    modal = modalObj;
    // onModalClick(modal, {});
    console.log(modal.id);
  });
});
