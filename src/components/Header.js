import React from 'react'

import Typed from "react-typed";

import "./Header.css";
import "../App.css";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Passionate. Creative. Inventive</h1>
                <Typed
                className = "typed-text"
                strings={["Web design", "Web Development", "Branding"]}
                typeSpeed={50}
                backSpeed={80}
                loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
