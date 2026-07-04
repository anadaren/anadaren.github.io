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
                    <a href={props.sourceLink} target="_blank"><img src="/public/images/icons/github.png" alt="GitHub"/></a>
                )   : (null)}
                {props.liveLink ? (
                    <a href={props.liveLink} target="_blank"><img src="/public/images/icons/external-link.png" alt="External Link"/></a>
                )   : (null)}
            </div>

        </div>
    );
}