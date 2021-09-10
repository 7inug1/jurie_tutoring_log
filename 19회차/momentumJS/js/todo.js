const toDoForm = document.querySelector('.todo-form');
const toDoInput = document.querySelector('.todo-form input');
const toDoList = document.querySelector('.todo-list');

const TODOS_KEY = 'todo';

let todos = [];

function handleToDoSubmit(event) {
  event.preventDefault();
  console.log();
}

toDoForm.addEventListener('submit', handleToDoSubmit);
