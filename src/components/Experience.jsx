import React from "react";

function Experience() {
    return (
        <section className="resume-section"> 
            <div className="edu">
                <div className="edu-cont">
                    <h1>Work Experience</h1>
                    <div className="data">
                        <div className="left">
                            <i class="fa-solid fa-briefcase"></i>
                        </div>
                        <div className="right">
                            <h4>June, 2023 - July, 2023</h4>
                            <h5>Summer Intern</h5>
                            <h2>Oil and Natural Gas Corporation (ONGC), Kolkata</h2>
                            <h3 id="exp-h3">Communication Systems in ONGC</h3>
                            <div className="certi">
                                <div><i class="fa-solid fa-hand-point-right"></i></div>
                                <div className="certi-link"><a href="https://drive.google.com/file/d/1TTR2PhxPURGdeGjHfTpeZIAGO7hxo5hO/view?usp=sharing" target="_blank">Certificate</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="data">
                        <div className="left">
                            <i class="fa-solid fa-briefcase"></i>
                        </div>
                        <div className="right">
                            <h4>May, 2022 - June, 2022</h4>
                            <h5>Summer Intern</h5>
                            <h2>Bharat Sanchar Nigam Limited (BSNL), Kalyani</h2>
                            <h3 id="exp-h3">Advance Telecom Technology</h3>
                            <div className="certi">
                                <div><i class="fa-solid fa-hand-point-right"></i></div>
                                <div className="certi-link"><a href="https://drive.google.com/file/d/1abVOVyQvjdMfyIa28K9oWIl2lbHgwnpQ/view?usp=sharing" target="_blank">Certificate</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;