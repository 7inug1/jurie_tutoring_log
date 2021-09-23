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

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
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
  li.addEventListener('dblclick', clickEditToDoButton);
  buttonContainer.appendChild(editButton);
  buttonContainer.appendChild(deleteButton);
  li.appendChild(listItem);
  li.appendChild(buttonContainer);
  toDoList.appendChild(li);
}
// 1. 추가

function clickAddToDoButton() {
  if (toDoInput.required === true) {
    submitToDoForm();
  }
}

function submitToDoForm(event) {
  event.preventDefault();
  console.log('submitToDoForm');
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

// 2. 제거
function removeToDo(event) {
  if (confirm('Delete this ToDo?')) {
    const li = event.target.closest('li');
    li.remove();
    todos = todos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
  }
}

function clickEditToDoButton(event) {
  const li = event.target.closest('li');
  const listItem = li.querySelector('.list-item');
  const buttonContainer = li.querySelector('.button-container');
  const editButton = buttonContainer.querySelector('.edit-button');
  const deleteButton = buttonContainer.querySelector('.delete-button');

  editButton.classList.add(CLASSNAME_HIDDEN);
  deleteButton.classList.add(CLASSNAME_HIDDEN);

  originalToDo = listItem.innerText;

  // edit-input-container 아예 없을 때
  if (li.querySelector('.edit-input-container') === null) {
    // edit-related var declaration
    const editInputContainer = document.createElement('div');
    const editInputForm = document.createElement('form');
    editInputForm.className = 'edit-input-form';
    const editInput = document.createElement('input');
    // const editInputContainer = document.createElement('div');
    const submitButton = document.createElement('button');

    // editInput.addEventListener('blur', blur);

    // function blur(event) {
    //   console.log(event.target);
    //   closeInputField(event);
    //   editInput.removeEventListener('blur', blur);
    // }

    editInputContainer.className = 'edit-input-container';
    editInput.type = 'text';
    editInput.required = true;
    submitButton.className = 'submit-button';
    submitButton.type = 'submit';
    submitButton.innerText = '✔️';
    editInputContainer.appendChild(editInput);
    editInputForm.appendChild(editInputContainer);
    editInputForm.appendChild(submitButton);
    li.prepend(editInputForm);
    editInput.value = originalToDo;
    editInput.select();
    listItem.classList.add(CLASSNAME_HIDDEN);

    // buttonContainer.prepend(submitButton);

    submitButton.addEventListener('click', clickConfirmEditToDoButton);
    editInputForm.addEventListener('submit', submitConfirmEditToDo);
  } else {
    const editInputForm = li.querySelector('.edit-input-form');
    const editInputContainer = li.querySelector('.edit-input-container');
    const editInput = editInputContainer.querySelector('input');
    const buttonContainer = li.querySelector('.button-container');
    const submitButton = editInputForm.querySelector('.submit-button');
    editInputForm.classList.remove(CLASSNAME_HIDDEN);
    editInputContainer.querySelector('input').value = originalToDo;
    listItem.classList.add(CLASSNAME_HIDDEN);
    submitButton.classList.remove(CLASSNAME_HIDDEN);

    editInput.select();
    submitButton.addEventListener('click', clickConfirmEditToDoButton);
    editInputForm.addEventListener('submit', submitConfirmEditToDo);

    // editInput.addEventListener('blur', blur);

    // function blur(event) {
    //   console.log(event.target);
    //   closeInputField(event);
    //   editInput.removeEventListener('blur', blur);
    // }
  }
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeInputField(event);
    }
  });
}

function clickConfirmEditToDoButton(event) {
  console.log('clickConfirmEditToDoButton');
  const editInput = event.target
    .closest('li')
    .querySelector('.edit-input-form')
    .querySelector('.edit-input-container')
    .querySelector('input');
  if (editInput.required === true) {
    submitConfirmEditToDo(event);
  }
}

function closeInputField(event) {
  console.log('closeinputfield');
  event.preventDefault();
  const li = event.target.closest('li');
  const listItem = li.querySelector('.list-item');
  const editInputForm = li.querySelector('.edit-input-form');
  const editInputContainer = editInputForm.querySelector(
    'edit-input-container'
  );

  const buttonContainer = li.querySelector('.button-container');
  const submitButton = editInputForm.querySelector('.submit-button');
  const editButton = buttonContainer.querySelector('.edit-button');
  const deleteButton = buttonContainer.querySelector('.delete-button');

  editButton.classList.remove(CLASSNAME_HIDDEN);
  deleteButton.classList.remove(CLASSNAME_HIDDEN);
  submitButton.classList.add(CLASSNAME_HIDDEN);

  listItem.classList.remove(CLASSNAME_HIDDEN);
  editInputForm.classList.add(CLASSNAME_HIDDEN);
}

function submitConfirmEditToDo(event) {
  console.log('submitConfirmEditToDo');
  const li = event.target.closest('li');
  const listItem = li.querySelector('.list-item');
  const editInputForm = li.querySelector('.edit-input-form');
  const editInputContainer = editInputForm.querySelector(
    '.edit-input-container'
  );
  const editInput = editInputContainer.querySelector('input');

  closeInputField(event);

  if (editInput.value !== originalToDo) {
    console.log('editInput.value !== originalToDo');
    const textToReplace = editInput.value;
    const textToBeReplaced = listItem;
    textToBeReplaced.innerText = textToReplace;
    // 좀 더 깔끔히 만드는 법 있을지?
    todos.forEach((todo) => {
      if (todo.id == li.id) {
        todo.text = textToReplace;
      }
    });
    saveToDos();

    editInput.value = '';
  }
}
