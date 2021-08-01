import React from "react"
import Card from "./Card"
import img1 from "./Images/project11.PNG"
import img2 from "./Images/project22.PNG"
import img3 from "./Images/project33.PNG"



const Project = () => {
    return (
        <>
            <section className="project" id="project">
                <div className="title">
                    <h2 className="section-title" data-outline="Projects">Projects</h2>
                    <div className="all-items">
                        <Card
                            imgsrc={img1}
                            title="Food Website"
                            projectd="Food is for eating, and good food is to be enjoyed… I think food is, actually, very beautiful in itself. So, this Food website that is completely frontend made by using HTML ,CSS ,JAVASCRIPT."
                            link="https://puneet036.github.io/Foodwebsite.github.io/"
                        />
                        <Card
                            imgsrc={img2}
                            title="Login and Registration page"
                            projectd="Completely backend Login and Registration page.This is a user login and registration page made by using Node.js, Express, Mongoose, Hbs and some other packages."
                            link="https://github.com/Puneet036/loginbackend.github.io"
                        />
                        <Card
                            imgsrc={img3}
                            title="TODO app"
                            projectd="You can always change your plan, but only if you have one.It helps us break life into small steps.This is a user TODO app made by using Node.js, Express, Mongoose, ejs and some other packages."
                            link="https://github.com/Puneet036/Todoapp.github.io"
                        />
                    </div>
                </div>
            </section>

        </>
    )
};

export default Project