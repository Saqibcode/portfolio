import React from 'react'

import "./Portfolio.css"

import fyp from "../images/fyp.PNG"
import weather from "../images/weather.PNG"
import calculator from '../images/expense-tracker.PNG'


import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus, faTemperatureLow } from "@fortawesome/free-solid-svg-icons"
import {  PopupboxManager, PopupboxContainer } from 'react-popupbox'
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
        fadeIn: false,
        fadeInSpeed:500
    }



    const openPopupBoxWeather = () =>{
        const content=(
            <>
        <img className="portfolio-image-popupbox" src={weather} alt="Weather Project"/>
        <p>
        This is a weather app, mainly suitable for phones, this is a pure react App, which fetches
        data from weathermap API; also fetches weather for the next 4 days 
        </p>
        <b>Live Demo</b> <a className="hyper-link" onClick={() => 
        window.open("https://knowtheweathernow.herokuapp.com/")}>https://knowtheweathernow.herokuapp.com//</a>
        <br/>
        
        <b>Github</b><a className="hyper-link" onClick={() => 
        window.open("https://github.com/Saqibcode/weather-app")}> https://github.com/Saqibcode/weather-app </a>
    </>   
        )
     
    PopupboxManager.open({ content })
    }

    const popupConfigWeather ={
        fadeIn: true,
        fadeInSpeed:500
    }


    const openPopupBoxCalculator = () =>{
        const content=(
            <>
        <img className="portfolio-image-popupbox" src={calculator} alt="Weather Project"/>
        <p>
        This is a react application which uses contextAPI and Global state to allow the end users to 
        calculate total expense. You can check the demo and github link for more details:
        </p>
        <b>Live Demo</b> <a className="hyper-link" onClick={() => 
        window.open("https://calculate-expense.herokuapp.com/")}> https://calculate-expense.herokuapp.com/</a>
        <br/>
        
        <b>Github</b><a className="hyper-link" onClick={() => 
        window.open("https://github.com/Saqibcode/expense-tracker")}> https://github.com/Saqibcode/expense-tracker</a>
    </>   
        )
     
    PopupboxManager.open({ content })
    }

    const popupConfigCalculator ={
        fadeIn: true,
        fadeInSpeed:500
    }
        

    
    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center"> 

                <div className="portfolio-image-box" onClick={openPopupBoxFYP}>
                <img className="portfolio-image" src={fyp} alt="Driverless Car Project" />
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                </div>

                <div className="portfolio-image-box" onClick={openPopupBoxWeather}>
                <img className="weather-image" src={weather} alt="Driverless Car Project" />
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                </div>

                <div className="portfolio-image-box" onClick={openPopupBoxCalculator}>
                <img className="weather-image" src={calculator} alt="Driverless Car Project" />
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                </div>


            </div>
            </div>
            <PopupboxContainer {...popupConfigFYP}/>
            <PopupboxContainer {...popupConfigWeather}/>
            <PopupboxContainer {...popupConfigCalculator}/>
           
        </div>
    )
}

export default Portfolio;
