/* Scroll Animations */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  })
});
// Hides hidden elements before they are scrolled to
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


/* Mobile Hamburger Menu */
function hamMenu() {
  const hamMenu = document.querySelector('.ham');
  const offScreenMenu = document.querySelector('.off-screen-menu');

  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
}


/* Scroll to top button */

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

/* End of Scroll Button */


/*
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    
  </div>
`
setupCounter(document.querySelector('#counter'))





// Copy Email Button
const emailAdd = "ana.daren.green@gmail.com"
function copyEmail() {
  // Get the text field
  var copyText = emailAdd;
   // Copy the text inside the text field
  navigator.clipboard.writeText(emailAdd);

  // Alert the copied text
  alert("Copied the text: " + emailAdd);
} 

*/