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
                <h3 className="proj-title">{props.title}</h3>
                <p className="proj-description">{props.description}</p>
                <a className="proj-links" href={props.deployed}>Deployed App</a>
                <a className="proj-links" href={props.github}>Github Repo</a>
            </div>
       ; </div>
    )
}