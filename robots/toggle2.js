"use strict";

//object for all features
let parts = {
  // Changed to let, as I couldn't change the values on the const (even if we should be able to?)
  head_1: false, // I changed it to one big object as it is easier to reference
  head_2: false,
  head_3: false,
  head_4: false,
  body_1: false,
  body_2: false,
  body_3: false,
  arm_1_left: false,
  arm_2_left: false,
  arm_3_left: false,
  arm_1_right: false,
  arm_2_right: false,
  arm_3_right: false,
  legs_1: false,
  legs_2: false,
  legs_3: false,
};

window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("init");
  //select all body parts and for each part add toggle #bodyparts
  document.querySelectorAll(".part_container").forEach((part) =>
    // console.log(part)
    part.addEventListener("click", togglePart)
  );
}

function togglePart(e) {
  // This code can be used for any part, heads, arms, legs, bodies etc.
  const target = e.target;
  // This gets the img inside the .part_container. Also see preview.css. I added pointer-events: none to the img, so you can only click the container:
  const bodyPartImg = target.children[0]; // This will give us the img element
  console.log(bodyPartImg);

  const clickedPart = bodyPartImg.getAttribute("data-part"); // This will get us the identifier (the data-part) we want
  console.log(clickedPart);

  // Sorry for this crazy conditional. But it works!
  if (
    !clickedPart.includes("body") &&
    (parts.body_1 === false || parts.body_2 === false || parts.body_3 === false)
  ) {
    alert("You need to choose a body to build on first!");
  } else if (clickedPart.includes("body")) {
    // Here we load the SVG if a body is clicked
    console.log("You clicked a body!");
    const getNumber = clickedPart.substring(5, 6); // Gets the '1' in body_1 for example
    console.log(getNumber);
    fetch(`robots/robot_${getNumber}.svg`)
      .then((response) => response.text())
      .then((text) => (document.querySelector("#preview").innerHTML = text))
      .then(showPart());
  } else {
    showPart();
  }

  function showPart() {
    console.log(clickedPart);
    if (parts[clickedPart] === false) {
      parts[clickedPart] = true;
      //ADD ACTIVE CLASS
      // target.classList.add("active");
      //UNHIDE BODY PART

      const previewImg = document.querySelector(`[data-name="${clickedPart}"`);
      previewImg.classList.remove("hide");
    } else {
      // parts.heads[bodyPartImg] = false;
      // target.classList.remove("active");
      // document
      //   .querySelector(`[data-part="${bodyPartImg}"]`)
      //   .classList.add("hide");
    }
  }
}
