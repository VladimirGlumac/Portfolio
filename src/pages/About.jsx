import React from "react"
import { Link } from "react-router-dom"
import AnimatedPage from "../components/AnimatedPage"
import { BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoFigma } from "react-icons/bi"
import { AiOutlineDoubleRight, AiFillHtml5 } from "react-icons/ai"
import { BsFillBootstrapFill } from "react-icons/bs"


export default function About() {


    return (
        <AnimatedPage>
            <div className="about-container">

                <h2 className="Abouttext">
                    As a self-taught developer, I embarked on my journey by learning the fundamentals of web development, such as HTML, CSS, and JavaScript, initially as a side project, driven by my deep-seated passion for programming. As my understanding deepened, I decided to further enhance my skills and enrolled in a Scrimba course, where I delved into more advanced concepts of web development, particularly focusing on React. Using my newfound knowledge, I successfully developed various mobile applications and websites. Now, I am eager to transition this passion into a full-fledged profession. Currently, I am completing my studies for an Engineer of Energy Technologies degree at FTN, located in Novi Sad.</h2>
                <div className="skills" >
                    <h2 className="skillstext">My Skills:</h2>
                    <AiFillHtml5 style={{ height: 80, fontSize: 50, }} className="skilliconhtml" />
                    <BiLogoCss3 style={{ height: 80, fontSize: 50 }} className="skilliconcss" />
                    <BiLogoJavascript style={{ height: 80, fontSize: 50 }} className="skilliconjs" />
                    <BiLogoReact style={{ height: 80, fontSize: 50 }} className="skilliconreact" />
                    <BiLogoFigma style={{ height: 80, fontSize: 50 }} className="skilliconfigma" />
                    <BsFillBootstrapFill style={{ height: 80, fontSize: 50 }} className="skilliconfigma" />
                </div>
            </div>
        </AnimatedPage>
    )
};
