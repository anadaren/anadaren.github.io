import React from "react";

export const About = () => {
    return (
    <section id="about">
        <div className="grid-container" id="about-container">
          <img src="images/aboutme.jpg" id="about-img"></img>

          <div className="section-box" id="about-box">
            <div id="abt-top">
              <h1>About Me</h1>
            </div>

            <p>Hi, I'm Ana! I'm a software developer and game designer based in Brooklyn, 
              New York, with a passion for blending creativity and technology. I thrive at 
              the intersection of design and code, crafting immersive digital experiences 
              and interactive worlds that captivate and engage.</p>
              
              <p>Whether it's solving complex 
              technical puzzles or designing seamless user interactions, I'm always passionate 
              about bringing ideas to life through thoughtful design and clean, functional 
              development.</p>
              
              <p>With a solid foundation in front-end tools and a growing expertise 
              in back-end systems, I'm always eager to push boundaries and explore new ways 
              to merge art and technology.

                <br></br><br></br><br></br>

            <a href="#projects" className="button-style">View My Work</a></p>
          </div>

        </div>
    </section>


    );
}