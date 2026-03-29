import React, { useState } from 'react';
import { Project } from './project.jsx';

const projectsData = [
    {
        title: "Bookshelf",
        tags: "HTML/CSS, JavaScript, React",
        description: "Searches the Google Book API for books for you to add to a custom read and favorite lists.",
        imgSrc: "/images/projectPics/project-book.png",
        sourceLink: "https://github.com/anadaren/bookshelf/",
        liveLink: "https://anadaren-bookshelf.netlify.app/",
        type: "webdev"
    },
    {
        title: "Sudoku App",
        tags: "HTML/CSS, Javascript, React, Tailwind",
        description: "Simple sudoku app made with React.",
        imgSrc: "/images/projectPics/project1.png",
        sourceLink: "https://github.com/anadaren/sudoku/",
        liveLink: "https://anadaren-sudoku-app.netlify.app/",
        type: "webdev"
    },
    {
        title: "Pokemon Search",
        tags: "HTML/CSS, JavaScript, React",
        description: "React app that lets you search for different Pokemon in the Pokedex.",
        imgSrc: "/images/projectPics/project5.png",
        sourceLink: "https://github.com/anadaren/pokemon-search/",
        liveLink: "https://anadaren-pokemon-search.netlify.app/",
        type: "webdev"
    },
    {
        title: "IT2K",
        tags: "HTML/CSS, JavaScript",
        description: "Browser game where you can interact with a Y2K themed computer and solve puzzles.",
        imgSrc: "/images/projectPics/it2k.png",
        sourceLink: "https://github.com/anadaren/Global-Game-Jam-2025/",
        liveLink: "https://anadaren.github.io/Global-Game-Jam-2025/",
        type: "webdev gamedev"
    },
    {
        title: "Sorting Algorithm Visualizer",
        tags: "HTML/CSS, JavaScript, React",
        description: "React app that animates various sorting algorithms.",
        imgSrc: "/images/projectPics/sort.png",
        sourceLink: "https://github.com/anadaren/sorting-visualizer/",
        liveLink: "https://anadaren-sorting-visualizer.vercel.app/",
        type: "webdev"
    },
    {
        title: "Art Gallery",
        tags: "HTML/CSS, JavaScript, React, Digital Illustration",
        description: "An interactive art gallery app showcasing all of my 2D Artwork.",
        imgSrc: "/images/projectPics/project4.png",
        sourceLink: "https://github.com/anadaren/art-gallery/",
        liveLink: "https://anadaren-art-gallery.netlify.app/",
        type: "webdev art"
    },
    {
        title: "Ecommerse Website",
        tags: "HTML/CSS, JavaScript, React",
        description: "An online ecommerse website with sample products for a person to buy.",
        imgSrc: "/images/projectPics/project-landingpage.png",
        sourceLink: "https://github.com/anadaren/react-storefront/",
        liveLink: "https://anadaren-storefront.netlify.app/",
        type: "webdev"
    },
    {
        title: "Current Affairs",
        tags: "HTML/CSS, Node.js, Express.js, MongoDB",
        description: "A fullstack satirical fish themed blogging website for people to post about fish and fish related topics.",
        imgSrc: "/images/projectPics/project2.png",
        sourceLink: "https://github.com/anadaren/fish-blog/",
        liveLink: "https://fish-blog.onrender.com/",
        type: "webdev"
    },
    {
        title: "Something's Coming",
        tags: "Unity, C#, Virtual Reality, Meta Quest 2, Git, Blender",
        description: "An interactive VR Art Game, focusing on the absurdism of working an office job in the modern world.",
        imgSrc: "/images/projectPics/games/SomethingsComing.png",
        sourceLink: "/src/somethingscoming.html",
        liveLink: "",
        type: "gamedev xr"
    },
    {
        title: "One Week Prototypes",
        tags: "Unity, C#, Blender, Procreate",
        description: "A project where I created 6 short game prototypes over the course of six weeks. Each one is also a different genre and style of game.",
        imgSrc: "/images/projectPics/games/GamePrototypes.png",
        sourceLink: "/src/weeklygames.html",
        liveLink: "",
        type: "gamedev"
    },
    {
        title: "The Lake House VR",
        tags: "Unity, C#, Virtual Reality, Meta Quest 2, Git, Blender",
        description: "My Interactive Multimedia Senior Thesis! Explore your family's old abandoned Lake House and solve puzzles.",
        imgSrc: "/images/projectPics/games/LakeHouse.png",
        sourceLink: "/src/thelakehouse.html",
        liveLink: "",
        type: "gamedev xr"
    },
        {
        title: "14th Century Breadmaking Simulator",
        tags: "Unity, C#, Blender",
        description: "Relaxing atmospheric baking simulator, set in the 14th century.",
        imgSrc: "/images/projectPics/games/BreadSim.png",
        sourceLink: "https://anadaren.itch.io/14th-century-breadmaking-simulator",
        liveLink: "https://anadaren.itch.io/14th-century-breadmaking-simulator",
        type: "gamedev"
    },
    {
        title: "Vampire Overlord",
        tags: "Unity, C#, Git",
        description: "Text Based RPG about ruling over a society of Vampires. Select Underlings to make decisions for you while you sleep.",
        imgSrc: "/images/projectPics/games/VampireOverlord.png",
        sourceLink: "https://rowanqueue.itch.io/vampire-overlord-2d",
        liveLink: "https://rowanqueue.itch.io/vampire-overlord-2d",
        type: "gamedev"
    },
    {
        title: "Moon Swap",
        tags: "Lua, Git, State Machines",
        description: "Atmospheric match 3 game, coded in Lua for the Love2D engine.",
        imgSrc: "/images/projectPics/games/MoonSwap.png",
        sourceLink: "https://github.com/anadaren/Moon-Swap",
        liveLink: "https://github.com/anadaren/Moon-Swap",
        type: "gamedev"
    },
    {
        title: "AR Shadowbox",
        tags: "Augmented Reality, Illustrator, BlippAR, Physical Media",
        description: "A 12 x 12 laser-cut wooden shadowbox, depicting an augmented reality underwater shipwreck scene, designed in Illustrator.",
        imgSrc: "/images/projectPics/ShadowBox.jpg",
        sourceLink: "https://youtube.com/shorts/eFDyzjSCj6g?feature=share",
        liveLink: "https://youtube.com/shorts/eFDyzjSCj6g?feature=share",
        type: "art xr"
    },
    {
        title: "3D Modeling",
        tags: "3D Modeling, Blender, Maya",
        description: "My Sketchfab account, showcasing all of my 3D artwork.",
        imgSrc: "/images/projectPics/sketchfab.png",
        sourceLink: "https://sketchfab.com/anadaren",
        liveLink: "https://sketchfab.com/anadaren",
        type: "art"
    },
    
]


export const Projects = () => {
   const [activeTab, setActiveTab] = useState("webdev"); // default tab
    
    return (
    <section id="projects">
        <div className="proj-top">
            <h1>Projects</h1>
            <hr className="proj-line"/>

            <button
                className={`tab-button ${activeTab === "all" ? "tab-selected" : ""}`}
                onClick={() => setActiveTab("all")}
                >All
            </button>

            <div id="tab-button-container">
                <button
                    className={`tab-button ${activeTab === "webdev" ? "tab-selected" : ""}`}
                    onClick={() => setActiveTab("webdev")}
                    >Web Dev
                </button>

                <button
                    className={`tab-button ${activeTab === "gamedev" ? "tab-selected" : ""}`}
                    onClick={() => setActiveTab("gamedev")}
                >Games
                </button>

                <button
                    className={`tab-button ${activeTab === "xr" ? "tab-selected" : ""}`}
                    onClick={() => setActiveTab("xr")}
                >XR
                </button>

                <button
                    className={`tab-button ${activeTab === "art" ? "tab-selected" : ""}`}
                    onClick={() => setActiveTab("art")}
                >Artwork
                </button>
            </div>
        </div>

        <div className="grid-container" id="projects">
            {projectsData
            .filter(project => activeTab === "all" ? true : project.type.includes(activeTab))
            .map((project, index) => {
                return (
                <Project
                    key={index}
                    title={project.title}
                    tags={project.tags}
                    description={project.description}
                    imgSrc={project.imgSrc}
                    sourceLink={project.sourceLink}
                    liveLink={project.liveLink}
                />
                );
            })}

        </div>

    </section>
    );
}