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


