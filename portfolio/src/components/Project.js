import React from "react";
import '../styles/Project.css';

export default function Propject(props) {
    return (
        <div className="div-project">
            <figure>
                <img
                src={props.image}
                alt='test'
                className="img-proj"
                />
            </figure>
            <div className="proj-body">
                <h2 className="proj-title">{props.title}</h2>
                <p className="proj-description">{props.description}</p>
                <p className="proj-tools">Tools: {props.tools}</p>
                <p className="proj-links" href={props.gitRepo}>Github Repository</p>
                <p className="proj-links" href={props.deployedApp}>Deployed App</p>
            </div>
       ; </div>
    )
}