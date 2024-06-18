import React from "react";


const Carousel = ({ cities }) => {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <div id="carouselExample" className="carousel slide w-100 mt-5 p-3">
                        <div className="carousel-inner">
                            {cities.map((city, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <h3 className="text-center text-decoration-underline mt-3 p-1">{city.name}:</h3>
                                    <div className="d-flex justify-content-center align-items-center mt-3 mb-3 p-2">
                                        <div className="">
                                            <h5 className="text-center">Temp: {city.temp} °F</h5>
                                            <h5 className="text-center">Cloud Coverage: {city.clouds} %</h5>
                                        </div>
                                        <div className="">
                                            <h5 className="text-center">Wind Speed: {city.wind} MPH</h5>
                                            <h5 className="text-center">Feels Like: {city.feel} °F</h5>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden bg-dark">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon text-dark" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
