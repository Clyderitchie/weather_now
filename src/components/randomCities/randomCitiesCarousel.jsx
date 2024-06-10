import React from "react";
import './randomCities.css';

const Carousel = ({ cities }) => {

    // console.log('Cities in Carousel:', cities);

    return (
        <div id='randomCitiesContent'>
            <h2 id='randomCityTitle'>
                Random Cities
            </h2>
            <div id='carousel'>
                {cities.map((city, index) => (
                    <div id='randomCityList' key={index} className='carouselItem'>
                        <h3>{city.name}: {city.temp} °F</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
