import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Images/Logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
        <div className="bg-tertiary mt-5">
            <footer id="footer" class="footer-1">
                <div class="main-footer widgets-dark typo-light">
                    <div class="container py-4">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="widget subscribe no-box">
                                    <Link class="nav-link" to="/">
                                        <img src={Logo} style={{ width: '12vw', maxWidth: '350px' }}
                                            alt="Logo" />
                                    </Link>
                                    <p class="pt-4" style={{ width: '16vw' }}>Your definite guide for the best Halal Experiences in Canada </p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="widget no-box">
                                    <h5 class="widget-title"><span></span></h5>
                                    <ul class="thumbnail-widget">
                                        <li class="nav-item active py-2">
                                            <Link class="nav-link" to="/home">Home</Link>
                                        </li>
                                        <li class="nav-item active py-2">
                                            <Link class="nav-link" to="/restaurants">Restaurants</Link>
                                        </li>
                                        <li class="nav-item active py-2">
                                            <Link class="nav-link" to="/groceries">Groceries</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="widget no-box">
                                    <h5 class="widget-title"><span></span></h5>
                                    <ul class="thumbnail-widget">
                                        <li class="nav-item active py-2">
                                            <Link class="nav-link" to="/rewardstore">Reward Store</Link>
                                        </li>
                                        <li class="nav-item active py-2">
                                            <Link class="nav-link" to="/discussionforum">Discussion Forum</Link>
                                        </li>
                                        <li class="nav-item active py-2">
                                            <Link class="nav-link" to="/aboutus">About Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-3">

                                <div class="widget no-box">
                                    {/* <h5 class="widget-title">Contact Us<span></span></h5> */}
                                    <ul class="thumbnail-widget">
                                        <li><a href="mailto:info@domain.com" title="halalopedia"><p class="m-0 py-2">support@halalopedia.com</p></a></li>
                                        <li><a href="tel:+1 (905) 805-9687" title="halalopedia"><p class="m-0 py-2">+1 (905) 805-9687</p></a></li>
                                        <li>
                                            <div class="py-1">
                                                <a
                                                    class="btn text-white btn-floating m-1"
                                                    style={{ backgroundColor: '#3b5998' }}
                                                    href="#!"
                                                    role="button"><FontAwesomeIcon icon="fab fa-facebook-f" /></a>
                                                <a
                                                    class="btn text-white btn-floating m-1"
                                                    style={{ backgroundColor: '#ac2bac' }}
                                                    href="#!"
                                                    role="button"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                                                <a
                                                    class="btn text-white btn-floating m-1"
                                                    style={{ backgroundColor: '#fffc00' }}
                                                    href="#!"
                                                    role="button"><FontAwesomeIcon icon="fa-brands fa-snapchat" style={{ color: 'black' }} /></a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="footer-copyright">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <p class="py-1" style={{fontSize:"0.75rem",}}>Copyright © 2023. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default Footer;