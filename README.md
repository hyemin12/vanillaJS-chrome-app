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

# 시계 만들기

## | setInterval()

특정한 시간마다 함수를 실행시키기

```js
setInterval(함수, 시간);
```

## | setTimeout()

특정한 시간이 지나고 함수를 실행시킴

```js
setTimeout(함수, 시간);
```

> 시간의 단위는 ms

### | .get\_\_\_\_() 로 날짜시간 정보 가져오기

<br>
관련 웹사이트
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate

<br>

| 매소드          | 내용                                      |
| --------------- | ----------------------------------------- |
| new Date()      | 오늘 날짜 정보 가져오기                   |
| .getFullYearr() | 년도 가져오기                             |
| .getMonth()     | 월 가져오기                               |
| .getDate()      | 날짜 가져오기                             |
| .getDay         | 요일 가져오기 (0,1,2,3,4,5,6 으로 출력됨) |
| .getHours()     | 시간가져오기                              |
| .getMinutes()   | 분 가져오기                               |
| .getSeconds()   | 초 가져오기                               |

## | padStart()

string에 쓸 수 있는 함수  
string의 길이를 n으로 만드는데 길이가 n이 아니면 앞에 "string"을 추가하여 길이 맞추기

```js
"string".padStart(길이, "추가할 문자");

// Eg.
// 문자열 1의 길이가 2가 아니면 앞에 0을 추가해 길이를 2로 만들어줌
// 출력: 01
"1".padStart(2, "0");
```

# random한 정수 가져오기

| Math 모듈 | 내용                                |
| --------- | ----------------------------------- |
| .random() | 0 ~ 1 사이의 랜덤한 숫자 생성(소수) |
| .round()  | 반올림                              |
| .ceil()   | 올림                                |
| .floor()  | 내림                                |

> random() 은 소수(float)를 받기때문에 소수를 반올림하거나 올림하거나 내려서 정수로 만들어야함

```js
// Eg.
// random() 으로 생성되는 float에 10을 곱해서 정수로 만들고, floor 함수로 소수점은 내림 처리
Math.floor(Math.random() * 10);
```

> array의 갯수 알아내기 : array명.length

# todo

## | todo setup

```js
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function handleToDoSubmit(event) {
  // submit할 때 새로고침 중지
  event.preventDefault();
  // 새로운 변수에 입력된 값을 저장
  const newTodo = toDoInput.value;
  // input.value는 reset
  toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);
```

## | todo 추가하기

fuction paintToDo(){} <- 안에 작성할때마다 todo가 추가되도록 하는 함수
1, li 태그를 만들어서 li로 저장  
2, span 태그를 만들어서 span으로 저장  
3, button 태그를 만들어서 btn으로 저장  
4, li 안에 span 태그와 button이 들어가도록 설정 (.appendChild 이용)

```html
<li>
  <span></span>
  <button></button>
</li>
```

5, span 태그 안에 새롭게 작성된 input 값 저장  
6, li 태그 html로 밀어넣기  
7, todo Form을 submit하는 함수에 가서 작성한 함수 실행시키기

전체 코드

```js
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list");

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");
  btn.innerText = "❌";
  li.appendChild(span);
  li.appendChild(btn);
  span.innerText = newTodo;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
```

### | todo list 삭제

1,paintToDo(){} <- 함수에 btn을 클릭했을 때 event가 실행되는 코드 추가하기

```js
function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");
  btn.innerText = "❌";
  // addEventListener("click", 실행할 함수)
  btn.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(btn);
  span.innerText = newTodo;
  toDoList.appendChild(li);
}
```

2, btn을 클릭했을 때 지워지는 event 함수 만들기  
** 클릭된 element를 확인하기 위해 부모 Element 확인하기
\_\_** event.target.parentElement
\_\_ event.target.parentElement.innerText : 부모Element가 가지고 있는 text 내용 확인

```js
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}
```

전체코드

```js
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list");

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(btn);
  span.innerText = newTodo;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
```

### | todo list 저장하기 (localStorage)

localStorage.setItem()을 사용하여 todo 저장하기
1* 작성된 투두리스트를 담을 배열 생성
2* 투두를 저장하는 함수 생성

```js
const toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}
```

> local storage는 array로 저장해주지 않고 text로만 저장해주기 때문에,  
> array로 저장하고 싶다면 JSON.stringify()를 이용해야함.  
> JSON.stringigy() : array 혹은 자바스크립트 등 모든 것들은 string(문자열)로 변환시킴

3, todo Form을 submit하는 함수에 가서 작성한 함수 실행시키기

```js
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}
```

전체코드

```js
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list");
const toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(btn);
  span.innerText = newTodo;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
```

## todo list 가져오기 (localStorage)

1, JSON.parse()를 통해서 문자열을 자바스크립트가 이해할 수 있는 array로 변환  
2, toDos가 새로고침할 때 새로운 배열을 반환하는 것이 아니라, parsedToDos가 저장된 배열의 형태로 반환되도록 하기  
3, parsedToDos에 있는 각각의 아이템을 painToDo(todo리스트 만드는 함수)를 이용해서 html에 뿌리기

```js
let toDos = [];

const savedToDos = localStorage.getItem(TODOS_KEY, toDos);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
```

> JSON.stringify( ) / JSON.parse()

```js
// local storage에 저장할 때는 JSON.stringify()
// "["a","b","c","d","e","f","g"]"
const toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

// local storage에서 [] array 형태로 변환할 때는 JSON.parse()
// ["a","b","c","d","e","f","g"]
const parsedToDos = JSON.parse(savedToDos);
console.log(parsedToDos);
```

## todo list 삭제하기 (local host)

1, todo에 각각의 고유 id를 부여하여, 해당 id 삭제하기
2, .filter(함수)를 사용하여 삭제하기

```js
function deleteToDo(event) {
  const li = event.target.parentElement;
  // toDos에 있는 id들과 클릭된 li.id가 같지 않은 것만 삭제
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
}
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", deleteToDo);
  span.innerText = newTodo.text;
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  // newToDoobj 값이 아닌 id, text를 둘 다 가지는 object
  const newToDoObj = { id: Date.now(), text: newTodo };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}
```

> .filter() : 지우고싶은 item을 빼고 다시 [] 을 만듬
> true의 값은 유지하고 false인 값은 지움

<hr>

> .parseInt : 문자열을 숫자로 변경  
> id = number고, li.id는 문자이기 때문에 parseInt로 변환해야함
