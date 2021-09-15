const toDoForm = document.querySelector('.todo-form');
const toDoInput = document.querySelector('.todo-form input');
const toDoList = document.querySelector('.todo-list');
const addToDoButton = document.querySelector('.todo-button');

const TODOS_KEY = 'todo';
const savedToDos = localStorage.getItem(TODOS_KEY);
// const CLASSNAME_HIDDEN = 'hidden';

let originalToDo = '';

let todos = [];

addToDoButton.addEventListener('click', clickAddToDoButton);
toDoForm.addEventListener('submit', submitToDoForm);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  todos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

function clickAddToDoButton() {
  if (toDoInput.required === true) {
    submitToDoForm();
  }
}

function submitToDoForm(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';

  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };

  todos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function removeToDo(event) {
  if (confirm('Delete this ToDo?')) {
    const li = event.target.parentNode.parentElement;
    li.remove();
    todos = todos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
  }
}

function paintToDo(newToDo) {
  // for new item to add
  const listItem = document.createElement('div');
  const li = document.createElement('li');
  li.id = newToDo.id;
  listItem.className = 'list-item';
  listItem.innerText = newToDo.text;

  // var declaration
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'button-container';
  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.innerText = '❌';
  const editButton = document.createElement('button');
  editButton.className = 'edit-button';
  editButton.innerText = '✏️';

  deleteButton.addEventListener('click', removeToDo);
  editButton.addEventListener('click', clickEditToDoButton);

  buttonContainer.appendChild(editButton);
  buttonContainer.appendChild(deleteButton);
  li.appendChild(listItem);
  li.appendChild(buttonContainer);
  toDoList.appendChild(li);
}

// 수정 시작하기
function clickEditToDoButton(event) {
  const editButton = event.target;
  const deleteButton = editButton.nextSibling;
  editButton.classList.add(CLASSNAME_HIDDEN);
  deleteButton.classList.add(CLASSNAME_HIDDEN);

  const buttonContainer = event.target.parentElement;
  const li = event.target.parentNode.parentElement;
  const listItem = li.querySelector('.list-item');
  originalToDo = listItem.innerText;
  // console.log(li.querySelector('.edit-input-container'));

  // edit-input-container 아예 없을 때
  if (li.querySelector('.edit-input-container') === null) {
    // edit-related var declaration
    const editInputForm = document.createElement('form');
    editInputForm.className = 'edit-input-form';
    const editInputContainer = document.createElement('div');
    const editInput = document.createElement('input');
    const confirmButton = document.createElement('button');

    editInputContainer.className = 'edit-input-container';
    editInput.type = 'text';
    editInput.required = true;
    confirmButton.className = 'confirm-button';
    confirmButton.type = 'submit';
    confirmButton.innerText = '✔️';
    editInputContainer.appendChild(editInput);
    editInputForm.appendChild(editInputContainer);
    li.prepend(editInputForm);
    //
    editInput.value = originalToDo;
    listItem.classList.add(CLASSNAME_HIDDEN);

    buttonContainer.prepend(confirmButton);

    confirmButton.addEventListener('click', clickConfirmEditToDoButton);
    editInputForm.addEventListener('submit', submitConfirmEditToDo);
    // confirmButton.addEventListener('click', () => {
    //   if (editInput.value !== originalToDo) {
    //   confirmButton.addEventListener('click', submitConfirmEditToDo);
    // } else {
    //   console.log('not changed');
    // }
    // })
  } else {
    const editInputForm = li.querySelector('.edit-input-form');
    const editInputContainer = li.querySelector('.edit-input-container');
    const editInput = editInputContainer.querySelector('input');
    const buttonContainer = li.querySelector('.button-container');
    const confirmButton = buttonContainer.querySelector('.confirm-button');
    editInputForm.classList.remove(CLASSNAME_HIDDEN);
    editInputContainer.querySelector('input').value = originalToDo;
    listItem.classList.add(CLASSNAME_HIDDEN);
    confirmButton.classList.remove(CLASSNAME_HIDDEN);

    // console.log(editInput.value);
    confirmButton.addEventListener('click', clickConfirmEditToDoButton);
    editInputForm.addEventListener('submit', submitConfirmEditToDo);
    // confirmButton.addEventListener('click', () => {
    //   if (editInput.value !== originalToDo) {
    //   submitConfirmEditToDo();
    // } else {
    //   console.log('not changed');
    // }
    // })
  }
}

function clickConfirmEditToDoButton() {
  console.log(
    event.target.parentNode.parentElement
      .querySelector('.edit-input-form')
      .querySelector('.edit-input-container')
      .querySelector('input')
  );
  const editInput = event.target.parentNode.parentElement
    .querySelector('.edit-input-form')
    .querySelector('.edit-input-container')
    .querySelector('input');
  if (editInput.required === true) {
    submitConfirmEditToDo();
  }
}

// function enterEditInput() {
//   if (event.keyCode === 13) {
//     console.log('enter');
//     submitConfirmEditToDo();
//   }
// }

function submitConfirmEditToDo() {
  event.preventDefault();
  const li = event.target.parentNode.parentElement;
  const listItem = li.querySelector('.list-item');
  const editInputForm = li.querySelector('.edit-input-form');
  const editInputContainer = li.querySelector('.edit-input-container');
  const editInput = editInputContainer.querySelector('input');
  const buttonContainer = event.target.parentElement;
  const confirmButton = event.target;
  const editButton = buttonContainer.querySelector('.edit-button');
  const deleteButton = buttonContainer.querySelector('.delete-button');

  console.log(listItem);
  editButton.classList.remove(CLASSNAME_HIDDEN);
  deleteButton.classList.remove(CLASSNAME_HIDDEN);
  confirmButton.classList.add(CLASSNAME_HIDDEN);

  listItem.classList.remove(CLASSNAME_HIDDEN);
  editInputForm.classList.add(CLASSNAME_HIDDEN);

  if (editInput.value !== originalToDo) {
    const textToReplace = editInput.value;
    const textToBeReplaced = listItem;
    textToBeReplaced.innerText = textToReplace;

    // 좀 더 깔끔히 만드는 법 있을지?
    todos.forEach((todo) => {
      // console.log(todo.id);
      if (todo.id == li.id) {
        todo.text = textToBeReplaced.innerText;
      }
    });
    saveToDos();

    editInput.value = '';
  }
}
