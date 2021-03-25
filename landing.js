"use strict";
window.addEventListener("DOMContentLoaded", startAnimation);
const tl = gsap.timeline();
let dur = 2.5;

function startAnimation() {
  document.querySelector("h1").classList.remove("hide");
  document.querySelector("#btn button").classList.add("hide");
  let title = document.querySelector("h1").textContent;
  let textDisplay = "";

  for (let i = 0; i < title.length; i++) {
    setTimeout(() => {
      textDisplay += title.charAt(i);

      document.querySelector("h1").innerHTML = textDisplay;
    }, i * 15);
  }
  gsap.from("h1", {
    y: 800,
    opacity: 0,
    duration: 1,
  });
  gsap.to("h1", {
    y: 20,
    scale: 1.2,
    opacity: 100,
    duration: 2.5,
    ease: "elastic",
    stagger: 0.15,
    onComplete: function animatePath() {
      {
        tl.reversed(!tl.reversed());
        console.log(tl);
        //Robot animation
        document.querySelector("#head").classList.remove("hide");
        document.querySelector("#body").classList.remove("hide");
        document.querySelector("#legs").classList.remove("hide");
        document.querySelector("#armLeft").classList.remove("hide");
        document.querySelector("#armRight").classList.remove("hide");
        tl.from("#body", dur, { y: -1000, ease: "ease-in" }, 2);
        tl.from("#head", dur, { y: -1000, ease: "ease-in", rotate: 360 }, 2);
        tl.from("#legs", dur, { y: 1000, ease: "ease-in", rotate: 360 }, 2);
        tl.from("#armLeft", dur, { x: -1000, ease: "ease-in", rotate: 360 }, 2);
        tl.from("#armRight", dur, { x: 1000, ease: "ease-in", rotate: 360 }, 2);
      }
    },
  });

  btnVisible();
}

function btnVisible() {
  setTimeout(() => {
    document.querySelector("#btn button").classList.remove("hide");
  }, 5500);
}

tl.from("#masterTextPath", dur, {
  attr: { startOffset: "100%" },
  ease: "power1",
});

// FireFox
tl.from("#mainText", { duration: dur, attr: { textLength: 2500 } }, 0);
// Chrome
tl.from("#masterTextPath", { duration: dur, attr: { textLength: 3550 } }, 0);
tl.reversed(true);
