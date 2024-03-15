const divs = document.querySelectorAll("div");

function cambiarColorANegro(event) {
  event.target.style.backgroundColor = "black";
}

divs.forEach((div) => {
  div.addEventListener("click", cambiarColorANegro);
});
