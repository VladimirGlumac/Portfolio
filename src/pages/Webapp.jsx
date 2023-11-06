
// Webapp.jsx
import React from 'react';
import CrustyWeb from "../assets/images/Crustycreations.png";
import FlightWeb from "../assets/images/FlightAgency.png";
import FotoWeb from "../assets/images/Fotographix.png";
import './Webapp.css';

export default function Webapp() {
    return (
        <div className='web-container'>

            <div className='image-container'>
                <img src={CrustyWeb} alt='Crusty Creations' className='container-img' />
                <div className='hover-text'>
                    <h2>Crusty Creations</h2>
                    <p>This website is made with React and Bootstrap, styled with CSS. It's a comprehensive platform dedicated to all things bakery. Users can explore a range of features including free career opportunities, renowned recipes, the bakery's location, and its distinctive specialties</p>
                    <a href="https://zesty-puffpuff-5ab822.netlify.app/" target="_blank" rel="noopener noreferrer" className='web-link-button'>
                        Visit Website
                    </a>
                </div>
            </div>
            <div className='image-container'>
                <img src={FlightWeb} alt='Crusty Creations' className='container-img' />
                <div className='hover-text'>
                    <h2>Flight Agency</h2>
                    <p>This website is crafted using the React framework and styled with CSS. It stands as a comprehensive platform committed to enabling seamless travel experiences. Visitors can explore a range of services, including flight bookings, travel packages, and exclusive deals. Discover a world of possibilities with convenient access to flight information, destination insights, and personalized itineraries, making every journey a memorable adventure.</p>
                    <a href="https://exquisite-cannoli-3a69ac.netlify.app/" target="_blank" rel="noopener noreferrer" className='web-link-button'>
                        Visit Website
                    </a>
                </div>
            </div>
            <div className='image-container'>
                <img src={FotoWeb} alt='Crusty Creations' className='container-img' />
                <div className='hover-text'>
                    <h2>Fotographix</h2>
                    <p>Fotographix is a dynamic platform for sharing, downloading, and purchasing captivating photographs. Explore a diverse collection of images, connect with a vibrant photography community, and discover essential photography gear to fuel your creative journey</p>
                    <a href="https://playful-longma-d56517.netlify.app/" target="_blank" rel="noopener noreferrer" className='web-link-button'>
                        Visit Website
                    </a>
                </div>
            </div>

        </div>
    );
}
