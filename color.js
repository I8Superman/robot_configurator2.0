"use strict";
let elementToPaint;
let color;

export function startManipulatingSvg() {
  document.querySelectorAll(".colorize").forEach((g) => {
    g.addEventListener("click", colorElement);
    g.addEventListener("mouseover", selectArea);
    g.addEventListener("mouseout", deselectArea);
  });
}

function colorElement() {
  if (color != undefined) {
    this.style.fill = color;
  } else {
    this.style.fill = "lightgrey";
  }
  elementToPaint = this;
}

function selectArea() {
  this.style.stroke = "black";
}

function deselectArea() {
  this.style.stroke = "none";
}

document.querySelectorAll(".color_btn").forEach((colorBtn) => {
  colorBtn.addEventListener("click", colorSelected);
});

function colorSelected() {
  color = this.getAttribute("fill");
  if (elementToPaint !== undefined) {
    elementToPaint.style.fill = this.getAttribute("fill");
  }
}
