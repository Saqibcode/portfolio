import React from 'react'

import "./Portfolio.css"

import netflix from "../images/netflix.png"
import cityGuide from "../images/city-guide-app.png"
import portfolio from "../images/portfolio.png"
import taskManager from "../images/task-manager.png"

import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus, faTemperatureLow } from "@fortawesome/free-solid-svg-icons"
import { PopupboxContainer, PopupboxManager } from 'react-popupbox'
import "react-popupbox/dist/react-popupbox.css";

const Portfolio= () =>{

    const openPopupBoxNetflix = () =>{
        const content=(
            <>
        <img className="portfolio-image-popupbox" src={netflix} alt="Netflix"/>
        <p>
            Description
        </p>
        <b>Github</b> <a className="hyper-link" onClick={() => 
        window.open("https://github.com/Saqibcode/QaCinema")}>https://github.com/Saqibcode/QaCinema</a>
    </>   
        )
     
    PopupboxManager.open({ content })
    }

    const popupConfigNetflix ={
        titleBar:{
            enable: true,
            text:"Example One"
        },
        fadeIn:{
            enable: true,
            fadeInSpeed:500
        }

    }
    


    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center"> 
                <div className="portfolio-image-box" onClick={openPopupBoxNetflix}>
                <img className="portfolio-image" src={netflix} alt="Netflix" />
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                </div>
        
                {/* - */}
               
                <div className="portfolio-image-box">
                <img className="portfolio-image" src={cityGuide} alt="City and guide" />
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                </div>

                {/* - */}
                <div className="portfolio-image-box">
                <img className="portfolio-image" src={portfolio} alt="Portfolio" />
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                </div>

                {/* - */}
                <div className="portfolio-image-box">
                <img className="portfolio-image" src={taskManager} alt="task Manager" />
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                </div>

                
                </div>
            </div>
            <PopupboxContainer {...popupConfigNetflix}/>
        </div>
    )
}

export default Portfolio
