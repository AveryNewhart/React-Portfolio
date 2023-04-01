import React from 'react';
import Twitter from '../imgs/twit-bw.png';
import LinkedIn from '../imgs/linkedin-bw.png';
import Github from '../imgs/git-bw.png';
import '../style/Footer.css';

export default function Footer() {
    return (
        <div className='div-footer footer-img'>
            <a  className='f-img' href=""><img src={Twitter} alt='twitter' className='f-img'/></a>
            <a  className='f-img' href=""><img src={LinkedIn} alt='linkedIn' className='f-img'/></a>
            <a  className='f-img' href=""><img src={Github} alt='gitHub' className='f-img'/></a>
        </div>
    )
}
