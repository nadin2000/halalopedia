import React from "react";
import { Link } from "react-router-dom";


function Navbuttons() {
    return (
        <div class="container d-flex w-100 justify-content-between mt-4 mb-4">
            <Link
                className="btn btn-outline-primary btn-lg navbar-btn w-100 py-4 me-1"
                role="button"
                to="/restaurants">
                Explore Restaurants
            </Link>
            <Link
                className="btn btn-outline-secondary btn-lg navbar-btn w-100 py-4 me-1"
                role="button"
                to="/groceries">
                Explore Groceries
            </Link>
        </div>
    );
}

export default Navbuttons;