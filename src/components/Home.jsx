import React from "react";
import Typed from "react-typed";
function Home() {
    return (
        <setion class="home" id="home">
            <div class="home-content">
                <div className="main">
                <h2>HEY! I AM,</h2>
                <h1 className="name">Arkaprava Chakraborty</h1>
                <div className="wrapper">
                    {" "}
                </div>
                <div className="animated-typing">
                    <Typed
                        strings={["I'm a Web Designer", "I'm a Developer", "I'm a Coder"]}
                        typeSpeed={150}
                        backSpeed={150}
                        loop
                    />
                </div>
                </div>
            </div>
        </setion>
    );
}

export default Home;
