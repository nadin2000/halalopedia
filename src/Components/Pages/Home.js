import React from 'react';
import HomeBanner from "../Assets/Images/HomeBanner.png"
import NavButtons from "../Common/Navbuttons"
import Categoriesslider from '../Common/CategoriesSlide';
import Highestrated from '../Common/Highestrated';
import Recentlyadded from '../Common/Recentlyadded';

function Home() {
    return (
        <div>
            <NavButtons page="home" />
            <Categoriesslider />
            <div class=" my-5 py-5" style={{ backgroundColor: "#F5F5F5" }}>
                <div class="container" >
                    <section data-section-id="1" data-share="" data-category="banners" data-component-id="a1d2749c_01_awz" class="position-relative overflow-hidden">
                        <div class="d-flex flex-wrap d-flex align-items-center">
                            <div class="col-12 col-lg-6">
                                <div class="container mb-20 mb-lg-0">
                                    <div class="pt-20 mw-md mx-auto">
                                        <span class="mb-4 fs-6 text-muted " data-config-id="label">Explore.Indulge.Contribute</span>
                                        <p class="mt-6 mb-16 mb-lg-32 fs-5 font-weight-normal " data-config-id="header">In addition to finding the nearest halal stores for anything you are looking for, add stores & reviews and get rewards for your contribution,  connect with the community and much more on Halalopedia.io</p>
                                        {/* <a class="btn btn-primary" href="#" data-config-id="primary-action">More</a> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-6 d-flex justify-content-center">
                                <img class="float-right img-fluid" style={{ height: "250px", objectfit: "cover" }} src={HomeBanner} alt="" data-config-id="image" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="container">
                <h4 class=" mt-5 mb-5 font-weight-bold" >Highest Rated Restaurants</h4>
            </div>
            <Highestrated />
            <div className="container">
                <h4 class=" mt-5 mb-5 font-weight-bold" >Recently Added</h4>
            </div>
            <Recentlyadded />
            {/* <div className="container">
                <h4 class=" mt-5 mb-5 font-weight-bold" >Recommended For you</h4>
            </div>
            <Recommended /> */}
        </div>

    )
}
export default Home;