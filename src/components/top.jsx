import React, { useEffect, useRef } from "react";
import Typed from 'typed.js';

export const Top = () => {
    const typedEl = useRef(null); // reference to the span

    useEffect(() => {

    /* Typed Text Animation */
    const typed = new Typed(typedEl.current, {
    strings: ['games', 'web apps', 'XR projects', 'art and animation'],
    typeSpeed: 50,
    loop: true,
    backSpeed: 75,
    backDelay: 1200,
    });

    // cleanup to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, []);

    return (
        <>
    <section id="hero-section">
        <div id="hero-flexbox">
        <div id="hero-image">
            <img src="/images/hero.png" alt="Hero Image"/></div>
            <div className="section-box" id="name-box">
                <header>
                <h1>Hi, I'm Ana! 🚀</h1>
                <p>Designer & Developer & Fun Stuff Enthusiast</p>
                <p>I make <span ref={typedEl}></span></p>
                <br/>
                <a href="mailto:ana.daren.green@gmail.com" class="button-style big-button">✉️ Say hi!</a>
                </header> 
            </div>
        </div>

       <div className="chevron">
            <a href="#about" className="chev-link"></a>
        </div>

    </section>

    </>
    );
}