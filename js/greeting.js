const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const greetingWrapper = document.querySelector(".greeting-wrapper");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const h = new Date().getHours();
let greetingText = "";

switch (h) {
  case h < 12:
    greetingText = "Good Morning";
  case h >= 12 && h <= 16:
    greetingText = "Good Afternoon";
  case h > 21:
    greetingText = "Good Night";
  default:
    greetingText = "Hello";
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}
function paintGreetings(username) {
  greeting.innerText = `${greetingText}, ${username}`;
  greetingWrapper.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greeting
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
}
