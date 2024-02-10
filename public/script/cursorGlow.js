let cursor = document.querySelector(".cursor");
let html = document.querySelector("html");

let mouseX = 0;
let mouseY = 0;
let xp = 0;
let yp = 0;
let allowCursorLight = false;

document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX - 0;
  mouseY = e.pageY - 0;
});

setInterval(() => {
  xp += (mouseX - xp) / 10;
  yp += (mouseY - yp) / 10;

  // const translateTransform = `translate(${xp}px, ${yp}px)`;

  if (html.classList.contains("dark")) {
    cursor.style.background = `radial-gradient(400px at ${xp}px ${yp}px, rgba(23,62,172,0.15), transparent 80%)`;
  } else {
    cursor.style.background = ``;
  }
});
