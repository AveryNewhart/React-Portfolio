import React from 'react'
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import MyPic from "../imgs/methree.png";
import "../styles/App.css"

export default function About() {
  return (
    <div>
        <div className='main-head'>
            <Header />
        </div>
        <div className='section-header'>
                <h2 class="header-h2">About Me</h2>
            </div>
        <div className='about-body'>
            <div className='about-pic'>
                <img 
                    src={MyPic}
                    alt="my picture"
                    className='my-pic'
                />
            </div>
            <div className='about-p'>
                <p className='p-text'>My name is Avery Newhart and I'm 23 years old! I was born in the small town of Tunkhannock, Pennsylvania. 
                    After highschool, I went to Millersville University for a year before I ended up enlisting into the United States Air Force and did weather! 
                    I got out in 2021 and began thinking of my next step which consisted of me falling in love with programming. 
                    The Full Stack Bootcamp through UCF, was my next step after deciding that I wanted to have a career in programming.
                    I love to continuously learn more and more, and would love to have an opportunity to apply my skills in a professional setting.
                </p>
            </div>
        </div>
        <div className='main-foot'>
        <Footer />
        </div>
    </div>
  );
}



