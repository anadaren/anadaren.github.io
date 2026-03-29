import React from 'react';

export const Project = (props) => {
    return (
        <div className="project-box webdev">
            <div className="proj-content">
                <img src={props.imgSrc}/>
                <h2>{props.title}</h2>
                <div className="tags">{props.tags}</div>
                <p>{props.description}</p>
            </div>

            <div className="proj-buttons">
                {props.sourceLink ? (
                    <a href={props.sourceLink} className="button-style" target="_blank">Source Code</a>
                )   : (null)}
                {props.liveLink ? (
                    <a href={props.liveLink} className="button-style" target="_blank">Live Demo</a>
                )   : (null)}
            </div>

        </div>
    );
}