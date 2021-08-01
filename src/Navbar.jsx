import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link, animateScroll as scroll } from 'react-scroll'


const Navbar = () => {

    const [toggleMenu, settoggleMenu] = useState(false);

    const handleClick = () => {
        settoggleMenu(!toggleMenu)

    };

    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        header.classList.toggle("sticky", window.scrollY > 0);
    });

    return (
        <>
            <header>
                <a href="#" className="logo" onClick={() => scroll.scrollToTop()}><span>.</span>Pulto<span>.</span></a>
                <button className="menuToggle" onClick={handleClick}>
                    {toggleMenu ? <FaTimes /> : <FaBars />}
                </button>

                <ul className={toggleMenu ? "navigation active" : "navigation"}>
                <li><a href="#banner" onClick={handleClick} >Home</a></li>
                <li><a href="#about"  onClick={handleClick} >About</a></li>
                <li><a href="#skill"  onClick={handleClick} >Skills</a></li>
                <li><a href="#project"  onClick={handleClick} >Projects</a></li>
                <li><a href="#contact"  onClick={handleClick} >Contact</a></li>
            </ul>
                {/* <ul className={toggleMenu ? "navigation active" : "navigation"}>
                    <li><Link exact
                        activeClass="active"
                        to="/"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={1000}
                        onClick={handleClick}
                        activeClassName="selected"
                    >Home</Link></li>
                    <li><Link exact
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={1000}
                        onClick={handleClick}
                        activeClassName="selected"
                    >About</Link></li>
                    <li><Link exact
                        activeClass="active"
                        to="skill"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={1000}
                        onClick={handleClick}
                        activeClassName="selected"
                    >Skills</Link></li>
                    <li><Link exact
                        activeClass="active"
                        to="project"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={1000}
                        onClick={handleClick}
                        activeClassName="selected"
                    >Projects</Link></li>
                    <li><Link exact
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={1000}
                        onClick={handleClick}
                        activeClassName="selected"
                    >Contact</Link></li>
                </ul> */}
            </header>
        </>
    )
}


export default Navbar
