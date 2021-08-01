import React from 'react'
import img from "./Images/about-us.png"
import pdf from "./Puneet's Resume.pdf"

import Button from '@material-ui/core/Button';

const About = () => {
    const style = {
        background: 'linear-gradient(45deg, #4e9eff 20%, #4e9eff 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 36,
        padding: '9px 8px',
        marginTop: '10px',
        boxShadow: '0 2px 4px 1px rgba(33, 203, 243, .3)',
      };

    return (

        <section className="about" id="about">
            <div className="title">
                <h2 className="section-title">About Me</h2>
            </div>
            <div className="content">
                <div className="column col-left">
                    <div className="img-card">
                        <img src={img} alt="Image Not Found " />
                    </div>
                </div>
                <div className="column col-right ">
                    <h2 className="content-title ">Hey! My name is Puneet</h2>
                    <p> I'm a web developer . Who enjoys building things that live on the internet. I develop websites that provide user interface with efficient and modern backends. I'm currently a third year student at <a href="https://www.bitraipur.ac.in/ "
                        target="_blank ">BIT Raipur</a> pursuing a degree in <a href="https://en.wikipedia.org/wiki/Computer_science " target="_blank ">Computer
                            Science</a>.
                        <br /> I love learning new and better ways to create seamless user experience with clean ,efficient ,and scalable code.I consider work as an ongoing education, i'm always looking for opportunities to work with those who are willing to
                        share their knowledge as much as i want to learn. <br /> And i love playing PC games , table-tennis & football .
                    </p>
                    
                    
                <Button  style={style} target="_blank" href={pdf}>Resume</Button>
                
                </div>
            </div>


        </section>




    )
};


export default About
