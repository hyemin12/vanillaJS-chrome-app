const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");
function onLoginSubmit(event) {
  event.preventDefault();
  console.log(event);
}

function handleLink(event) {
  event.preventDefault();
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLink);
