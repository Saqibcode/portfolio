import React from 'react'

import Typed from "react-typed";

import "./Header.css";
import "../App.css";

import {Link} from "react-scroll";

const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h1>Passionate. Creative. Inventive</h1>
                <Typed
                className = "typed-text"
                strings={["Web design", "Web Development", "User Experience"]}
                typeSpeed={50}
                backSpeed={80}
                loop
                />
                <Link smooth={true} to="contacts" offset={-110} href="" className="btn-main-offer">Contact Me</Link>
            </div>
        </div>
    )
}

export default Header
