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
const hamMenu = document.querySelector('#ham');
const hamElements = document.querySelector('.off-screen-menu ul');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click',()=> {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
});

hamElements.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
});