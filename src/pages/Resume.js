import React, { useState } from 'react';
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import "../styles/Resume.css";
import "../styles/App.css";

export default function Resume() {
    //calling in useState and creating the array of objects that will be rendered on the page
    const [frontEnd, setFrontEnd] = useState([
        {
            name: "HTML"
        },
        {
            name: "CSS"
        },
        {
            name: "JavaScript"
        },
        {
            name: "Bootstrap"
        },
        {
            name: "React"
        },
        {
            name: "Jquery"
        },
        {
            name: "Object-Oriented Programming - OOP"
        },
        {
            name: "Responsive Design & Mobile-First"
        },
        {
            name: "Debugging & Testing"
        }
    ]);

    //calling in useState and creating the array of objects that will be rendered on the page
    const [backEnd, useBackEnd] = useState([
        {
            name: "SQL Databases - SQL"
        },
        {
            name: "NoSQL Databases - MongoDB"
        },
        {
            name: "Express"
        },
        {
            name: "Web Apis"
        },
        {
            name: "Server Apis"
        },
        {
            name: "Third-Party Apis"
        },
        {
            name: "Object-Relational Mapping - ORM"
        }
    ]);


  return (
    <div className='main-div'>
        <div className='main-head'>
            <Header />
        </div>
        <div className='section-header'>
            <h2 className='header-h2'>Resume</h2>
            <a href="newResAvery.pdf" download className='download-res'>DOWNLOAD HERE</a>
        </div>
        <div className='main-skill-div'>
            <div className='front-end-div'>
                <div className='front-end-head'>
                    <h3 className='front-head header-h3'>Front End Skills</h3>
                </div>
                {frontEnd.map((skill, index) => {
                    return <li key={index} className='front-end-li'>{skill.name}</li>
                })}
            </div>
            <div className='back-end-div'>
                <div className='back-end-head'>
                    <h3 className='back-head header-h3'>Back End Skills</h3>
                </div>
                {backEnd.map((skill, index) => {
                    return <li key={index} className='back-end-li'>{skill.name}</li>
                })}
            </div>
        </div>
        <div className='main-foot'>
            <Footer />
        </div>
    </div>
  )
}
