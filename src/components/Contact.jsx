import React from "react";

function Contact_Me() {
    return (
        <section className="contactme" id="contact">
            <div className="false1 project">&emsp;</div>
            <div className="contactBody">
                <div className="contactflex">
                    <h1 className="contactHead">Contact Me</h1>
                    <div className="contact-content">

                        <div className="contact-data">
                            <div className="contact-icon"><a href="https://github.com/arkaprava31" target="_blank">
                                <i class="fa-brands fa-github"></i>
                            </a></div>
                            <div className="contact-body"><h2>GitHub</h2></div>
                        </div>

                        <div className="contact-data">
                            <div className="contact-icon"><a href="https://tinyurl.com/mvv82sh5" target="_blank">
                                <i class="fa-brands fa-linkedin"></i>
                            </a></div>
                            <div className="contact-body"><h2>LinkedIn</h2></div>
                        </div>

                        <div className="contact-data">
                            <div className="contact-icon"><a href="mailto:arkapravachakraborty.off@gmail.com" target="_blank">
                                <i class="fa-solid fa-envelope"></i>
                            </a></div>
                            <div className="contact-body"><h2>Email</h2></div>
                        </div>

                        <div className="contact-data">
                            <div className="contact-icon"><a href="https://arkaprava31.github.io/Portfolio_Website/" target="_blank">
                                <i class="fa-solid fa-globe"></i>
                            </a></div>
                            <div className="contact-body"><h2>Website</h2></div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact_Me;