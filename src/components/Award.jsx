import React from "react";

function Awards() {
    return (
        <section className="awards">
            <div className="edu">
                <div className="edu-cont">
                    <h1>Awards</h1>

                    <div className="data">
                        <div className="left">
                            <i class="fa-solid fa-award"></i>
                        </div>
                        <div className="right">
                            <h2>Winner of Social Impact Track, HoyaHacks'22</h2>
                            <h3 id="exp-h3">Issued by HoyaHacks</h3>
                            <div className="certi">
                                <div><i class="fa-solid fa-hand-point-right"></i></div>
                                <div className="certi-link"><a href="https://devpost.com/software/13-debug-thugs" target="_blank">Here</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="data">
                        <div className="left">
                            <i class="fa-solid fa-award"></i>
                        </div>
                        <div className="right">
                            <h2 id="right-head">1st Place in the National level content creation competition, TECHCRIO</h2>
                            <h3 id="exp-h3">Issued by Team Infitude</h3>
                            <div className="certi">
                                <div><i class="fa-solid fa-hand-point-right"></i></div>
                                <div className="certi-link"><a href="https://drive.google.com/file/d/1gaCLL0lUjfBVZPipunHUocwYkPwH1NkK/view?usp=sharing" target="_blank">Here</a></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Awards;