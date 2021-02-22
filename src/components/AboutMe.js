import React from "react";

import "./AboutMe.css";
import "../App.css"
//import author from "../me.jpg";

function AboutMe() {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                      /*<img className="profile-img" src="#" alt="author..." />*/  
                    </div>
                </div>

                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About me</h1>
                    <p>
                    I am a highly motivated, self-confident individual 
                    who is able to adapt in a wide range of technical situations. 
                    I have discplined my life through hard work and managing both 
                    university and worklife. I can grasp new ideas and theories swiftly, 
                    due to the vast experience in different situations.
                    Through out my academic life, I have gained knowledge in 
                    various aspects of the technology industry, for example, 
                    programming, database and user experience. I have experience 
                    in all phases of the software development lifecycle and have 
                    an excellent track record of working within tight deadlines and 
                    challenging condition. 
                    </p>
                </div>

            </div>
        </div>
    )
}

export default AboutMe
