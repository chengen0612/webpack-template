import "./index.css";

console.log("hello world!");

const counter = document.getElementById("counter");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let number = parseInt(counter.innerHTML, 10);
  counter.innerHTML = ++number;
});
