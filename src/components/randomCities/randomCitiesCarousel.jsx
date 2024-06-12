import React from "react";
import './randomCities.css';

const Carousel = ({ cities }) => {

    console.log('Cities in Carousel:', cities);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h2 className="mt-2 p-3 text-center">
                        Random Cities
                    </h2>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <div id="carouselExample" className="carousel slide w-100 mt-5 p-3">
                        <div className="carousel-inner border border-secondary">
                            {cities.map((city, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <h3 className="text-center">{city.name}: {city.temp} °F</h3>
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
