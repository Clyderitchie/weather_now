import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "../welcomePage/searchBarComponent";

function Nav() {

    return (
        <>
            <div className="container-fluid mb-5 w-100 p-3 border border-bottom border-black">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                            <Link className="text-decoration-none text-dark" to='/'>
                                <h1 className="ps-4">
                                    Your Weather on YOUR time
                                </h1>
                            </Link>
                            <div className="d-inline-flex me-3 p-1">
                                <div>
                                    <SearchBar />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Nav;