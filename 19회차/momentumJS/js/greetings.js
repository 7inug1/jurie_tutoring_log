const loginForm = document.querySelector('.login-form');
const loginInput = document.querySelector('.login-form input');
const loginButton = document.querySelector('.login-form button');

const greeting = document.querySelector('.greeting');
const HIDDEN_CLASSNAME = 'hidden';

const USERNAME_KEY = 'username';
const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  console.log(username);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  console.log('savedUsername' + savedUsername);
  console.log(localStorage.getItem(USERNAME_KEY));
  paintGreetings(localStorage.getItem(USERNAME_KEY));
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

function onLoginButtonClick() {
  console.dir(loginInput.value);
  console.log('clicked');
}
