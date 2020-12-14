const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");
const body = document.querySelector("body");

open.addEventListener("click", () => {
  container.classList.add("show-nav");
  body.classList.add("active");
});

close.addEventListener("click", () => {
  container.classList.remove("show-nav");
  body.classList.remove("active");
});
