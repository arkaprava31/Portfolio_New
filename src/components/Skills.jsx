import React from "react";

function Skills() {
    return (
        <section className="skills">
            <div className="edu">
                <div className="edu-cont">
                    <h1>My Skills</h1>
                    <div className="skill-gd">
                        <div className="skill-val">
                            <div className="skill-head">
                                <span>HTML5</span>
                            </div>
                            <div className="progress-bar fst">

                            </div>
                        </div>
                        <div className="skill-val">
                            <div className="skill-head">
                                <span>CSS3</span>
                            </div>
                            <div className="progress-bar sec">

                            </div>
                        </div>
                        <div className="skill-val">
                            <div className="skill-head">
                                <span>React JS</span>
                            </div>
                            <div className="progress-bar thd">

                            </div>
                        </div>
                    </div>

                    <div className="skills-gd-1">
                        <div className="skill-box-1" id="skillbox">
                            <h3>Programming Languages:</h3>
                            <ul>
                                <li>C/C++</li>
                                <li>Java</li>
                                <li>JavaScript</li>
                                <li>MATLAB</li>
                            </ul>
                        </div>
                        <div className="skill-box-2" id="skillbox">
                            <h3>Tools & Platforms:</h3>
                            <ul>
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>VS Code</li>
                                <li>Netlify</li>
                            </ul>
                        </div>
                        <div className="skill-box-3" id="skillbox">
                            <h3>Frameworks & Libraries:</h3>
                            <ul>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>MongoDB</li>
                                <li>jQuery</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;