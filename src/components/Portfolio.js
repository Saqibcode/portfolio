import React from 'react'

import "./Portfolio.css"

import fyp from "../images/fyp.PNG"


import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus, faTemperatureLow } from "@fortawesome/free-solid-svg-icons"
import { PopupboxContainer, PopupboxManager } from 'react-popupbox'
import "react-popupbox/dist/react-popupbox.css";

import MyPDF from '../Project-Report.pdf';


const Portfolio= () =>{

    const openPopupBoxFYP = () =>{
        const content=(
            <>
        <img className="portfolio-image-popupbox" src={fyp} alt="University Project"/>
        <p>
        This project presents an in-car information system and dashboard 
        design of a driverless car. In this project, technologies such as axure xp was used
        to design the screens. Below address
        Links to a Live in-car simulator in 2D. Please feel free to scroll through the
        report for more information about this project
        </p>
        <b>Live Demo</b> <a className="hyper-link" onClick={() => 
        window.open("https://z28uox.axshare.com/")}>https://z28uox.axshare.com/</a>
        <br/>
        
        <a href={MyPDF} download="Report.pdf"> <b>Download Report</b>  </a>
    </>   
        )
     
    PopupboxManager.open({ content })
    }

    const popupConfigFYP ={
        titleBar:{
            enable: true,
            text:"In-car information system and dashboard design of a driverless car"
        },
        fadeIn:{
            enable: true,
            fadeInSpeed:500
        }

    }
    


    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center"> 
                <div className="portfolio-image-box" onClick={openPopupBoxFYP}>
                <img className="portfolio-image" src={fyp} alt="Driverless Car Project" />
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                </div>
        
               

                

               

                
                </div>
            </div>
            <PopupboxContainer {...popupConfigFYP}/>
        </div>
    )
}

export default Portfolio
