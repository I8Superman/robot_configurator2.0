"use strict";

import { startManipulatingSvg } from "./color.js";

window.addEventListener("DOMContentLoaded", init);

//object for all features
let parts = {
  // Changed to let, as I couldn't change the values on the const (even if we should be able to?)
  head: "",
  body: "",
  arm_right: "",
  arm_left: "",
  legs: "",
};

async function init() {
  let response = await fetch("robot/robot_parts.svg");
  let svgData = await response.text();
  document.querySelector("#preview").innerHTML = svgData;
  makeClickableParts();
  startManipulatingSvg();
}

function makeClickableParts() {
  //select all body parts and for each part add toggle #bodyparts
  document
    .querySelectorAll(".part_container")
    .forEach((part) => part.addEventListener("click", togglePart));
}

function togglePart(e) {
  // This code can be used for any part, heads, arms, legs, bodies etc.
  const target = e.target;

  // This gets the img inside the .part_container. Also see preview.css. I added pointer-events: none to the img, so you can only click the container:
  const bodyPartImg = target.children[0]; // This will give us the img element
  const clickedPart = bodyPartImg.getAttribute("data-part"); // This will get us the identifier (the data-part) we want
  const partName = clickedPart.slice(0, clickedPart.lastIndexOf("_")); // Gets part name without number ('_2')
  // console.log(clickedPart);
  // console.log(partName);
  removeOldPart();

  function removeOldPart() {
    const partToHide = parts[partName];
    console.log(partToHide);

    if (partToHide === "") {
      // If nothing was previously selected, nothing will be removed
      // console.log('Nothing to be removed as nothing was previously selected!');
      addNewPart();
    } else if (partToHide === clickedPart) {
      // If part already selected, hide it again
      // console.log('already selected this')
      parts[partName] = ""; // Remove clicked part from parts obj again
      document.querySelector(`#${partToHide}`).classList.add("hide");
    } else {
      document.querySelector(`#${partToHide}`).classList.add("hide");
      addNewPart();
    }
  }

  function addNewPart() {
    parts[partName] = clickedPart; // Update parts obj with the just selected part
    //console.log(parts);
    const partToShow = document.querySelector(`#${clickedPart}`);
    partToShow.classList.remove("hide");

    //reset robot
    document.querySelector("#btn button").addEventListener("click", () => {
      partToShow.classList.add("hide");
    });
  }
}
