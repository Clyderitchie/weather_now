import React from "react";

// import SearchBar from "./searchBarComponent";

import './welcomePageComponent.css'

function Greeting() {

    return (

        <>
            <div id='greetingOSC'>
                <h2>Welcome to Your Weather,
                    where you can get your weather now when you need it most.</h2>
                <img id='greetingIMG' src="src/assets/weatherRadar.jpeg" alt="Weather Radar image" />
                
            </div>
        </>
    )
};

export default Greeting;