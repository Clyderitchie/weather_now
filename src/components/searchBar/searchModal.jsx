import React, { useState } from "react";

function SearchModal({onSearch}) {

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
                    <div className="col-12">
                        <div className="input-group input-group-sm mb-3 p-1 ">
                            <input type="text"
                                className="form-control me-2 rounded-pill h-100vh text-bg-light"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-lg"
                                placeholder="Search for your city..."
                            />
                            <button type="button" className="btn btn-dark ms-2 rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleSubmit}>
                            Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            City
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchModal;