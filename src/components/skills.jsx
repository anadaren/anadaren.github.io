import React from "react";

const skillsData = {
  software: {
    title: "Software Development",
    description: `Experienced Software Developer proficient in HTML, CSS, and Javascript, as well as
      a variety of other tools and technologies. Skilled in creating dynamic web applications
      and working with frontend frameworks like React. Passionate about building responsive 
      applications, as well as fun and engaging user experiences.`,
    icons: [
      "html5-plain-wordmark",
      "css3-plain-wordmark",
      "javascript-plain",
      "react-original-wordmark",
      "azuresqldatabase-plain",
      "sass-original",
      "nodejs-plain-wordmark",
      "express-original",
      "mongodb-plain-wordmark",
      "tailwindcss-original",
      "threejs-original",
      "vitejs-plain",
      "npm-original-wordmark",
      "git-plain",
      "figma-plain",
    ],
  },
  game: {
    title: "Game Design",
    description: `Experienced game designer and developer, proficient in Unity, Unreal,
      and a variety of other tools and technologies. Skilled
      in creating exciting games with a strong narrative focus, and building fun and
      memorable experiences. Passionate about designing XR environments and games that
      push the boundaries of what's possible with interactive media.`,
    icons: [
      "csharp-plain",
      "cplusplus-plain",
      "lua-plain",
      "unity-plain",
      "unrealengine-original",
      "blender-original",
      "maya-plain",
    ],
  },
};

const SkillIcons = ({ icons, listId }) => (
  <ul className="skill-icons" id={listId}>
    {icons.map((icon, idx) => (
      <li key={idx}>
        <i className={`devicon-${icon}`}></i>
      </li>
    ))}
  </ul>
);

export const Skills = () => {
    return (
      <section id="skills-section">
      <div className="proj-top" id="skills-top">
        <h1>What I Do</h1>
        <hr className="proj-line" />
      </div>

      <div id="skills-grid">
        {/* Software Dev */}
        <div className="section-box skills-box" id="box-1">
          <h1>{skillsData.software.title}</h1>
          <p>{skillsData.software.description}</p>
        </div>
        <div>
          <SkillIcons icons={skillsData.software.icons} listId="list-1" />
        </div>
      
        {/* Game Design */}
        <div>
          <SkillIcons icons={skillsData.game.icons} listId="list-2" />
        </div>
        <div className="section-box skills-box" id="box-2">
          <h1>{skillsData.game.title}</h1>
          <p>{skillsData.game.description}</p>
        </div>
      </div>

      </section>
    );
}