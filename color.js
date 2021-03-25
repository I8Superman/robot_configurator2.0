"use strict";
let elementToPaint;
let colorInput = document.querySelector("input");

export function startManipulatingSvg() {
  console.log("Coloring is working");
  document.querySelectorAll(".colorize").forEach((g) => {
    g.addEventListener("click", colorElement);
    g.addEventListener("mouseover", selectArea);
    g.addEventListener("mouseout", deselectArea);
  });
  colorInput.addEventListener("input", colorSelected);
}

function colorElement() {
  this.style.fill = "lightgrey";
  elementToPaint = this;
}

function selectArea() {
  this.style.stroke = "white";
}

function deselectArea() {
  this.style.stroke = "none";
  console.log("click");
}

document.querySelectorAll(".color_btn").forEach((colorBtn) => {
  colorBtn.addEventListener("click", colorSelected);
});

function colorSelected(e) {
  if (
    elementToPaint !== undefined &&
    e.target.classList.contains("color_btn")
  ) {
    elementToPaint.style.fill = this.getAttribute("fill");
  } else {
    elementToPaint.style.fill = document.querySelector("input").value;
  }
}
