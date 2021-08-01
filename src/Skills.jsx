import React from "react"

const Skills = () => {
    return (

        <section className="skill" id="skill">
            <div className="title">
                <h2 className="section-title">My Skills</h2>
            </div>
            <div className="content">
                <div className="column col-left">
                    <h2 className="content-title">My learning</h2>
                    <p>1. FRONTEND DEVELOPMENT (HTML, CSS, JAVASCRIPT ,BOOTSTRAP) <br />2. BACKEND DEVELOPMENT (NODE.JS, DJANGO) <br />3. REST APIS (EXPRESS.JS, DJANGO REST FRAMEWORK) <br />4. DATABASES (MONGODB) <br />5. C++
                        <br />6. JAVA
                    </p>
                </div>
                <div className="column col-right">
                    <div className="box">
                        <div className="skills">
                            <div className="graph" style={{height:"85%"}}>
                                <div className="percent">85%</div>
                            </div>
                            <div className="name">HTML</div>
                        </div>

                        <div className="skills">
                            <div className="graph" style={{height:"78%"}}>
                                <div className="percent">78%</div>
                            </div>
                            <div className="name">CSS</div>
                        </div>


                        <div className="skills">
                            <div className="graph" style={{height:"65%"}}>
                                <div className="percent">65%</div>
                            </div>
                            <div className="name">Javascript</div>
                        </div>


                        <div className="skills">
                            <div className="graph" style={{height:"85%"}}>
                                <div className="percent">81%</div>
                            </div>
                            <div className="name">C++</div>
                        </div>


                        <div className="skills">
                            <div className="graph" style={{height:"75%"}}>
                                <div className="percent">75%</div>
                            </div>
                            <div className="name">JAVA</div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
};

export default Skills