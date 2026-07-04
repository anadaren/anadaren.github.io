import React, { useState, useEffect } from 'react';
import '/src/css/style.css';

import { Navbar } from './components/navbar.jsx';
import { Top } from './components/top.jsx';
import { About } from './components/about.jsx';
import { Skills } from './components/skills.jsx';
import { Footer } from './components/footer.jsx';
import { Projects } from './components/projects.jsx';
import { Contact } from './components/contact.jsx';


/* Scroll Animations */

const observer = new IntersectionObserver((entries) => {
  useEffect(() => {
  entries.forEach((entry) => {
    // Checks if element is currently visible on screen
    if(entry.isIntersecting) {    // Adds class 'show' when element is visible
      entry.target.classList.add('show');
    } else {  // Removes class 'show' when element is not visible
      entry.target.classList.remove('show');
    }
  })
  }, []);
});

// Hides hidden elements before they are scrolled to
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Percentage scrolled put into a stylesheet variable
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.scrollY / (document.body.offsetHeight - window.innerHeight));
}, false);



/* Project Tabs */
/*


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
}*/



export const App = () =>{

  /* Cursor Glow */
  const cursor = document.getElementById("cursor");

  document.body.onpointermove = event => {

    const { clientX, clientY } = event;

    cursor.animate({
      left: `${clientX}px`,
      top: `${clientY}px`
  }, { duration: 100, fill: "forwards" });  // Reduce to 100ms

  }

  return (
    <>
    <Navbar />
    <Top />
    <About />
    <Skills />
    <div className='container'>
        <Projects />
      </div>
      <Contact />
    <Footer />
    </>
  );
}