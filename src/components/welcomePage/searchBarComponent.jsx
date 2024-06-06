import React, { useState } from "react";

import './welcomePageComponent.css';

function SearchBar({ onSearch }) {

    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city) {
            onSearch(city);
            setCity('')
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input id='searchBar' type="text" value={city} onChange={(e) => setCity(e.target.value)}
                    placeholder="Search for your city..." />
                <a href='/results'>
                    <button id='searchButton'>
                        Search
                    </button>
                </a>

            </form>
        </>
    )
};

export default SearchBar;