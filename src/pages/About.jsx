import React from "react"
import { Link } from "react-router-dom"
import AnimatedPage from "../components/AnimatedPage"
import { BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoFigma } from "react-icons/bi"
import { AiOutlineDoubleRight, AiFillHtml5 } from "react-icons/ai"


export default function About() {


    return (
        <AnimatedPage>
            <div className="about-container">

                <h2 className="Abouttext">
                    As a self-thought developer, I started learning the basics of web development like HTML, CSS and JavaScript as a side project because I was always driven towards programming. After I got familiar with the basics I enrolled in one of the courses on Scrimba where I learned more advanced web development skills like React which I used to build mobile apps and websites. Now I'm confident enough to turn this passion into a profession. Currently, I'm finishing studies for Engineer of Energy Technologies on FTN located in Novi Sad.</h2>
                <div className="skills" >
                    <h2 className="skillstext">My Skills:</h2>
                    <AiFillHtml5 style={{ height: 80, fontSize: 50, }} className="skilliconhtml" />
                    <BiLogoCss3 style={{ height: 80, fontSize: 50 }} className="skilliconcss" />
                    <BiLogoJavascript style={{ height: 80, fontSize: 50 }} className="skilliconjs" />
                    <BiLogoReact style={{ height: 80, fontSize: 50 }} className="skilliconreact" />
                    <BiLogoFigma style={{ height: 80, fontSize: 50 }} className="skilliconfigma" />
                </div>
            </div>
        </AnimatedPage>
    )
};
