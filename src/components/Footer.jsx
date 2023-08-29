import React from "react";

function Footer() {
    return (
        <section className="foot">
            <div className="foot-cont">
                <div className="lefti">
                    <div className="foot-head"><h2>Arkaprava Chakraborty</h2></div>
                    <div className="foot-txt"><p>Zealous Web Developer, C/C++ programmer from West Bengal, India</p></div>
                </div>
                <div className="righti">
                    <div className="cols">
                        <h3>Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#resume">Resume</a></li>
                            <li><a href="#proj">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="cols">
                        <h3>Social Media</h3>
                        <div className="foot-icons">
                            <a href=""><i class="fa-brands fa-linkedin"></i></a>
                            <a href=""><i class="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;