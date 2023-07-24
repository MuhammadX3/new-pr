// let element = document.getElementById("tagged");
// element.style.color = "tan";

let fruits = document.getElementsByName("fruits");
fruits.forEach((fruit) => {
  if (fruit.checked) {
    console.log(fruit.value);
  }
});

let vegs = document.getElementsByTagName("li");
vegs[1].style.color = "lightgreen";

let desert = document.getElementsByClassName("desert");
console.log(desert[1]);

let ment = document.querySelector("#mil");
ment.style.color = "coral";

const tagName = document.createElement("p");
tagName.textContent = "binski";
document.body.append(tagName);

tagName.style.backgroundColor = "#222222";
tagName.style.color = "rgb(50, 200, 240)";
tagName.style.textAlign = "center";
tagName.style.border = "2px solid";
tagName.style.width = "100px";
// tagName.style.display = "none";

const elem = document.getElementById("btn");
elem.onclick = dosmth;

function dosmth() {
  alert("idk what im in 2");
}

const innerDiv = document.getElementById("innerDiv");

innerDiv.addEventListener("mouseover", changeBlue);
innerDiv.addEventListener("mouseout", changeRed);

function changeBlue() {
  innerDiv.style.backgroundColor = "red";
  innerDiv.style.height = "100px";
  innerDiv.style.width = "100px";
}

function changeRed() {
  innerDiv.style.backgroundColor = "lightblue";
  innerDiv.style.height = "100px";
  innerDiv.style.width = "100px";
}

// Detect Key press

const myDiv = document.getElementById("myDiv");
window.addEventListener("keydown", move);

let x = 0;
let y = 0;

function move(event) {
  switch (event.key) {
    case "ArrowDown":
      y += 5;
      myDiv.style.top = y + "px";
      break;
    case "ArrowUp":
      y -= 5;
      myDiv.style.top = y + "px";
      break;
    case "ArrowLeft":
      x -= 5;
      myDiv.style.left = x + "px";
      break;
    case "ArrowRight":
      x += 5;
      myDiv.style.left = x + "px";
      break;
    default:
      break;
  }
}

// cookie

setCookie("firstName", "Jakie", 9252);
setCookie("lastName", "dk", 9152);

console.log(getCookie("firstName"));

function setCookie(name, value, days2Live) {
  const date = new Date();
  date.setTime(date.getTime() + days2Live * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function getCookie(name) {
  const cDecoded = decodeURIComponent(document.cookie);
  const cArray = cDecoded.split("; ");
  let result = null;

  cArray.forEach((element) => {
    if (element.indexOf(name) == 0) {
      result = element.substring(name.length + 1);
    }
  });
  return result;
}

// const firstText = document.getElementById("firstText");
// const lastTest = document.getElementById("lastText");
// const submitBtn = document.getElementById("submitBtn");
// const cookieBtn = document.getElementById("cookieBtn");

// submitBtn.addEventListener("click", () => {});

const timerDisplay = document.getElementById("timeDisplay");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
  if (paused) {
    paused = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 1000);
  }
});
pauseBtn.addEventListener("click", () => {
  if (!paused) {
    paused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(intervalId);
  }
});
resetBtn.addEventListener("click", () => {
  paused = true;
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime = 0;
  currentTime = 0;
  hrs = 0;
  mins = 0;
  secs = 0;
  timerDisplay.textContent = "00:00:00";
});

function updateTime() {
  elapsedTime = Date.now() - startTime;

  secs = Math.floor((elapsedTime / 1000) % 60);
  hrs = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

  secs = pad(secs);
  mins = pad(mins);
  hrs = pad(hrs);

  timerDisplay.textContent = `${hrs}:${mins}:${secs}`;

  function pad(unit) {
    return ("0" + unit).length > 2 ? unit : "0" + unit;
  }
}

const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const resultText = document.getElementById("resultText");
const choiseBtns = document.querySelectorAll(".choiseBtn");
let player;
let computer;
let result;

choiseBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
  })
);

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSORS";
      break;
  }
}

function checkWinner() {
  if (player == computer) {
    return "Its a draw";
  } else if (computer == "ROCK") {
    return player == "PAPER" ? "You Win!" : "You Lose!";
  } else if (computer == "PAPER") {
    return player == "SCISSORS" ? "You Win!" : "You Lose!";
  } else if (computer == "SCISSORS") {
    return player == "ROCK" ? "You Win!" : "You Lose!";
  }
}
