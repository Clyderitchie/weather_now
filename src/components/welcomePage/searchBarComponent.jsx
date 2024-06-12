import React, { useState } from "react";

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

            <div className="container-fluid text-center item-center">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 border border-black">
                        <div className="input-group input-group-sm mb-3 p-1 ">
                            <input type="text"
                                className="form-control me-2 rounded-pill h-100vh text-bg-light"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-lg"
                                placeholder="Search for your city..."
                            />
                            <button type="submit" className="btn btn-dark ms-2 rounded-pill">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
};

export default SearchBar;