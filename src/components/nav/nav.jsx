import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "../welcomePage/searchBarComponent";

function Nav() {

    return (
        <>
        <div className="container-fluid mb-5 w-100 p-3 border border-bottom border-black">
            <div className="row">
                <div className="col-12">
                <div className="d-flex justify-content-between align-items-center" id='navLayout'>
                        <Link className="text-decoration-none text-dark" id='nav' to='/'>
                            <h1 className="ps-4" id='navMe'>
                                Your Weather on YOUR time
                            </h1>
                        </Link>
                        <div className="d-inline-flex w-25" id='navLinks'>
                            <div id='searchBarNav'> <SearchBar /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default Nav;