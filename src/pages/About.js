import React from 'react'
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import MyPic from "../imgs/mynewpic.png";
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
                <p className='p-text'>Hi, my name is Avery Newhart, and I am a dedicated and motivated individual with a passion for programming. At the young age of 23, I have already had a diverse range of experience, from serving in the United States Air Force to pursuing a degree in Millersville University. After my service, I discovered my love for programming and quickly enrolled in the Full Stack Bootcamp through UCF, where I honed my skills and developed a deep understanding of programming languages and web development.
<br></br>
I am committed to continuously learning more and more about the field, and I am constantly seeking to expand my knowledge and skills. I take pride in my ability to work independently and as part of a team, and I am always eager to take on new challenges and responsibilities. My dedication and passion for programming make me an ideal candidate for any position in the field.
<br></br>
When given the opportunity, I am confident that I can make significant contributions to any organization, and I am excited to apply my skills and knowledge in a professional setting. Thank you for considering my application.
                </p>
            </div>
        </div>
        <div className='main-foot'>
        <Footer />
        </div>
    </div>
  );
}



