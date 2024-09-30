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

/* Project Tabs */

function openTab(tabName) {
  var i;
  var x = document.getElementsByClassName("category");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}