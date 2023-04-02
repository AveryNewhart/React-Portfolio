import React, { useState } from 'react';
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import ProjectDiv from "../components/Project.js"
// import photos of projects
import "../styles/App.css"
import "../styles/Project.css"

export default function Projects() {
    //calling in useState and creating the array of objects which will be my projects
    const [myProjects, setMyProjects] = useState([
        {
         image: "imglink1",
         title: "project1",
         description: "description and tools at end",
         deployed: "deployement link 1",
         github: "link to github"   
        },
        {
            image: "imglink1",
            title: "project1",
            description: "description and tools at end",
            deployed: "deployement link 1",
            github: "link to github"   
           },
           {
            image: "imglink1",
            title: "project1",
            description: "description and tools at end",
            deployed: "deployement link 1",
            github: "link to github"   
           },
           {
            image: "imglink1",
            title: "project1",
            description: "description and tools at end",
            deployed: "deployement link 1",
            github: "link to github"   
           },
           {
            image: "imglink1",
            title: "project1",
            description: "description and tools at end",
            deployed: "deployement link 1",
            github: "link to github"   
           },
           {
            image: "imglink1",
            title: "project1",
            description: "description and tools at end",
            deployed: "deployement link 1",
            github: "link to github"   
           }
    ]);



  return (
    <div>
         <div className='main-head'>
            <Header />
        </div>
        <div className='section-header'>
            <h2 className='header-h2'>Projects</h2>
        </div>
        <div className='project-div'>
            {myProjects.map((proj) => {
                return (
                <ProjectDiv
                image={proj.image}
                title={proj.title}
                description={proj.description}
                deployed={proj.deployed}
                github={proj.github}
                />
                );
            })}
        </div>
        <div className='main-foot'>
        <Footer />
        </div>
    </div>
  )
}
