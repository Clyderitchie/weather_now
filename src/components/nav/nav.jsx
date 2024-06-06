import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "../welcomePage/searchBarComponent";

import './nav.css'

function Nav() {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div id='navLayout' className="col-12">
                        <Link id='nav' to='/'>
                            <h1 id='navMe'>
                                Your Weather on YOUR time
                            </h1>
                        </Link>
                        <div id='navLinks'>
                            <div id='searchBarNav'> <SearchBar /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Nav;