import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
function NavBar() {
    return (
        <div className="NavBar">
            <p>
                <Link to="/">Home</Link>
            </p>
            <p>
                <Link to="/estimation">Estimation</Link>
            </p>
            <p>
                <Link to="/occasion">Occasion</Link>
            </p>
        </div>
    );
}
export default NavBar;
