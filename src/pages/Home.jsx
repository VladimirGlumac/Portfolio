import React from "react"
import { Link } from "react-router-dom"
import animationLotie from "../assets/images/animation.json"
import Lottie from "lottie-react"
import AnimatedPage from "../components/AnimatedPage"
import { AiOutlineDoubleRight, AiFillHtml5 } from "react-icons/ai"
import { Typewriter } from "react-simple-typewriter"


export default function Home() {
  return (
    <AnimatedPage>
      <div className="home-container">
        <div className="welcomeinfo">
          <div className="wellcometextdiv">
            <h2 className="welcometext">Hi! I'm Vladimir,    </h2>
            <div style={{ height: 100, display: 'flex', flexDirection: "column" }} className="introduction-2">
              <span className="span">
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={['A Front-End Developer', 'A Mobile App Developer']}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
              <h2 className="location-text">
                Located in Zrenjanin, Serbia.</h2>
            </div>
          </div>
          <div className="about-link">
            <Link to="/work" className="project-Link">See my projects<AiOutlineDoubleRight style={{ width: 30, height: 15, fontWeight: "bold" }} /></Link>
            <Link to="/Contacts" className="project-Link">Contact Me<AiOutlineDoubleRight style={{ width: 30, height: 15, fontWeight: "bold" }} /></Link>
          </div>
        </div>
        <Lottie animationData={animationLotie} className="lottie" />

      </div>
    </AnimatedPage>
  )
}