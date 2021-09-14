const toDoForm = document.querySelector('.todo-form');
const toDoInput = document.querySelector('.todo-form input');
const toDoList = document.querySelector('.todo-list');
const toDoButton = document.querySelector('.todo-button');

const TODOS_KEY = 'todo';

let todos = [];
// let localStorageTodos = JSON.parse(localStorage.getItem('todo'));

toDoButton.addEventListener('click', onToDoButtonClick);

function onToDoButtonClick() {
  if (toDoInput.required === true) {
    handleToDoSubmit();
  }
}

function handleToDoSubmit(event) {
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

function paintToDo(newToDo) {
  const listItem = document.createElement('div');
  const li = document.createElement('li');
  li.id = newToDo.id;
  listItem.className = 'list-item';
  listItem.innerText = newToDo.text;

  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'button-container';
  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  const editButton = document.createElement('button');
  editButton.className = 'edit-button';
  deleteButton.innerText = '❌';
  editButton.innerText = '✏️';
  deleteButton.addEventListener('click', deleteToDo);
  editButton.addEventListener('click', editToDo);
  li.appendChild(listItem);
  li.appendChild(buttonContainer);
  buttonContainer.appendChild(deleteButton);
  buttonContainer.appendChild(editButton);
  toDoList.appendChild(li);
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteToDo(event) {
  if (confirm('Delete this ToDo?')) {
    const li = event.target.parentNode.parentElement;
    li.remove();
    todos = todos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
  }
}

function editToDo(event) {
  // console.log(event.target);
  const buttonContainer = event.target.parentElement;
  const li = event.target.parentNode.parentElement;

  // if there is no input-container yet
  if (buttonContainer.nextSibling === null) {
    const editInputContainer = document.createElement('div');
    editInputContainer.className = 'edit-input-container';
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInputContainer.appendChild(editInput);
    li.appendChild(editInputContainer);

    const editConfirmButton = document.createElement('button');
    editConfirmButton.innerText = '✔️';
    buttonContainer.appendChild(editConfirmButton);

    editConfirmButton.addEventListener('click', () => {
      const textToReplace = editInput.value;
      console.log(textToReplace);
      // console.log(li.querySelector('.list-item'));
      const textToBeReplaced = li.querySelector('.list-item');
      textToBeReplaced.innerText = textToReplace;

      console.log(li.id);
      console.log(textToBeReplaced.innerText);

      todos.forEach((todo) => {
        console.log(todo.id);
        if (todo.id == li.id) {
          todo.text = textToBeReplaced.innerText;
        }
      });
      saveToDos();

      // JSON.parse(localStorage.getItem('todo')).forEach((item) => {
      //   if (item.id === li.id) {
      //     todos.forEach((todo) => {
      //       todo.text = textToBeReplaced;
      //     });
      //   }
      // });

      editInput.value = '';
    });
  }
}

function callBackFunction(event) {
  console.log(event.target);
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  todos = parsedToDos;
  // toDos.forEach(paintToDo);
  parsedToDos.forEach(paintToDo);
}
