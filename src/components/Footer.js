import React from 'react'

import {LinkedinShareButton, EmailIcon, EmailShareButton, LinkedinIcon, gith} from "react-share"
import {Link} from "react-scroll"

import "./Footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex"> 
                            <p>London</p>
                        </div>
                        <div className="d-flex">
                            {/* <a href="tel:555-555-555">+7(960)555-5555</a> */}
                            <p>United Kingdom</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} to="home"  className="footer-nav">Home</Link>
                                <br/>
                                <Link smooth={true} to="about" offset={-110} className="footer-nav">About me</Link>
                                
                            </div>
                            <div className="col">
                            <Link smooth={true} to="experience" offset={-110} className="footer-nav">Experience</Link>
                            <br/>
                            <Link smooth={true} to="portfolio" offset={-110} className="footer-nav">Portfolio</Link>
                            <br/>
                            </div>
                            <div className="col">
                            <Link smooth={true} to="contacts" offset={-110} className="footer-nav">Contacts</Link>
                            </div>
                            <p className="pt-3 text-center">
                           Copyright&copy;
                           {new Date().getFullYear()}&nbsp;|All Rights Reserved
                       </p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            
                            <LinkedinShareButton 
                            url={"https://www.linkedin.com/in/saqib-umar-b4b28510b/"}
                            >
                                <LinkedinIcon className="mx-3" size={36} alt={"Connect with me on Linkedin!"}/>
                            </LinkedinShareButton>
                            <p>Lets connect on LinkedIN!</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
