import React from "react";

import Greeting from "../../components/welcomePage/greetingComponent";
import SearchBar from "../../components/welcomePage/searchBarComponent";

import './welcomePage.css';


const apiKey = 'ea90873a3053ba7b4e31bea43946f0d1';

function WelcomePage() {

    const handleSearch = (city) => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city}&units=imperial`;
        
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data); 
            })
            .catch(error => {
                console.error('Error fetching the weather data:', error);
            });
    };

    return (
        <>
            <div id='welcomePageOSC'>
                <h1>Welcome to YOUR Weather now.</h1>
                <div id='welcomePageGreeting'>
                    <Greeting />
                </div>
                <div id='searchBarOSC'>
                    <SearchBar onSearch={handleSearch} />
                </div>
            </div>
        </>
    )
};

export default WelcomePage;