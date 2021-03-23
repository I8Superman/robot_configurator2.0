"use strict";
document.addEventListener("DOMContentLoaded", start);
let elementToPaint;

async function start() {
  let response = await fetch("./robots/robot_1.svg");
  let mySvgData = await response.text();
  document.querySelector("#preview").innerHTML = mySvgData;
  startManipulatingSvg();
}

function startManipulatingSvg() {
  document.querySelectorAll("g").forEach((g) => {
    document.querySelector("#body_1").classList.remove("hide");
    g.setAttribute("fill", "blue");
    g.addEventListener("click", colorElement);
    g.addEventListener("mouseover", selectArea);
    g.addEventListener("mouseout", deselectArea);
  });
}

function colorElement() {
  //this is what will be handled
  elementToPaint = this;
  // console.log(elementToPaint);
  this.style.fill = "lightgrey";
}

function selectArea() {
  this.style.stroke = "white";
  this.style.fill = "white";
}

function deselectArea() {
  this.style.stroke = "none";
}

document.querySelectorAll(".color_btn").forEach((colorBtn) => {
  colorBtn.addEventListener("click", colorSelected);
  // console.log(colorBtn);
});

function colorSelected() {
  //get this btns color to fill
  console.log("click");
  elementToPaint.style.fill = this.getAttribute("fill");
  // if (elementToPaint !== undefined) {
  //   elementToPaint.style.fill = this.getAttribute("fill");
  // }
}
