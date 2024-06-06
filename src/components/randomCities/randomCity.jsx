import React from "react";

import './randomCities.css';

const RandomCity = ({ cities }) => {
    return (
        <div id='randomCitiesContent'>
            <h2 id='randomCityTitle'>
                Random Cities
            </h2>
            <div id='randomCityList'>
                {cities.map((city, index) => (
                     <h3 key={index}>
                     {city.name}: {city.temp} °F
                 </h3>
                ))}
            </div>
        </div>
    );
};

export default RandomCity;