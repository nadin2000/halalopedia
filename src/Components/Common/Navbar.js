import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Images/Logo.svg"

function Navbar() {
  return (
    <div>
      <div className="container pt-3 mt-3">
        <div class="row g-3 align-items-center">
          <div class="col-3">
            <Link class="nav-link" to="/">
              <img src={Logo} style={{ maxWidth: '220px' }}
                alt="Logo" />
            </Link>
          </div>
          <div class="col-8 ">
            <form >
              <div class="input-group">
                <span class="input-group-text">
                  <div class="btn-group" role="group">
                    <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      All Site
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                      <li><a class="dropdown-item" href="#">Restaurants</a></li>
                      <li><a class="dropdown-item" href="#">Groceries</a></li>
                      <li><a class="dropdown-item" href="#">Locations</a></li>
                      <li><a class="dropdown-item" href="#">Categories</a></li>
                      <li><a class="dropdown-item" href="#">Tags</a></li>
                    </ul>
                  </div>
                </span>
                <input type="text" class="form-control" placeholder="Search.." aria-label="Search.." aria-describedby="basic-addon1" />
              </div>
            </form>
          </div>
          <div class="col-1 d-flex justify-content-end">
            <Link class="nav-link" to="/profile">
              <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{ width: '3.5vw' }}
                alt="Avatar" />
            </Link>
          </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " >
            <ul class="navbar-nav mr-auto navbar-nav d-flex container-fluid p-0 pt-4 justify-content-between">
              <li class="nav-item active flex-grow-1">
                <Link class="nav-link flex-grow-1" to="/home">Home</Link>
              </li>

              <li class="nav-item dropdown flex-grow-1">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Explore
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link class="nav-link" to="/restaurants">Restaurants</Link></li>
                  <li><Link class="nav-link" to="/groceries">Groceries</Link></li>
                </ul>
              </li>

              <li class="nav-item active flex-grow-1">
                <Link class="nav-link" to="/aboutus">About Us</Link>
              </li>
              <li class="nav-item active flex-grow-1">
                <Link class="nav-link" to="/rewardstore">Reward Store</Link>
              </li>
              <li class="nav-item active flex-grow-1">
                <Link class="nav-link" to="/discussionforum">Discussion Forum</Link>
              </li>
              <li class="nav-item active flex-grow-1">
                <Link class="nav-link" to="/contactus">Contact Us</Link>
              </li>
              <li class="flex-grow-1">
                <Link to="/newstore">
                  <button className="btn btn-primary w-100 pt-2 pb-2" type="button">
                    Add a store
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;