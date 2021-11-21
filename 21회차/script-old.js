// main에 들어갈 것 제외하곤 큰 틀은 한 function에 몰아 넣기
// content01~03, input-container 등 필요한 것 어떻게 나눌지 고민하기

let id = 0;

let modalOne = document.querySelector('.modal-one');
let modalThree = document.querySelector('.modal-three');
let modalFour = document.querySelector('.modal-four');
let modalFive = document.querySelector('.modal-five');
let modalSix = document.querySelector('.modal-six');

// modalOne.addEventListener('click', () => {
//   makeModal('캠페인 새로 만들기', '확인', null, 'content03');
// });
modalOne.addEventListener('click', () => {
  makeModal(
    '캠페인 새로 만들기',
    '확인',
    null,
    'content03',
    getContent03('헤더', '불렛', '대쉬제목: ', '대쉬내용'),
    getContent03('헤더2', '불렛2', '대쉬제목:2 ', '대쉬내용2'),
    getInput04Container('1234', '4321'),
    getWarning(
      '환불계좌 수정은 My 기프티콘 >',
      ' 회원가입정보',
      '에서 수정 가능 합니다.'
    ),
    getWarning(
      '환불계좌 수정은 My 기프티콘 >',
      ' 회원가입정보',
      '에서 수정 가능 합니다.'
    ),
    getTable('환불금액 표', '환불 금액', '8,300원')
  );
});
modalThree.addEventListener('click', () => {
  makeModal(
    '상품발송하기 도움말',
    '확인',
    null,
    'content02',
    getContent02(
      '기프티콘 쿠폰 교환',
      ' 유효기간 내에 1회 번호변경',
      ' 추가글자 작성하였습니다.'
    ),
    getContent02('기프티콘 쿠폰 교환', ' 유효기간 내에 1회 번호변경')
  );
});
modalFour.addEventListener('click', () => {
  makeModal(
    '번호변경 재발송',
    '확인',
    null,
    getContent02('기프티콘 쿠폰 교환', ' 유효기간 내에 1회 번호변경')
  );
});
modalFive.addEventListener('click', () => {
  makeModal(
    '환불 받을 계좌 정보 확인',
    '환불요청',
    '취소',
    getContent02('기프티콘 쿠폰 교환', ' 유효기간 내에 1회 번호변경')
  );
});
modalSix.addEventListener('click', () => {
  makeModal(
    '재발송/번호변경 재발송/발송취소 도움말',
    '확인',
    null,
    getContent03('헤더', '불렛', '대쉬제목: ', '대쉬내용')
  );
});

let body = document.querySelector('body');

function makeModal(
  titleText,
  confirmButtonText,
  cancelButtonText,
  contentTypeText,
  ...callbackFunctions
) {
  let wrapper = getWrapper();
  let popupWrapper = getPopupWrapper();
  let main = getMain();
  let contentType = getContentType(contentTypeText);
  let dim = getDim(wrapper);
  popupWrapper.appendChild(getHeader(titleText));
  console.log(callbackFunctions);
  // contentType.appendChild(
  callbackFunctions.forEach((callbackFunctionOutput) => {
    contentType.appendChild(callbackFunctionOutput);
  });
  // );
  main.appendChild(contentType);
  popupWrapper.appendChild(main);
  popupWrapper.appendChild(
    getButtonContainer(wrapper, confirmButtonText, cancelButtonText)
  );
  popupWrapper.appendChild(getCloseButton(wrapper));
  wrapper.appendChild(popupWrapper);
  wrapper.appendChild(dim);
  body.appendChild(wrapper);
}

function getWrapper() {
  let wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  wrapper.id = id;
  id++;
  return wrapper;
}
function getDim(wrapper) {
  let dim = document.createElement('div');
  dim.className = 'dim';
  dim.addEventListener('click', () => {
    closeModal(wrapper);
  });
  return dim;
}
function closeModal(wrapper) {
  body.removeChild(wrapper);
  console.log('dim click');
}
function getPopupWrapper() {
  let popupWrapper = document.createElement('div');
  popupWrapper.className = 'wrapper01';
  return popupWrapper;
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

function getContentType(contentTypeText) {
  let ul = document.createElement('ul');
  if (contentTypeText === 'content02') {
    ul.className = 'content02 content02_v1';
  }
  if (contentTypeText === 'content03') {
    ul.className = 'content03';
  }
  return ul;
}

function getMain(callbackFunction) {
  let main = document.createElement('div');
  main.className = 'main01';
  // main.appendChild(callbackFunction);

  return main;
}

function getContent02(normalText, strongText, normalText2) {
  // let ul = document.createElement('ul');
  let ul_li = document.createElement('li');
  // ul_li.className = 'content02';

  let p = document.createElement('p');
  let span1 = document.createElement('span');
  let strong = document.createElement('strong');

  span1.innerText = `${normalText}`;
  strong.innerText = `${strongText}`;
  p.appendChild(span1);
  p.appendChild(strong);
  // console.log(p.innerText);
  if (normalText2) {
    let span2 = document.createElement('span');
    span2.innerText = `${normalText2}`;
    p.appendChild(span2);
  }
  ul_li.appendChild(p);
  // ul.appendChild(ul_li);
  return ul_li;
}

function getContent03(
  headerText,
  bulletContentText,
  dashTitleText,
  dashContentText
) {
  // let ul = document.createElement('ul');
  let ul_li = document.createElement('li');
  let ul_li_title = document.createElement('h2');

  let ul_li_ul = document.createElement('ul');
  let ul_li_ul_li = document.createElement('li');
  let ul_li_ul_li_p = document.createElement('p');

  let dashContainer = document.createElement('ul');
  let dashContainer_li = document.createElement('li');
  let dashTitle = document.createElement('h2');
  let dashContentFirst = document.createElement('p');

  // ul.className = 'content03';
  ul_li_title.className = 'content03_title';
  ul_li_title.innerText = `${headerText}`;

  ul_li_ul.className = 'content03_content-container';
  ul_li_ul_li.className = 'content03_content';
  ul_li_ul_li_p.className = 'content';
  ul_li_ul_li_p.innerText = `${bulletContentText}`;
  // '캠페인은 고객님이 원하시는 발송 형태에 따라 3가지 중 선택할 수 있습니다.';

  dashContainer.className = 'dash-container';
  dashContainer_li.className = 'content03_subcontent';
  dashTitle.className = 'dash-title';
  dashTitle.innerText = `${dashTitleText}`;
  dashContentFirst.className = 'dash-content_first';
  dashContentFirst.innerText = `${dashContentText}`;
  dashContainer_li.appendChild(dashTitle);
  dashContainer_li.appendChild(dashContentFirst);
  dashContainer.appendChild(dashContainer_li);
  ul_li_ul_li.appendChild(ul_li_ul_li_p);
  ul_li_ul_li.appendChild(dashContainer);
  ul_li_ul.appendChild(ul_li_ul_li);
  ul_li.appendChild(ul_li_title);
  ul_li.appendChild(ul_li_ul);
  // ul.appendChild(ul_li);
  return ul_li;
}

function getInput04Container(numberBefore, numberAfter) {
  let inputSection = document.createElement('div');
  inputSection.className = 'input-section';
  let inputContainer = document.createElement('div');
  inputContainer.className = 'input-container';
  let input04beforeWrapper = document.createElement('div');
  let input04afterWrapper = document.createElement('div');
  input04beforeWrapper.className = 'input04 before';
  input04afterWrapper.className = 'input04 after';
  let input04before = document.createElement('input');
  let input04after = document.createElement('input');
  input04before.type = 'text';
  input04before.value = `${numberBefore}`;
  input04before.readOnly = true;
  input04after.type = 'text';
  input04after.value = `${numberAfter}`;
  input04after.readOnly = true;
  input04beforeWrapper.appendChild(input04before);
  input04afterWrapper.appendChild(input04after);
  inputContainer.appendChild(input04beforeWrapper);
  inputContainer.appendChild(input04afterWrapper);
  inputSection.appendChild(inputContainer);
  return inputSection;
}

function getWarning(normalText, strongText, normalText2) {
  let warningContainer = document.createElement('div');
  warningContainer.className = 'warning-container';
  let warning = document.createElement('p');
  let span1 = document.createElement('span');
  let orangeFont = document.createElement('strong');
  let span2 = document.createElement('span');

  warning.className = 'whitespace-remover';
  span1.innerText = `${normalText}`;
  orangeFont.className = 'orange-font font-weight-remover';
  orangeFont.innerText = `${strongText}`;
  warning.appendChild(span1);
  warning.appendChild(orangeFont);
  if (normalText2) {
    let span2 = document.createElement('span');
    span2.innerText = `${normalText2}`;
    warning.appendChild(span2);
  }
  warningContainer.appendChild(warning);
  return warningContainer;
}

function getTable(captionText, THtext, TDtext) {
  let tableContainer = document.createElement('div');
  tableContainer.className = 'table-container';
  let table03 = document.createElement('div');
  table03.className = 'table03';
  let table = document.createElement('table');
  let caption = document.createElement('caption');
  caption.hidden = true;
  caption.innerText = `${captionText}`;
  let tbody = document.createElement('tbody');
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.innerText = `${THtext}`;
  th.scope = 'row';
  let td = document.createElement('td');
  td.innerText = `${TDtext}`;
  tbody.appendChild(tr);
  tbody.appendChild(tr);
  table.appendChild(caption);
  table.appendChild(tbody);
  table03.appendChild(table);
  tableContainer.appendChild(table03);

  tr.appendChild(th);
  tr.appendChild(td);
  return tableContainer;
}

function getButtonContainer(wrapper, confirmButtonText, cancelButtonText) {
  let buttonContainer = document.createElement('div');
  buttonContainer.className = 'button-container';

  buttonContainer.appendChild(getConfirmButton(confirmButtonText));
  if (cancelButtonText !== null) {
    buttonContainer.appendChild(getCancelButton(wrapper, cancelButtonText));
  }

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

function closeModal(wrapper) {
  body.removeChild(wrapper);
}
// popupWrapper, header, body 구조 다 짜고 창으로 띄워보기.
