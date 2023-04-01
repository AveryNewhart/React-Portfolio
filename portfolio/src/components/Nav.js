import { React, useState } from "react";
import "../styles/Nav.css";
// functions being called in, location will be navigated to
import { useLocation, useNavigate } from "react-router-dom";

export default function Nav() {
    let location = useNavigate();
    const { pathname } = useLocation();
// setting names and location for when you click either one you are taken to that href location
    const [links, setLinks] = useState([
        {
            name: 'About',
            href: '/'
        },
        {
            name: 'Projects',
            href: '/projects'
        },
        {
            name: 'Contact',
            href: '/contact'
        },
        {
            name: 'Resume',
            href: '/resume'
        }
    ]);
    return (
        <div className="div-nav">
            {links.map((link) => {
                return (
                <a className="link-nav" onClick={() => {
                    location(link.href);
                }}
                >
                    {link.name}
                    </a>
                );
            })}
        </div>
    );
}