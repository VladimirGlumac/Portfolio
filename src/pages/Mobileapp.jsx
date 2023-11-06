import React, { useRef } from "react"
import { Link } from "react-router-dom"
import AnimatedPage from "../components/AnimatedPage"
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md"
import { AiFillGithub } from "react-icons/ai"

import WeatherImage1 from "./WeatherAppImg/WeatherApp1.jpg"
import WeatherImage2 from "./WeatherAppImg/WeatherApp2.jpg"
import WeatherImage3 from "./WeatherAppImg/WeatherApp3.jpg"
import WeatherImage4 from "./WeatherAppImg/WeatherApp4.png"

import AutoBestieImg1 from "./AutoBestieImg/AutoBestie1.png"
import AutoBestieImg2 from "./AutoBestieImg/AutoBestie2.jpg"
import AutoBestieImg3 from "./AutoBestieImg/AutoBestie3.jpg"
import AutoBestieImg4 from "./AutoBestieImg/AutoBestie4.jpg"
import AutoBestieImg5 from "./AutoBestieImg/AutoBestie5.jpg"
import AutoBestieImg6 from "./AutoBestieImg/AutoBestie6.jpg"

import MovieAppImg1 from "./MovieAppImg/MovieApp1.jpg"
import MovieAppImg2 from "./MovieAppImg/MovieApp2.jpg"
import MovieAppImg3 from "./MovieAppImg/MovieApp3.jpg"
import MovieAppImg4 from "./MovieAppImg/MovieApp4.jpg"
import MovieAppImg5 from "./MovieAppImg/MovieApp5.jpg"
import MovieAppImg6 from "./MovieAppImg/MovieApp6.jpg"
import MovieAppImg7 from "./MovieAppImg/MovieApp7.jpg"

import GoalAppImg1 from "./GoalAppImg/GoalApp1.jpg"
import GoalAppImg2 from "./GoalAppImg/GoalApp2.jpg"
import GoalAppImg3 from "./GoalAppImg/GoalApp3.jpg"
import GoalAppImg4 from "./GoalAppImg/GoalApp4.jpg"
import GoalAppImg5 from "./GoalAppImg/GoalApp5.jpg"

function WeatherAppSlider() {
    let imageContainerRef = useRef(null)
    const images = [
        WeatherImage1,
        WeatherImage2,
        WeatherImage3,
        WeatherImage4
    ]
    const prev = () => {
        if (imageContainerRef.current) {
            imageContainerRef.current.scrollLeft -= 200;
        }
    };

    const next = () => {
        if (imageContainerRef.current) {
            imageContainerRef.current.scrollLeft += 200;
        }
    };
    return (
        <div className="content">
            <div className="prev" onClick={prev}> <MdArrowBackIosNew /></div>
            <div className="slide-panel" ref={imageContainerRef}>{images.map((image, index) => { return (<img src={image} key={index} className="slider-img" />) })}</div>
            <div className="next" onClick={next}><MdArrowForwardIos /></div>
        </div>
    )
}
function MovieAppSlider() {
    let imageContainerRef = useRef(null)
    const images = [
        MovieAppImg1,
        MovieAppImg2,
        MovieAppImg3,
        MovieAppImg4,
        MovieAppImg5,
        MovieAppImg6,
        MovieAppImg7,
    ]
    const prev = () => {
        if (imageContainerRef.current) {
            imageContainerRef.current.scrollLeft -= 200;
        }
    };

    const next = () => {
        if (imageContainerRef.current) {
            imageContainerRef.current.scrollLeft += 200;
        }
    };
    return (
        <div className="content">
            <div className="prev" onClick={prev}> <MdArrowBackIosNew /></div>
            <div className="slide-panel" ref={imageContainerRef}>{images.map((image, index) => { return (<img src={image} key={index} className="slider-img" />) })}</div>
            <div className="next" onClick={next}><MdArrowForwardIos /></div>
        </div>
    )
}
function AutoBestieSlider() {
    let imageContainerRef = useRef(null)
    const images = [
        AutoBestieImg1,
        AutoBestieImg2,
        AutoBestieImg3,
        AutoBestieImg4,
        AutoBestieImg5,
        AutoBestieImg6,
    ]
    const prev = () => {
        if (imageContainerRef.current) {
            imageContainerRef.current.scrollLeft -= 200;
        }
    };

    const next = () => {
        if (imageContainerRef.current) {
            imageContainerRef.current.scrollLeft += 200;
        }
    };
    return (
        <div className="content">
            <div className="prev" onClick={prev}> <MdArrowBackIosNew /></div>
            <div className="slide-panel" ref={imageContainerRef}>{images.map((image, index) => { return (<img src={image} key={index} className="slider-img" />) })}</div>
            <div className="next" onClick={next}><MdArrowForwardIos /></div>
        </div>
    )
}

function GoalAppSlider() {
    let imageContainerRef = useRef(null)
    const images = [
        GoalAppImg1,
        GoalAppImg2,
        GoalAppImg3,
        GoalAppImg4,
        GoalAppImg5,
    ]
    const prev = () => {
        if (imageContainerRef.current) {
            imageContainerRef.current.scrollLeft -= 200;
        }
    };

    const next = () => {
        if (imageContainerRef.current) {
            imageContainerRef.current.scrollLeft += 200;
        }
    };
    return (
        <div className="content">
            <div className="prev" onClick={prev}> <MdArrowBackIosNew /></div>
            <div className="slide-panel" ref={imageContainerRef}>{images.map((image, index) => { return (<img src={image} key={index} className="slider-img" />) })}</div>
            <div className="next" onClick={next}><MdArrowForwardIos /></div>
        </div>
    )
}



export default function Mobileapp() {


    return (
        <AnimatedPage>
            <div className="Work-container">
                <div className="project-container">
                    <div className="work-text-div">
                        <h2>Movie App</h2>
                        <p className="text-container">I made this Movie app using TMDb API (The Movie Database) which helped me use data for current trending movies with specific info about them, and with the help of Async Storage I made ticket storage. In the end, it looks like a basic Cinema app that helps its customers buy tickets for chosen movies.
                        </p>
                        <Link className="work-link-project" to="https://github.com/VladimirGlumac/MovieTicketApp.git">
                            <button type="button" className="project-button">
                                See the Git repository
                                <AiFillGithub className="work-git-icon" />
                            </button>
                        </Link>
                    </div>
                    <div className="work-image-container">

                        <MovieAppSlider />

                    </div>
                </div>

                <div className="project-container">
                    <div className="work-text-div">
                        <h2>AutoBestie App</h2>
                        <p className="text-container">AutoBestie is a car dealership app that helps its users buy the newest models from various car types and their prices. This app is made with custom local data that is passed on to other pages via route/params.
                        </p>
                        <Link className="work-link-project" to="https://github.com/VladimirGlumac/AutoBestieApp.git">
                            <button type="button" className="project-button">
                                See the Git repository
                                <AiFillGithub className="work-git-icon" />
                            </button>
                        </Link>
                    </div>
                    <div className="work-image-container">

                        <AutoBestieSlider />

                    </div>
                </div>
                <div className="project-container">
                    <div className="work-text-div">
                        <h2>Weather App</h2>
                        <p className="text-container">Simple but useful app about current Weather, I created it using the popular OpenWeatherMap It uses current data with information about any searched city weather, In this app we can see a couple of useful information like Humidity, Visibility, Wind speed ...
                        </p>
                        <Link className="work-link-project" to="https://github.com/VladimirGlumac/WeatherApp.git">
                            <button type="button" className="project-button">
                                See the Git repository
                                <AiFillGithub className="work-git-icon" />
                            </button>
                        </Link>
                    </div>
                    <div className="work-image-container">

                        <WeatherAppSlider />

                    </div>
                </div>
                <div className="project-container">
                    <div className="work-text-div">
                        <h2>Goal App</h2>
                        <p className="text-container">Simple but useful app about current Weather, I created it using the popular OpenWeatherMap It uses current data with information about any searched city weather, In this app we can see a couple of useful information like Humidity, Visibility, Wind speed ...
                        </p>
                        <Link className="work-link-project" to="https://github.com/VladimirGlumac/SetGoalApp.git">
                            <button type="button" className="project-button">

                                See the Git repository
                                <AiFillGithub className="work-git-icon" />
                            </button>
                        </Link>
                    </div>
                    <div className="work-image-container">

                        <GoalAppSlider />

                    </div>
                </div>


            </div>
        </AnimatedPage>
    )
};
