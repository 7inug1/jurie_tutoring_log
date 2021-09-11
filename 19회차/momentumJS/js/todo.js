const toDoForm = document.querySelector('.todo-form');
const toDoInput = document.querySelector('.todo-form input');
const toDoList = document.querySelector('.todo-list');

const TODOS_KEY = 'todo';

let todos = [];

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  // console.log(newToDo);
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
  const li = document.createElement('li');
  li.id = newToDo.id;
  const span = document.createElement('span');
  span.innerText = newToDo.text;

  const deleteButton = document.createElement('button');
  const editButton = document.createElement('button');
  deleteButton.innerText = '❌';
  editButton.innerText = '✏️';
  deleteButton.addEventListener('click', deleteToDo);
  editButton.addEventListener('click', editToDo);
  li.appendChild(span);
  li.appendChild(deleteButton);
  li.appendChild(editButton);
  toDoList.appendChild(li);
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteToDo(event) {
  if (confirm('Delete this ToDo?')) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
  }
}

function editToDo(event) {
  const vari = event.target.parentElement.childNodes[0];
  console.log(vari);
  vari.contentEditable = true;
}

// paintToDo(JSON.parse(localStorage.getItem('todo')));
toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  todos = parsedToDos;
  // toDos.forEach(paintToDo);
  parsedToDos.forEach(paintToDo);
}
