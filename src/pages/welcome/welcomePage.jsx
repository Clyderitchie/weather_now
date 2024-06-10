import React, { useEffect, useState } from "react";
import Greeting from "../../components/welcomePage/greetingComponent";
import SearchBar from "../../components/welcomePage/searchBarComponent";
import Carousel from "../../components/randomCities/randomCitiesCarousel";
import './welcomePage.css';

const apiKey = 'ea90873a3053ba7b4e31bea43946f0d1';

const cities = [
    "Tokyo", "Delhi", "Shanghai", "São Paulo", "Mumbai", "Cairo", "Beijing", "Dhaka",
    "Mexico City", "Osaka", "Karachi", "Chongqing", "Istanbul", "Buenos Aires", "Kolkata",
    "Kinshasa", "Lagos", "Manila", "Rio de Janeiro", "Guangzhou", "Lahore", "Shenzhen",
    "Bangalore", "Moscow", "Tianjin", "Jakarta", "London", "Lima", "New York", "Bangkok",
    "Dongguan", "Nanjing", "Tehran", "Baoding", "Hong Kong", "Baghdad", "Riyadh",
    "Santiago", "Surat", "Madrid", "Suzhou", "Pune", "Harbin", "Houston", "Dallas",
    "Toronto", "Dar es Salaam", "Miami", "Belo Horizonte", "Los Angeles", "Paris", "Chennai",
    "Nagoya", "Chicago", "Ho Chi Minh City", "Hyderabad", "Kuala Lumpur", "Essen", "Bangui",
    "Kabul", "Casablanca", "Fukuoka", "Busan", "Sydney", "Athens", "Rome", "Barcelona",
    "Montreal", "Brussels", "Hanoi", "Algiers", "Vienna", "Alexandria", "Qingdao", "Brasília",
    "Xiamen", "Berlin", "Porto Alegre", "Dubai", "St. Petersburg", "Seattle", "San Francisco",
    "Kuwait City", "Bucharest", "Cape Town", "Addis Ababa", "Warsaw", "Pyongyang", "Jeddah",
    "Accra", "Amman", "Abu Dhabi", "Kano", "Damascus", "Minsk", "Giza", "Maputo"
];

function WelcomePage() {
    const [randomCities, setRandomCities] = useState([]);

    const handleSearch = async (city) => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city}&units=imperial`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (response.ok) {
                return { name: city, temp: data.main.temp };
            } else {
                console.error(`Error fetching weather data for ${city}: ${data.message}`);
                return { name: city, temp: 'N/A' };
            }
        } catch (error) {
            console.error(`Error fetching weather data for ${city}:`, error);
            return { name: city, temp: 'N/A' };
        }
    };

    const getRandomCities = (num) => {
        const shuffled = [...cities].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    };

    useEffect(() => {
        const fetchCitiesData = async () => {
            const randomCities = getRandomCities(5);
            console.log('Selected Random Cities:', randomCities);

            const results = await Promise.all(randomCities.map(city => handleSearch(city)));
            console.log('Fetched City Data:', results);
            setRandomCities(results);
        };

        fetchCitiesData();
    }, []);

    return (

        <div className="container">
            <div className="row">
                <div className="col-12 border border-primary">
                    <h1>Welcome to YOUR Weather now.</h1>
                </div>
            </div>
        </div>
        // <div id='welcomePageOSC'>
        //     <h1>Welcome to YOUR Weather now.</h1>
        //     <div id='welcomePageGreeting'>
        //         <Greeting />
        //     </div>
        //     <div id='searchBarOSC'>
        //         <SearchBar onSearch={handleSearch} />
        //     </div>
        //     <div id='randomCityOSC'>
        //         <Carousel cities={randomCities} />
        //     </div>
        // </div>
    );
}

export default WelcomePage;
