import React from 'react';
import AboutUs from '../Assets/Images/AboutUs.png'
import Vision from '../Assets/Images/Vision.png'
import Mission from '../Assets/Images/Mission.png'
import Breadcrumbcustom from '../Common/Breadcrumbcustom';

function Aboutus() {
    return (
        <div class="container">
            <Breadcrumbcustom pages={['Home', 'About Us']}/>
            <div class=" my-4 py-4" >
                <div class="container" >
                    <section data-section-id="1" data-share="" data-category="banners" data-component-id="a1d2749c_01_awz" class="position-relative overflow-hidden">
                        <div class="d-flex flex-wrap d-flex align-items-center">
                            <div class="col-12 col-lg-6">
                                <div class="container mb-20 mb-lg-0">
                                    <div class="pt-20 mw-md mx-auto">
                                        <span class="mb-4 fs-2  " data-config-id="label">OUR <br />STORY</span>
                                        <p class="mt-4 mb-16 mb-lg-32 fs-5 font-weight-normal " data-config-id="header">Just the beginning. Together, let's nurture its growth, promoting a vibrant Halal community in Canada.
                                            Join us as we curate a trusted digital platform, providing comprehensive information on Halal products and services nationwide.
                                            Together, we can shape the future, fostering transparency and inclusivity in the Halal industry.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-6 d-flex justify-content-end">
                                <img class="float-right img-fluid rounded" style={{ height: "14rem", objectfit: "cover" }} src={AboutUs} alt="" data-config-id="image" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div class="pt-20 mw-md mx-auto">
                <p class="mb-4 fs-2 text-center" data-config-id="label">OUR VISION & MISSION  </p>
            </div>

            <div class=" my-4 py-4" >
                <div class="container" >
                    <section data-section-id="1" data-share="" data-category="banners" data-component-id="a1d2749c_01_awz" class="position-relative overflow-hidden">
                        <div class="d-flex flex-wrap d-flex">
                            <div class="col-12 col-lg-6 align-items-center">
                                <div class="container mb-20 mb-lg-0">
                                    <div class="pt-20 mw-md mx-auto">
                                        <p class="mt-4 mb-16 mb-lg-32 fs-5 font-weight-normal " data-config-id="header">Our vision is to be the go-to online platform for all things Halal in Canada, providing comprehensive and reliable information to empower individuals and communities to make informed choices that align with their Halal lifestyle.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-6 d-flex justify-content-end">
                                <img class="float-right img-fluid rounded" style={{ height: "12rem", objectfit: "cover" }} src={Vision} alt="" data-config-id="image" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div class=" my-4 py-4" >
                <div class="container" >
                    <section data-section-id="1" data-share="" data-category="banners" data-component-id="a1d2749c_01_awz" class="position-relative overflow-hidden">
                        <div class="d-flex flex-wrap d-flex align-items-center">
                            <div class="col-12 col-lg-6 d-flex justify-content-start">
                                <img class="float-left img-fluid rounded" style={{ height: "12rem", objectfit: "cover" }} src={Mission} alt="" data-config-id="image" />
                            </div>
                            <div class="col-12 col-lg-6 ">
                                <div class="container mb-20 mb-lg-0">
                                    <div class="pt-20 mw-md mx-auto">
                                        <p class="mt-4 mb-16 mb-lg-32 fs-5 font-weight-normal " data-config-id="header">Our mission is to create a trusted and inclusive digital space that showcases the diverse range of Halal products, services, and establishments available in Canada. We strive to curate accurate and up-to-date information, including Halal-certified restaurants, grocery stores, travel destinations, and more. By promoting transparency and accessibility, we aim to foster a stronger Halal community and contribute to the cultural and social fabric of Canada.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
export default Aboutus;