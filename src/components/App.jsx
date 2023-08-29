import React from "react";
import Nav from "./Nav"
import Home from "./Home"
import About from "./About";
import Resume from "./Resume";
import Freelance from "./Freelance";
import Contact_Me from "./Contact";
import Footer from "./Footer";
import Footbar from "./Footbar";
import Projects from "./Projects";

function App(){
    return(
        <div>
            <Nav />
            <Home />
            <About />
            <Resume />
            <Projects />
            <Freelance />
            <Contact_Me />
            <Footer />
            <Footbar />
        </div>
    );
}

export default App;