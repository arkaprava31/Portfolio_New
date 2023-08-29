import React from "react";

function Projects() {
    return (
        <section id="proj">
            <div className="false1 project">&emsp;</div>
            <div className="projbody">
                <div className="projhead"><h1>My <span>Projects</span></h1></div>
                <div className="proj-cont-body">

                    <div class="proj-container">

                        <div class="proj-box">
                            <img src="images/proj2.jpg" alt="" />
                            <div class="proj-layer">
                                <h4>CoinRhythm</h4>
                                <a href="https://coinrhythm.netlify.app/" target="_blank">
                                    <i class="fa-solid fa-link"></i>
                                </a>
                            </div>
                        </div>

                        <div class="proj-box">
                            <img src="images/proj1.jpg" alt="" />
                            <div class="proj-layer">
                                <h4>DrLeaf</h4>
                                <a href="https://github.com/AniruddhA-Omni/HoyaHacks2022" target="_blank">
                                    <i class="fa-solid fa-link"></i>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Projects;