import React from "react";
import { useLocation } from "react-router-dom";

function Results({ onSearch }) {

    const location = useLocation();
    const { city } = location.state || {};

    console.log("Results: ", onSearch)

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h1>Search Results</h1>
                        {city ? (
                            <p>Results for: {city}</p>
                        ) : (
                            <p>No city provided.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
};

export default Results;