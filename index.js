const icon = document.querySelectorAll(".icon");
const sierbar = document.querySelector(".sierbar");
const right = document.querySelector(".icon-card-right");
const left = document.querySelector(".icon-card-left");
const img = document.querySelectorAll(".car-img");
let count = 0;
let flag = true;
icon.forEach((item) =>
  item.addEventListener("click", () => {
    sierbar.classList.toggle("sierbar-none");
    if (flag) {
      flag = false;
      document.body.style.background = "rgb(237, 235, 232)";
    } else {
      flag = true;
      document.body.style.background = "";
    }
  })
);
right.addEventListener("click", () => {
  if (count == 2) {
    img[count].classList.toggle("card-none");
    count = 0;
    img[count].classList.toggle("card-none");
  } else {
    img[count].classList.toggle("card-none");
    count++;
    img[count].classList.toggle("card-none");
  }
});
left.addEventListener("click", () => {
  if (count == 0) {
    img[count].classList.toggle("card-none");
    count = 2;
    img[count].classList.toggle("card-none");
  } else {
    img[count].classList.toggle("card-none");
    count--;
    img[count].classList.toggle("card-none");
  }
});
//card animtion
const cars = document.querySelectorAll(".car-children");
const leftAnimtaion = document.querySelector(".icon-card-left-anmition");
const rightAnimtaion = document.querySelector(".icon-card-right-anmition");
let countCasrs = 0;
rightAnimtaion.addEventListener("click", () => {
  if (countCasrs === 4) {
    cars[countCasrs].classList.add("card-cars-animation");
    setTimeout(() => {
      cars[countCasrs].classList.remove("card-cars-animation");
      cars[countCasrs].classList.add("card-none");
      countCasrs = 0;
      cars[countCasrs].classList.toggle("card-none");
    }, 1000);
  } else {
    cars[countCasrs].classList.add("card-cars-animation");
    setTimeout(() => {
      cars[countCasrs].classList.remove("card-cars-animation");
      cars[countCasrs].classList.add("card-none");
      countCasrs++;
      cars[countCasrs].classList.toggle("card-none");
    }, 1000);
  }
});
leftAnimtaion.addEventListener("click", () => {
  if (countCasrs === 0) {
    cars[countCasrs].classList.add("card-cars-animation");
    setTimeout(() => {
      cars[countCasrs].classList.remove("card-cars-animation");
      cars[countCasrs].classList.add("card-none");
      countCasrs = 4;
      cars[countCasrs].classList.toggle("card-none");
    }, 1000);
  } else {
    cars[countCasrs].classList.add("card-cars-animation");
    setTimeout(() => {
      cars[countCasrs].classList.remove("card-cars-animation");
      cars[countCasrs].classList.add("card-none");
      countCasrs--;
      cars[countCasrs].classList.toggle("card-none");
    }, 1000);
  }
});
//login
const from = document.getElementById("form");
const button = document.querySelectorAll(".button-children-from");
const login = document.querySelector(".login");
const register = document.querySelector(".register");
console.log(from);
from.addEventListener("submit", (e) => {
  e.preventDefault();
});
console.log(button);
flag = true;
button[0].addEventListener("click", () => {
  if (flag === false) {
    button[0].style.background = "#007bff";
    button[1].style.background = "rgb(109, 106, 106)";
    flag = true;
    login.classList.remove("from-none");
    register.classList.add("from-none");
  }
});
button[1].addEventListener("click", () => {
  if (flag === true) {
    button[1].style.background = "#007bff";
    button[0].style.background = "rgb(109, 106, 106)";
    flag = false;
    register.classList.remove("from-none");
    login.classList.add("from-none");
  }
});
