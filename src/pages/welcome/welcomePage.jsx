import React, { useEffect, useState } from "react";

import Greeting from "../../components/welcomePage/greetingComponent";
import SearchBar from "../../components/welcomePage/searchBarComponent";
import RandomCity from "../../components/randomCities/randomCity";

import './welcomePage.css';


const apiKey = 'ea90873a3053ba7b4e31bea43946f0d1';

const cities = [
    "Tokyo", "Delhi", "Shanghai", "São Paulo", "Mumbai", "Cairo", "Beijing", "Dhaka",
    "Mexico City", "Osaka", "Karachi", "Chongqing", "Istanbul", "Buenos Aires", "Kolkata",
    "Kinshasa", "Lagos", "Manila", "Rio de Janeiro", "Guangzhou", "Lahore", "Shenzhen",
    "Bangalore", "Moscow", "Tianjin", "Jakarta", "London", "Lima", "New York", "Bangkok",
    "Dongguan", "Nanjing", "Tehran", "Baoding", "Hong Kong", "Baghdad", "Riyadh",
    "Santiago", "Surat", "Madrid", "Suzhou", "Pune", "Harbin", "Houston", "Dallas",
    "Toronto", "Dar es Salaam", "Miami", "Belo Horizonte"
];

function WelcomePage() {
    const [randomCities, setRandomCities] = useState([]);

    const handleSearch = (city) => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city}&units=imperial`;
        
        return fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                return { name: city, temp: data.main.temp }; 
            })
            .catch(error => {
                console.error('Error fetching the weather data:', error);
                return { name: city, temp: 'N/A' }; 
            });
    };

    const getRandomCities = (num) => {
        const shuffled = cities.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    };

    useEffect(() => {
        const randomCities = getRandomCities(5);
        Promise.all(randomCities.map(city => handleSearch(city)))
            .then(results => setRandomCities(results));
    }, []);

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
                <div id='randomCityOSC'>
                    <RandomCity cities={randomCities} />
                </div>
            </div>
        </>
    );
}


export default WelcomePage;