const toDoForm = document.querySelector('.todo-form');
const toDoInput = document.querySelector('.todo-form input');
const toDoList = document.querySelector('.todo-list');
const toDoButton = document.querySelector('.todo-button');

const TODOS_KEY = 'todo';
const savedToDos = localStorage.getItem(TODOS_KEY);
// const CLASSNAME_HIDDEN = 'hidden';

let todos = [];

toDoButton.addEventListener('click', onToDoButtonClick);
toDoForm.addEventListener('submit', handleToDoSubmit);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  todos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

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
  console.log('paintToDo');
  const listItem = document.createElement('div');
  const li = document.createElement('li');
  li.id = newToDo.id;
  listItem.className = 'list-item';
  listItem.innerText = newToDo.text;

  const buttonContainer = document.createElement('div');
  const deleteButton = document.createElement('button');
  const editButton = document.createElement('button');
  buttonContainer.className = 'button-container';
  deleteButton.className = 'delete-button';
  editButton.className = 'edit-button';
  editButton.innerText = '✏️';
  deleteButton.innerText = '❌';

  deleteButton.addEventListener('click', deleteToDo);
  editButton.addEventListener('click', editToDo);

  buttonContainer.appendChild(editButton);
  buttonContainer.appendChild(deleteButton);
  li.appendChild(listItem);
  li.appendChild(buttonContainer);
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
  const editButton = event.target;
  const deleteButton = editButton.nextSibling;
  const buttonContainer = event.target.parentElement;
  const li = event.target.parentNode.parentElement;
  const listItem = li.querySelector('.list-item');
  // editButton.classlist.add(CLASSNAME_HIDDEN);
  // deleteButton.classlist.add(CLASSNAME_HIDDEN);
  editButton.style.display = 'none';
  deleteButton.style.display = 'none';

  // if there is no input-container yet
  if (buttonContainer.nextSibling === null) {
    const editInputContainer = document.createElement('div');
    const editInput = document.createElement('input');
    const confirmButton = document.createElement('button');
    editInput.type = 'text';
    editInputContainer.className = 'edit-input-container';
    editInputContainer.appendChild(editInput);
    listItem.style.display = 'none';
    // listItem.classlist.add(CLASSNAME_HIDDEN);
    editInput.value = listItem.innerText;
    li.prepend(editInputContainer);

    confirmButton.className = 'confirm-button';
    confirmButton.innerText = '✔️';
    buttonContainer.prepend(confirmButton);

    confirmButton.addEventListener('click', () => {
      // editButton.classlist.remove(CLASSNAME_HIDDEN);
      // deleteButton.classlist.remove(CLASSNAME_HIDDEN);
      // confirmButton.classlist.add(CLASSNAME_HIDDEN);
      // listItem.classlist.remove(CLASSNAME_HIDDEN);
      // editInputContainer.classlist.add(CLASSNAME_HIDDEN);

      editButton.style.display = 'inline-block';
      deleteButton.style.display = 'inline-block';
      confirmButton.style.display = 'none';

      listItem.style.display = 'block';
      editInputContainer.style.display = 'none';

      const textToReplace = editInput.value;
      const textToBeReplaced = listItem;
      textToBeReplaced.innerText = textToReplace;

      // console.log(li.id);
      // console.log(textToBeReplaced.innerText);

      todos.forEach((todo) => {
        console.log(todo.id);
        if (todo.id == li.id) {
          todo.text = textToBeReplaced.innerText;
        }
      });
      saveToDos();

      editInput.value = '';
    });
  }
}
