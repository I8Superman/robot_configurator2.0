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
  // console.log(target);
  // This gets the img inside the .part_container. Also see preview.css. I added pointer-events: none to the img, so you can only click the container:
  const bodyPartImg = target.children[0]; // This will give us the img element
  const clickedPart = bodyPartImg.getAttribute('data-part'); // This will get us the identifier (the data-part) we want
  const partName = clickedPart.slice(0, clickedPart.lastIndexOf('_')); // Gets part name without number ('_2')
  // console.log(clickedPart);
  // console.log(partName);
  let child;

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
      const colorElements = document.querySelectorAll(`#${partToHide} .colorize`); // Get the g elements inside the part
      console.log(colorElements);
      colorElements.forEach(elem =>
        elem.style.fill = "none");
      // remove already selected part from chosen ul
      const toBeRemoved = document.querySelector(`li[data-part="${partToHide}"`);
      toBeRemoved.remove();
    } else {
      const toBeRemoved = document.querySelector(`li[data-part="${partToHide}"`);
      console.log(toBeRemoved);
      toBeRemoved.remove();
      document.querySelector(`#${partToHide}`).classList.add("hide");
      addNewPart();
    }
  }

  function addNewPart() {
    // move selected part into chosen ul
    let parent = document.querySelector("#chosen ul")
    child = document.createElement("li");
    let childImg = bodyPartImg.cloneNode(true);
    child.appendChild(childImg);
    parent.appendChild(child);
    child.dataset.part = clickedPart;
    parts[partName] = clickedPart; // Update parts obj with the just selected part
    //console.log(parts);
    const partToShow = document.querySelector(`#${clickedPart}`);
    partToShow.classList.remove("hide");

    //reset robot
    document.querySelector("#btn button").addEventListener("click", () => {
      partToShow.classList.add("hide");
    });
    flipAnimation();
  }

  function flipAnimation() {
    // FIRST
    const start = bodyPartImg.getBoundingClientRect();
    console.log(start);
    // // LAST
    const end = child.getBoundingClientRect();
    console.log(end);
    // // INVERT (translate element to the start position)
    const diffX = start.x - end.x;
    const diffY = start.y - end.y;
    child.style.transform = `translate(${diffX}px, ${diffY}px)`;
    child.offsetHeight;
    // // PLAY: animate the element to translate (0,0)
    child.style.transition = "transform 1s";
    child.style.transform = "translate(0, 0)";
  }
}


// -------------------------------------------------------------------------- old code --->
//REMOVE FROM PREVIEW AND REMOVE ACTIVE CLASS
// function resetRobot() {
//   document
//     .querySelector("#btn button")
//     .removeEventListener("click", resetRobot);
//   const previewImg = document.querySelectorAll("[data-name]");
//   previewImg.forEach((img) => img.classList.add("hide"));

//   const partsImg = document.querySelectorAll("[data-part]");
//   partsImg.forEach((img) => img.parentElement.classList.remove("active"));
// }

// //TOGLE BODY PARTS
// function togglePart(e) {
//   const target = e.target;
//   console.log(target);
//   //all parts img
//   const bodyPartImg = target.dataset.part;
//   //all preview img
//   const previewImg = document.querySelector(`[data-name = ${bodyPartImg}]`);
//   console.log(bodyPartImg);
//   console.log(previewImg);

//   //make IF statements for toggling parts, and if > 2 remove first ****
//   //CHECKS IF CHOSEN IS > , but AFFECTS ALL
//   let partsTrue = Object.values(heads).filter((head) => head === true).length;
//   console.log(partsTrue);

//   //all body parts
//   if (heads[bodyPartImg] === false) {
//     heads[bodyPartImg] = true;

//     //ADD ACTIVE CLASS
//     target.parentElement.classList.add("active");
//     //UNHIDE BODY PART
//     previewImg.classList.remove("hide");

//     // //Call new featureElement function to create element and add it to the list
//     console.log(target);
//     let parent = document.querySelector("#chosen ul");
//     let childElement = document.createElement("li");
//     console.log(parent);
//     let childImg = target.cloneNode(true);
//     childElement.appendChild(childImg);
//     parent.appendChild(childElement);


//     //MAKE FLIP ANIMATION
//   } else {
//     heads[bodyPartImg] = false;
//     target.parentElement.classList.remove("active");
//     document
//       .querySelector(`[data-name="${bodyPartImg}"]`)
//       .classList.add("hide");
//   }
// }

// function createChosenElement(chosenImg) {
//   const li = document.createElement("li");
//   li.dataset.name = chosenImg;
//   console.log(chosenImg.dataset.name);
//   const img = document.createElement("img");
//   img.src = `./robots/${chosenImg.dataset.name}.png`;
//   li.append(img);
//   return li;
// }

