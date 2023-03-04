import "./styles.css";

const toggle = document.querySelector("#toggle");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
});

body.addEventListener("click", function () {
  body.classList.toggle("active");
});
