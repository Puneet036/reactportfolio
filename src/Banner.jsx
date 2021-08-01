import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import Button from '@material-ui/core/Button';
import {Link} from 'react-scroll'

const Banner = () => {
    const style = {
        background: 'linear-gradient(45deg, #4e9eff 20%, #4e9eff 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 36,
        padding: '9px 8px',
        marginTop: '5px',
        boxShadow: '0 2px 4px 1px rgba(33, 203, 243, .3)',
      };

    return (
        <section className="banner" id="banner">
            <div className="content">
                <h2>Hello, I'm<br /><span>Puneet Sharma</span></h2>
                <div className="animated-text">
                    <h3>Web Developer</h3>
                    <h3>Game Developer</h3>
                    <h3>Software Engineer</h3>
                </div>
                
                <Link to='project' smooth={true} duration={1000}>
                <Button  style={style} >See My Work</Button>
                </Link>
                <div className="media-icons">
                    <a href="https://www.facebook.com/Puneet369/" target="_blank"><FaFacebook className="fab" /></a>
                    <a href="https://www.instagram.com/_pulto_/" target="_blank"><FaInstagram className="fab" /></a>
                    <a href="https://github.com/Puneet036?tab=repositories" target="_blank"><FaGithubAlt className="fab" /></a>
                </div>
            </div>
        </section>





    )
};


export default Banner
