import React, { useState } from 'react';
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import ProjectDiv from "../components/Project.js"
// import photos of projects
import FlickTracker from "../imgs/flicktracker.png";
import TheFlickTracker from "../imgs/theproject3.png";
import Music from "../imgs/music.png";
import ReviewOne from "../imgs/reviewone.png";
import WorkDay from "../imgs/wordday.png";
import ReadMeGen from "../imgs/readmeGen.png";
import SocialMedia from "../imgs/socialmediabackend.png";
import "../styles/App.css"
import "../styles/Project.css"

export default function Projects() {
    //calling in useState and creating the array of objects which will be my projects
    const [myProjects, setMyProjects] = useState([
        {
            image: TheFlickTracker,
            title: "The Flick Tracker",
            description: "Create an account, Search movies, save them wo watched or watchlist, follow other users.",
            deployed: "https://the-flick-tracker.herokuapp.com/",
            github: "https://github.com/AveryNewhart/The-Flick-Tracker"   
        },
        {
            image: FlickTracker,
            title: "Flick Tracker",
            description: "Create an account and search up movies using IMDB Third-Party-Api and then write reviews on those movies. Each review will be posted to the community page.",
            deployed: "https://flick-tracker.herokuapp.com/",
            github: "https://github.com/NicholasTozzi/flick-tracker"   
        },
        {
            image: Music,
            title: "Musician Website",
            description: "This is a basic template for any musicians website. You can have an about page with a picture and short bio. Then there is a store for the musician, and also a tours page to view the musicians upcoming tours.",
            deployed: "https://averynewhart.github.io/Musician-Website/",
            github: "https://github.com/AveryNewhart/Musician-Website"    
           },
           {
            image: ReviewOne,
            title: "Netflix Review",
            description: "You will be able to search for a movie on Netflix and reviews will be displayed along with the closest movie and the data with it. Then you will be able to write reviews which will be posted on a review page.",
            deployed: "https://averynewhart.github.io/Netflix-Review-Resource/",
            github: "https://github.com/AveryNewhart/Netflix-Review-Resource"   
           },
           {
            image: WorkDay,
            title: "Work Day Schedule",
            description: "This will help you schedule your day. Depending on the current time, the time blocks background color will change. Red is the current hour. Grey is in the past. Green is in the future. Clicking save will log data in local storage",
            deployed: "https://averynewhart.github.io/Day-Planner/",
            github: "https://github.com/AveryNewhart/Day-Planner"   
           },
           {
            image: ReadMeGen,
            title: "README Generator",
            description: "You will prompted a series of questions/statements which will produce a readme. The sections will be the title, description, installation, usage, license, contributions, tests, and you will enter your github username and email where people can contact you.",
            deployed: "https://drive.google.com/file/d/1FvsMK9ErkjRXaTZiqIoq6VIzYojyGJMI/view",
            github: "https://github.com/AveryNewhart/README-Generator"   
           },
           {
            image: SocialMedia,
            title: "Social-Media Backend",
            description: "The backend routes for a basic social media application. Where a user has thoughts, friends, can add reactions, along with being able to update all of them.",
            deployed: "https://drive.google.com/file/d/1Niv2UUrKq0y4PreW8bW5NCwMH163WCtw/view",
            github: "https://github.com/AveryNewhart/Social-Network-Backend"   
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
        <div className='big-foot'>
        <Footer />
        </div>
    </div>
  )
}
