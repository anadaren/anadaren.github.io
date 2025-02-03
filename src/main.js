/* Typed Text Animation */

var typed = new Typed('#typed-text', {
  strings: ['games', 'web apps', 'XR projects', 'art and animation'],
  typeSpeed: 50,
  loop: true,
  backSpeed: 75,
  backDelay: 1200,
});

/* Scroll Animations */

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Checks if element is currently visible on screen
    if(entry.isIntersecting) {    // Adds class 'show' when element is visible
      entry.target.classList.add('show');
    } else {  // Removes class 'show' when element is not visible
      entry.target.classList.remove('show');
    }
  })
});

// Hides hidden elements before they are scrolled to
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Percentage scrolled put into a stylesheet variable
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.scrollY / (document.body.offsetHeight - window.innerHeight));
}, false);


/* Project Tabs */
const selectTab = (el) => {
  var x = document.getElementsByClassName("tab-button");
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("tab-selected");
  }
  el.classList.add("tab-selected");
}

const openTab = (tabName) => {
  var x = document.getElementsByClassName("project-box");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  var y = document.getElementsByClassName(tabName);
  for (var i = 0; i < y.length; i++) {
    y[i].style.display = "block";
  }
}


/* Cursor Glow */
const cursor = document.getElementById("cursor");

document.body.onpointermove = event => {

  const { clientX, clientY } = event;

  cursor.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
}, { duration: 100, fill: "forwards" });  // Reduce to 100ms


}

/* Generate Stars */
function generateStars(n, size, animationDuration) {
  const stars = document.createElement("div");
  stars.classList.add("stars");
  document.body.appendChild(stars);
  
  for (let i = 0; i < n; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 2000}px`;
      star.style.top = `${Math.random() * 2000}px`;
      star.style.animationDuration = `${animationDuration}s`;
      stars.appendChild(star);
  }
}


document.addEventListener("DOMContentLoaded", () => {
  generateStars(700, 1, 5);  // Small stars
  generateStars(200, 2, 10); // Medium stars
  generateStars(100, 3, 15); // Big stars
});