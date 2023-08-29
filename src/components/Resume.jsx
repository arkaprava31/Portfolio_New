import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Awards from "./Award";

function Resume() {
    return (
        <div>
            <Education />
            <Experience />
            <Skills />
            <Awards />
        </div>
    )
}

export default Resume;