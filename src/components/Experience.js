import React from 'react'

import "./Experience.css"

function Experience() {
    return (
        <div className="experience">
            
            <div className="d-flex justify-content-center my=5">
                <h1>Experience</h1>
            </div>

            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2019-Present</h3>
                        <h4>Developer, Cognizant</h4>
                            <p>As a graduate consultant in cognizant, I have been trained 
                                within SAP working on SAP UI5 and Gateway application which 
                                consists of SAP UI5, SAP Gateway and SAP ABAP. The followings 
                                are my key responsibilities:
                                 </p>
                                 <ul>
                                <li>One of the first to receive training on client site and Successfully completing 
                                    two months training consisting of SAP ABAP, SAP FIORI and SAP Gateway
                                    </li>
                                <li>Analysing and understanding business requirements and presenting a working mock-up</li>
                                <li>Designing a SAP UI5 application following the Fiori guidelines in order to 
                                    improve front-end of the application</li>
                                <li>
                                Connecting and integrating UI5 application to gateway using OData modelling 
                                </li>
                            </ul>
                    </div>
                </div>
                {/* - */}

                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2018</h3>
                        <h4>Graduate Trainee, QA Consulting</h4>
                        <p>
                        QA Consulting provided three months training which consisted of programming in Java, 
                        Databases, automation testing and DevOps. During this period I also obtained 
                        ISTQ foundation certificate for Testing as well as other hands on experience 
                        such as creating applications using combination of different technolgoies. 
                        During my stay at QA consulting I also:
                        </p>
                        <ul>
                                <li>delivered a project using an agile project management methodology</li>
                                <li>Built a CRUD application using Springboot, angular.js and H2 database</li>
                                <li>Created, manipulated and modified the table and fields using SQL commands</li>
                            </ul>
                    </div>
                </div>

                  {/* - */}

                  <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2015-2018</h3>
                        <h4>BSc(Hons), Kingston University (2:1)</h4>
                            <p>
                            Many aspects of technology were covered while I was at university. 
                            It enabled me to look at problems from techincal standpoint as well as business.
                            The main reason why I chose computer science was to understand what is within 
                            the world of technology; which enabled me to decide which career path to choose from.
                            The followings are the modules that were covered:
                            </p>
                            <ul>
                                <li>Programming (Java, .Net)  </li>
                                <li>Business analysis </li>
                                <li>Database </li>
                                <li>Networking </li>
                                <li>Internet Security </li>
                                <li>User experience</li>
                                <li>Project Management </li>
                            </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience
