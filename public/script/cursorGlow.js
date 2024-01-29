let body = document.querySelector("body");
let cursor = document.querySelector(".cursor");
let glow = document.querySelector(".cursor-glow");

let mouseX = 0;
let mouseY = 0;
let xp = 0;
let yp = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX - 0;
  mouseY = e.pageY - 0;
});

setInterval(() => {
  xp += (mouseX - xp) / 10;
  cursor.style.left = xp + "px";

  yp += (mouseY - yp) / 10;
  cursor.style.top = yp + "px";
}, 12);

body.addEventListener("mouseover", () => {
  glow.classList.add("cursor-active");
});
