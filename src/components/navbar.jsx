import React from 'react';

export const Navbar = () => {

    return (
      <nav>   

      <a href="../index.html"><img src="/images/favicon.png" alt="Home Image"/></a>

      <a href="../index.html"><p>Anastasia D. Green</p></a>
      

      <a href="../#contact" class="navlink">Contact</a>
      <a href="../#projects" class="navlink">Projects</a>
      <a href="../#about" class="navlink">About</a>
      
      

      <div id="ham">
        <span></span>
        <span></span>
        <span></span>
      </div>
    

      <div className="off-screen-menu">
          <ul>
            <li><a href="../index.html#about" class="hamlink">About</a></li>
            <li><a href="../index.html#projects" class="hamlink">Projects</a></li>
            <li><a href="../index.html#contact" class="hamlink">Contact</a></li>
          </ul>
      </div>

      </nav>
    );
}
