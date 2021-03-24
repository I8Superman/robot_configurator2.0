"use strict";

//object for all features
const parts = {
  heads: {
    head_1: false,
    head_2: false,
    head_3: false,
    head_4: false,
  },
  bodies: {
    body_2: false,
    body_3: false,
  },

  //add r/l arm
  arms: {
    arm_1: false,
    arm_2: false,
    arm_3: false,
  },
  legs: {
    legs_1: false,
    legs_2: false,
    legs_3: false,
  },
};

//rewrite for if more heads are true and put in separate function, it is 0 now
// let headsTrue = Object.values(heads).filter((heads) => heads === true).length;
// console.log(headsTrue);

window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("init");
  //select all body parts and for each part add toggle
  document
    .querySelectorAll("#bodyparts")
    .forEach((part) => part.addEventListener("click", togglePart));
  document.querySelector("#btn button").addEventListener("click", resetRobot);
}

//REMOVE FROM PREVIEW AND REMOVE ACTIVE CLASS
function resetRobot() {
  document
    .querySelector("#btn button")
    .removeEventListener("click", resetRobot);
  const previewImg = document.querySelectorAll("[data-name]");
  previewImg.forEach((img) => img.classList.add("hide"));

  const partsImg = document.querySelectorAll("[data-part]");
  partsImg.forEach((img) => img.parentElement.classList.remove("active"));
}

//TOGLE BODY PARTS
function togglePart(e) {
  const target = e.target;
  console.log(target);
  //all parts img
  const bodyPartImg = target.dataset.part;
  //all preview img
  const previewImg = document.querySelector(`[data-name = ${bodyPartImg}]`);
  console.log(bodyPartImg);
  console.log(previewImg);

  //make IF statements for toggling parts, and if > 2 remove first ****
  //CHECKS IF CHOSEN IS > , but AFFECTS ALL
  let partsTrue = Object.values(heads).filter((head) => head === true).length;
  console.log(partsTrue);

  //all body parts
  if (heads[bodyPartImg] === false) {
    heads[bodyPartImg] = true;

    //ADD ACTIVE CLASS
    target.parentElement.classList.add("active");
    //UNHIDE BODY PART
    previewImg.classList.remove("hide");

    // //Call new featureElement function to create element and add it to the list
    console.log(target);
    let parent = document.querySelector("#chosen ul");
    let childElement = document.createElement("li");
    console.log(parent);
    let childImg = target.cloneNode(true);
    childElement.appendChild(childImg);
    parent.appendChild(childElement);


    //MAKE FLIP ANIMATION
  } else {
    heads[bodyPartImg] = false;
    target.parentElement.classList.remove("active");
    document
      .querySelector(`[data-name="${bodyPartImg}"]`)
      .classList.add("hide");
  }
}

// function createChosenElement(chosenImg) {
//   const li = document.createElement("li");
//   li.dataset.name = chosenImg;
//   console.log(chosenImg.dataset.name);
//   const img = document.createElement("img");
//   img.src = `./robots/${chosenImg.dataset.name}.png`;
//   li.append(img);
//   return li;
// }
