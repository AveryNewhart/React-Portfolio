import React from 'react'
import '../styles/Header.css'
import '../styles/Nav.css'
// Navigation will be called in inside the div, it is calling in the component of Nav.js
import Navigation from './Nav' 

export default function Header() {
    return (
        <div className='div-header div-header-s'>
            <h1 className='header-h1'>Avery Newhart</h1>
            <Navigation />       
        </div>
    )
}  

