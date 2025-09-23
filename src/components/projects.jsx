import React from 'react';
import { Project } from './project.jsx';

const projectsData = [
    {
        title: "Bookshelf",
        tags: "HTML/CSS, JavaScript, React",
        description: "Searches the Google Book API for books for you to add to a custom read and favorite lists.",
        imgSrc: "/images/projectPics/project-book.png",
        sourceLink: "https://github.com/anadaren/bookshelf/",
        liveLink: "https://anadaren-bookshelf.netlify.app/"
    },
    {
        title: "Sudoku App",
        tags: "HTML/CSS, Javascript, React, Tailwind",
        description: "Simple sudoku app made with React.",
        imgSrc: "/images/projectPics/project1.png",
        sourceLink: "https://github.com/anadaren/sudoku/",
        liveLink: "https://anadaren-sudoku-app.netlify.app/"
    },
    {
        title: "Pokemon Search",
        tags: "HTML/CSS, JavaScript, React",
        description: "React app that lets you search for different Pokemon in the Pokedex.",
        imgSrc: "/images/projectPics/project5.png",
        sourceLink: "https://github.com/anadaren/pokemon-search/",
        liveLink: "https://anadaren-pokemon-search.netlify.app/"
    },
    {
        title: "IT2K",
        tags: "HTML/CSS, JavaScript",
        description: "Browser game where you can interact with a Y2K themed computer and solve puzzles.",
        imgSrc: "/images/projectPics/it2k.png",
        sourceLink: "https://github.com/anadaren/Global-Game-Jam-2025/",
        liveLink: "https://anadaren.github.io/Global-Game-Jam-2025/"
    },
    {
        title: "Sorting Algorithm Visualizer",
        tags: "HTML/CSS, JavaScript, React",
        description: "React app that animates various sorting algorithms.",
        imgSrc: "/images/projectPics/sort.png",
        sourceLink: "https://github.com/anadaren/sorting-visualizer/",
        liveLink: "https://anadaren-sorting-visualizer.vercel.app/"
    },
    {
        title: "Art Gallery",
        tags: "HTML/CSS, JavaScript, React, Digital Illustration",
        description: "An interactive art gallery app showcasing all of my 2D Artwork.",
        imgSrc: "/images/projectPics/project4.png",
        sourceLink: "https://github.com/anadaren/art-gallery/",
        liveLink: "https://anadaren-art-gallery.netlify.app/"
    },
    {
        title: "Ecommerse Website",
        tags: "HTML/CSS, JavaScript, React",
        description: "An online ecommerse website with sample products for a person to buy.",
        imgSrc: "/images/projectPics/project-landingpage.png",
        sourceLink: "https://github.com/anadaren/react-storefront/",
        liveLink: "https://anadaren-storefront.netlify.app/"
    },
    {
        title: "Current Affairs",
        tags: "HTML/CSS, Node.js, Express.js, MongoDB",
        description: "A fullstack satirical fish themed blogging website for people to post about fish and fish related topics.",
        imgSrc: "/images/projectPics/project2.png",
        sourceLink: "https://github.com/anadaren/fish-blog/",
        liveLink: "https://fish-blog.onrender.com/"
    },
    {
        title: "Something's Coming",
        tags: "Unity, C#, Virtual Reality, Meta Quest 2, Git, Blender",
        description: "An interactive VR Art Game, focusing on the absurdism of working an office job in the modern world.",
        imgSrc: "/images/projectPics/games/SomethingsComing.png",
        sourceLink: "/src/somethingscoming.html",
        liveLink: "/src/somethingscoming.html"
    },
    {
        title: "One Week Prototypes",
        tags: "Unity, C#, Blender, Procreate",
        description: "A project where I created 6 short game prototypes over the course of six weeks. Each one is also a different genre and style of game.",
        imgSrc: "/images/projectPics/games/GamePrototypes.png",
        sourceLink: "/src/weeklygames.html",
        liveLink: "/src/weeklygames.html"
    },
    {
        title: "The Lake House VR",
        tags: "Unity, C#, Virtual Reality, Meta Quest 2, Git, Blender",
        description: "My Interactive Multimedia Senior Thesis! Explore your family's old abandoned Lake House and solve puzzles.",
        imgSrc: "/images/projectPics/games/LakeHouse.png",
        sourceLink: "/src/thelakehouse.html",
        liveLink: "/src/thelakehouse.html"
    },
        {
        title: "14th Century Breadmaking Simulator",
        tags: "Unity, C#, Blender",
        description: "Relaxing atmospheric baking simulator, set in the 14th century.",
        imgSrc: "/images/projectPics/games/BreadSim.png",
        sourceLink: "https://anadaren.itch.io/14th-century-breadmaking-simulator",
        liveLink: "https://anadaren.itch.io/14th-century-breadmaking-simulator"
    },
    {
        title: "Vampire Overlord",
        tags: "Unity, C#, Git",
        description: "Text Based RPG about ruling over a society of Vampires. Select Underlings to make decisions for you while you sleep.",
        imgSrc: "/images/projectPics/games/VampireOverlord.png",
        sourceLink: "https://rowanqueue.itch.io/vampire-overlord-2d",
        liveLink: "https://rowanqueue.itch.io/vampire-overlord-2d"
    },
    {
        title: "Moon Swap",
        tags: "Lua, Git, State Machines",
        description: "Atmospheric match 3 game, coded in Lua for the Love2D engine.",
        imgSrc: "/images/projectPics/games/MoonSwap.png",
        sourceLink: "https://github.com/anadaren/Moon-Swap",
        liveLink: "https://github.com/anadaren/Moon-Swap"
    },
    {
        title: "AR Shadowbox",
        tags: "Augmented Reality, Illustrator, BlippAR, Physical Media",
        description: "A 12 x 12 laser-cut wooden shadowbox, depicting an augmented reality underwater shipwreck scene, designed in Illustrator.",
        imgSrc: "/images/projectPics/ShadowBox.jpg",
        sourceLink: "https://youtube.com/shorts/eFDyzjSCj6g?feature=share",
        liveLink: "https://youtube.com/shorts/eFDyzjSCj6g?feature=share"
    },
    {
        title: "3D Modeling",
        tags: "3D Modeling, Blender, Maya",
        description: "My Sketchfab account, showcasing all of my 3D artwork.",
        imgSrc: "/images/projectPics/sketchfab.png",
        sourceLink: "https://sketchfab.com/anadaren",
        liveLink: "https://sketchfab.com/anadaren"
    },
    
]


export const Projects = () => {
   console.log(projectsData);
    return (
<section id="projects">
  <div className="proj-top">
    <h1>Projects</h1>
    <hr className="proj-line"/>

  <button className="tab-button" onClick="openTab('project-box'); selectTab(this)">All</button>

  <div id="tab-button-container">
    <button className="tab-button tab-selected" onClick="openTab('webdev'); selectTab(this)">Web Dev</button>
    <button className="tab-button" onClick="openTab('gamedev'); selectTab(this)">Games</button>
    <button className="tab-button" onClick="openTab('xr'); selectTab(this)">XR</button>
    <button className="tab-button" onClick="openTab('art'); selectTab(this)">Artwork</button>
  </div>
</div>


  <div className="grid-container" id="projects">

     <Project
      title = {projectsData[0].title}
      tags = {projectsData[0].tags}
      description = {projectsData[0].description}
      imgSrc = {projectsData[0].imgSrc}
      sourceLink = {projectsData[0].sourceLink}
      liveLink = {projectsData[0].liveLink}
      />

      <Project
      title = {projectsData[1].title}
      tags = {projectsData[1].tags}
      description = {projectsData[1].description}
      imgSrc = {projectsData[1].imgSrc}
      sourceLink = {projectsData[1].sourceLink}
      liveLink = {projectsData[1].liveLink}
      />
      <Project
      title = {projectsData[2].title}
      tags = {projectsData[2].tags}
      description = {projectsData[2].description}
      imgSrc = {projectsData[2].imgSrc}
      sourceLink = {projectsData[2].sourceLink}
      liveLink = {projectsData[2].liveLink}
      /> 
      <Project
      title = {projectsData[3].title}
      tags = {projectsData[3].tags}
      description = {projectsData[3].description}
      imgSrc = {projectsData[3].imgSrc}
      sourceLink = {projectsData[3].sourceLink}
      liveLink = {projectsData[3].liveLink}
      />
      <Project
      title = {projectsData[4].title}
      tags = {projectsData[4].tags}
      description = {projectsData[4].description}
      imgSrc = {projectsData[4].imgSrc}
      sourceLink = {projectsData[4].sourceLink}
      liveLink = {projectsData[4].liveLink}
      />
      <Project
      title = {projectsData[5].title}
      tags = {projectsData[5].tags}
      description = {projectsData[5].description}
      imgSrc = {projectsData[5].imgSrc}
      sourceLink = {projectsData[5].sourceLink}
      liveLink = {projectsData[5].liveLink}
      />
      <Project
      title = {projectsData[6].title}
      tags = {projectsData[6].tags}
      description = {projectsData[6].description}
      imgSrc = {projectsData[6].imgSrc}
      sourceLink = {projectsData[6].sourceLink}
      liveLink = {projectsData[6].liveLink}
      />
      <Project
      title = {projectsData[7].title}
      tags = {projectsData[7].tags}
      description = {projectsData[7].description}
      imgSrc = {projectsData[7].imgSrc}
      sourceLink = {projectsData[7].sourceLink}
      liveLink = {projectsData[7].liveLink}
      />
      <Project
      title = {projectsData[8].title}
      tags = {projectsData[8].tags}
      description = {projectsData[8].description}
      imgSrc = {projectsData[8].imgSrc}
      sourceLink = {projectsData[8].sourceLink}
      liveLink = {projectsData[8].liveLink}
      />
      <Project
      title = {projectsData[9].title}
      tags = {projectsData[9].tags}
      description = {projectsData[9].description}
      imgSrc = {projectsData[9].imgSrc}
      sourceLink = {projectsData[9].sourceLink}
      liveLink = {projectsData[9].liveLink}
      />
      <Project
      title = {projectsData[10].title}
      tags = {projectsData[10].tags}
      description = {projectsData[10].description}
      imgSrc = {projectsData[10].imgSrc}
      sourceLink = {projectsData[10].sourceLink}
      liveLink = {projectsData[10].liveLink}
      />
      <Project
      title = {projectsData[11].title}
      tags = {projectsData[11].tags}
      description = {projectsData[11].description}
      imgSrc = {projectsData[11].imgSrc}
      sourceLink = {projectsData[11].sourceLink}
      liveLink = {projectsData[11].liveLink}
      />
      <Project
      title = {projectsData[12].title}
      tags = {projectsData[12].tags}
      description = {projectsData[12].description}
      imgSrc = {projectsData[12].imgSrc}
      sourceLink = {projectsData[12].sourceLink}
      liveLink = {projectsData[12].liveLink}
      />
      <Project
      title = {projectsData[13].title}
      tags = {projectsData[13].tags}
      description = {projectsData[13].description}
      imgSrc = {projectsData[13].imgSrc}
      sourceLink = {projectsData[13].sourceLink}
      liveLink = {projectsData[13].liveLink}
      />
      <Project
      title = {projectsData[14].title}
      tags = {projectsData[14].tags}
      description = {projectsData[14].description}
      imgSrc = {projectsData[14].imgSrc}
      sourceLink = {projectsData[14].sourceLink}
      liveLink = {projectsData[14].liveLink}
      />
      <Project
      title = {projectsData[15].title}
      tags = {projectsData[15].tags}
      description = {projectsData[15].description}
      imgSrc = {projectsData[15].imgSrc}
      sourceLink = {projectsData[15].sourceLink}
      liveLink = {projectsData[15].liveLink}
      />

    </div>

    </section>

    );
}