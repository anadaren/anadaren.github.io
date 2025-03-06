import { gsap } from "gsap";

/* GSAP Animations */

let nameBox = document.getElementById("name-box");
gsap.from(nameBox, { 
  y: 50,
  opacity: 0,
  duration: 1,
});