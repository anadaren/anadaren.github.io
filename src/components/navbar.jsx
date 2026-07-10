import React, {useState } from 'react';

export const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    }

    return (
      <nav>   

      <a href="../index.html"><img src="/images/favicon.png" alt="Home Image"/></a>

      <a href="../index.html"><p>Anastasia D. Green</p></a>
      

      <a href="../#contact" class="navlink">Contact</a>
      <a href="../#projects" class="navlink">Projects</a>
      <a href="../#about" class="navlink">About</a>
      
      

      <div id="ham" className={menuActive ? "active" : ""} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    

      <div className={`off-screen-menu ${menuActive ? "active" : ""}`}>
          <ul>
            <li><a href="../index.html#about" className="hamlink" onClick={toggleMenu}>About</a></li>
            <li><a href="../index.html#projects" className="hamlink" onClick={toggleMenu}>Projects</a></li>
            <li><a href="../index.html#contact" className="hamlink" onClick={toggleMenu}>Contact</a></li>
          </ul>
      </div>

      </nav>
    );
}
