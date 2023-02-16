"use strict"

let them = document.querySelector("#them"),
  header = document.querySelector("header"),
  cards = document.querySelector('.cards'),
  card = document.querySelectorAll('.card')  ;

them.addEventListener("input", (e) => {
  localStorage.setItem("them", e.target.checked);
  changeMode();
});
function changeMode() {
  let mode = localStorage.getItem("them");
  if (mode === "true") {
    document.body.style.cssText = "background-color: #1c1c1c; color:#fff";
    header.style.cssText = "background-color:#1C1C1C; color: #fff;";
    cards.style.cssText = "background-color:#1c1c1c; color: #fff;";
    card.forEach(item=>{
      item.style.cssText = "background-color:#272727; color: #fff;";
    })

  } else {
    document.body.style.cssText = "background-color: #1c1c1c1; color:#000";
    header.style.cssText = "background-color:#1c1c1c1; color=#000";
    cards.style.cssText = "background-color:#1c1c1c1; color=#000";
    card.forEach((item) => {
      item.style.cssText = "background-color:#f5f5f5; color: #000;";
    });
  }
}
changeMode();
