import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/index.js";

/* GSAP Animations */

let nameBox = document.getElementById("name-box");
gsap.from(nameBox, { 
  y: 50,
  opacity: 0,
  duration: 1,
});