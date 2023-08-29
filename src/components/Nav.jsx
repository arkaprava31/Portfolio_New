import React, { useState } from "react";
function App() {
    const [color, setColor] = useState(false);
    const changecolor = () => {
        if (window.scrollY >= 650) {
            setColor(true);
        }
        else {
            setColor(false);
        }
    };
    window.addEventListener("scroll", changecolor);

    const [menu, setMenu] = useState(false);
    const changemenu = () => {
        setMenu(current => !current);
    };


    return (
        <header>
            <div className={color ? "header header-bg" : "header"}>
                <a href="#" className="logo">Arkaprava</a>

                <nav class="navbar">
                    <a href="#home" className="active">Home</a>
                    <a href="#about">About</a>
                    <a href="#resume">Resume</a>
                    <a href="#proj">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
                <div className="toggle-button" id="tgl_btn">
                    <i className="fa-solid fa-bars" onClick={changemenu}></i>
                </div>
                <div className={menu ? "drop-menu open" : "drop-menu"}>
                <div className="drop-menu-bar">
                    <a href="#home" className="active">Home</a>
                    <a href="#about">About</a>
                    <a href="#resume">Resume</a>
                    <a href="#proj">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
            </div>
        </header>

    );
}

export default App;
