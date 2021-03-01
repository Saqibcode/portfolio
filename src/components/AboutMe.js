import React from "react";

import "./AboutMe.css";
import "../App.css"
import author from "../me.jpg";

function AboutMe() {
    return (
        <div id="about" className="aboutme">
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className="profile-img" src={author} alt="author..." /> 
                    </div>
                </div>

                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About me</h1>
                    <p>
                    I have been involved in many aspects of technology, 
                    from designs to hard coding. I can grasp new ideas 
                    and theories swiftly, due to the vast experience in 
                    different situations. Through out my academic life 
                    and work life, I have gained knowledge in various 
                    aspects of the technology industry, for example, 
                    programming, database and user experience. I am 
                    currently focusing on full stack development, 
                    using technologies such as Mongo DB, Express JS, 
                    React JS and Node JS. I also have experience in 
                    other languages such as Java (three years in university) 
                    and SQL.
                    </p>
                </div>

            </div>
        </div>
        </div>
    )
}

export default AboutMe
