import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "../searchBar/searchBarComponent";

function Nav({ onSearch }) {

    return (
        <>
            <div className="container-fluid mb-5 w-100 p-3 border border-bottom border-black">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                            <Link className="text-decoration-none text-dark" to='/'>
                                <h1 className="ps-4">
                                    Your Weather on YOUR time
                                </h1>
                            </Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Nav;