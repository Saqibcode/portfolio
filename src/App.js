import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";

import "./components/Header.css";
import "./App.css";
import "./components/Navbar.css";
import "./components/Experience.css";
import "./components/Portfolio.css"


import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from './components/AboutMe';
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import PortfolioN from "./components/portfolioN";
import Contact from "./components/Contacts";

import { popupboxManager, popupboxContainer} from "react-popupbox"


function App() {
  return(
    <>
    
    <Particles
      className="particles-canvas"
      params={{
          particles:{
            number: {
              value : 40,
               density: {
                 enable: true,
                 value_area: 900
               }
            },
            shape:{
                 type: "circle",
                 stroke:{
                   width: 6,
                   color: "#f9ab00"
                 }
            }
          }
          
      }}
    />
    <Navbar />
    <Header />
    <AboutMe />
    <Experience />
    <Portfolio />
    <Contact />
    </>
  );
}

export default App;
