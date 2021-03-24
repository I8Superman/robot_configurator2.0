"use strict";
//document.addEventListener("DOMContentLoaded", startManipulatingSvg);
let elementToPaint;
let color;


export function startManipulatingSvg() {
  console.log('Shits working');
  document.querySelectorAll(".colorize").forEach((g) => {
    //document.querySelector("#body_1").classList.remove("hide");
    //g.setAttribute("fill", "blue");
    g.addEventListener("click", colorElement);
    g.addEventListener("mouseover", selectArea);
    g.addEventListener("mouseout", deselectArea);
  });
}

function colorElement() {
  if (color != undefined) {
    console.log((this.style.fill = color));
    this.style.fill = color;
  } else {
    this.style.fill = "lightgrey";
  }
  elementToPaint = this;
}

function selectArea() {
  this.style.stroke = "black";
  this.style.fill = "white";
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
