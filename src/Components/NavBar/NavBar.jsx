import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function NavBar() {
    return (
        <div className="NavBar">
            <p>
                <Link to="/">
                    <FontAwesomeIcon icon="home" /> Home
                </Link>
            </p>
            <p>
                <Link to="/estimation">
                    <FontAwesomeIcon icon="calculator" /> Estimation
                </Link>
            </p>
            <p>
                <Link to="/occasion">
                    <FontAwesomeIcon icon="cart-arrow-down" /> Occasion
                </Link>
            </p>
        </div>
    );
}
export default NavBar;
