/* Scroll Animations */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  })
},
{ threshold: 0.2
});

// Hides hidden elements before they are scrolled to
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


//
for (let i = 0; i < the_animation.length; i++) {
const elements = the_animation[i];

 observer.observe(elements);
}
