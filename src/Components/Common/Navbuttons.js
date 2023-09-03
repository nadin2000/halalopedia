import React from "react";
import { Link } from "react-router-dom";


function Navbuttons(props) {
    if (props.page === "home") {
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
    else if (props.page === "restaurants") {
        return (
            <div class="container d-flex w-100 justify-content-between mt-2 mb-2">
                <div className="row w-100">
                    <div className="col-9">
                        <Link
                            className="btn fw-bold btn-outline-primary btn-lg  navbar-btn mt-2 mb-2 w-100 py-4 me-1"
                            role="button"
                            to="/restaurants">
                            Exploring Restaurants
                        </Link>
                    </div>
                    <div className="col-3">
                        <Link 
                            className="btn btn-outline-secondary btn-lg navbar-btn mt-2 mb-2 w-100 py-4 me-1"
                            role="button"
                            to="/groceries">
                            Explore Groceries
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
    else if (props.page === "groceries") {
        return (
        <div class="container d-flex w-100 justify-content-between mt-2 mb-2">
        <div className="row w-100">
            <div className="col-lg-3 col-sm-12">
                <Link
                    className="btn  btn-outline-primary btn-lg navbar-btn mt-2 mb-2 w-100 py-4 me-1"
                    role="button"
                    to="/restaurants">
                    Explore Restaurants
                </Link>
            </div>
            <div className="col-lg-9 col-sm-12">
                <Link 
                    className="btn fw-bold btn-outline-secondary btn-lg navbar-btn mt-2 mb-2 w-100 py-4 me-1"
                    role="button"
                    to="/groceries">
                    Exploring Groceries
                </Link>
            </div>
        </div>
    </div>
        );
    }
}

export default Navbuttons;