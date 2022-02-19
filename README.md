# Login Page

## user 입력값 유효성 검사

```js
// app.js

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
function onLoginBtnClick() {
  const username = loginInput.value;
  if (username === "") {
    alert("Please write your name");
  } else if (username.length > 15) {
    alert("Your name is too long.");
  }
}
loginButton.addEventListener("click", onLoginBtnClick);
```

js 파일에서 코드 작성하지 않고 html에서 관리하기

- form태그 안에 input 태그를 작성하면, click 이벤트를 실행하지 않아도 자동으로 실행됨
- 또한 버튼을 클릭하거나 enter 버튼을 누르면 자동으로 form이 submit 됨
- required(필수 기재) / maxlength=""(최대 글자수) 등을 활용하면 굳이 js에서 여러줄의 코드를 작성하지 않아도 됨

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>바닐라JS</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <form id="login-form">
      <input
        required
        maxlength="15"
        type="text"
        placeholder="What is your name?"
      />
      <button>Log In</button>
    </form>
    <script src="./app.js"></script>
  </body>
</html>
```

### 새로고침하지 않고 user 정보 저장하기

```js
// app.js
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  const username = loginInput.value;
  // 브라우저의 기본동작이 발생하지 않도록 함
  event.preventDefault();
  console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);
```

> 모든 Event Function의 첫번째 argument은 지금 막 벌어진 일들에 대한 정보를 알려줌.

```js
function onLoginSubmit(event) {
  const username = loginInput.value;
  event.preventDefault();
  console.log(event);
}
```

| Parameter                 | Argument               |
| ------------------------- | ---------------------- |
| 매개변수                  | 전달인자(인자)         |
| 함수와 메서드 입력 변수명 | 함수와 메서드의 입력값 |
| Variable                  | Value                  |

## username 가져오기

```js
// app.js

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
```

- string + 변수 작성법

```js
const 방법1 = "string " + 변수명;
const 방법2 = `string ${변수명}`;
// 방법2는 `` backtick 기호 안에 작성해야함
```

- HIDDEN_CLASSNAME 대문자로 작성한 이유  
  string만 포함된 정보는 대문자로 작성하기도 함  
  중요한 데이터 X

## localStorage

https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage

문법

```js
// 저장하기
localStorage.setItem("key", value);

// 지우기
localStorage.removeItem("key");

// 확인하기
localStorage.getItem("key");
```
