import React from 'react';
import ContactUs from '../Assets/Images/ContactUs.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Breadcrumbcustom from '../Common/Breadcrumbcustom';

function Contactus() {
    return (
        <div class="container " >
            <Breadcrumbcustom pages={['Home', 'Contact Us']}/>
            <div class="row mt-4 pt-4 mb-3 pb-3">
                <div class="col-6">
                    <div class=' mb-3 pb-3'>
                        <p class=" fs-2 m-0 " data-config-id="label">Get In Touch</p>
                        <p class=" fs-6 text-muted" data-config-id="label">Send us a message</p>
                    </div>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">User name</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Email</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Phone no.</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Subject Title</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Message</label>
                            <textarea type="password" class="form-control" id="exampleInputPassword1"></textarea>
                        </div>
                        <button type="submit" class="w-100 btn btn-primary py-3 px-3 my-3 ">Submit</button>
                    </form>
                </div>

                <div class="col-6 ">
                    <div class="d-flex justify-content-center">
                        <img class="float-right img-fluid rounded" style={{ height: "25rem", objectfit: "cover" }} src={ContactUs} alt="" data-config-id="image" />
                    </div>
                    <section class="mt-5 d-flex justify-content-center ">
                        <div >
                            <p class="text-center"> support@halalopedia.com</p>
                            <p class="text-center">+1 (905) 805-9687 </p>
                            <div class="text-center">
                                <a
                                    class="btn text-white btn-floating m-1"
                                    style={{ backgroundColor: '#3b5998' }}
                                    href="#!"
                                    role="button"><FontAwesomeIcon icon="fab fa-facebook-f"/></a>
                                <a
                                    class="btn text-white btn-floating m-1"
                                    style={{ backgroundColor: '#ac2bac' }}
                                    href="#!"
                                    role="button"><FontAwesomeIcon icon="fa-brands fa-instagram"/></a>
                                <a
                                    class="btn text-white btn-floating m-1"
                                    style={{ backgroundColor: '#fffc00' }}
                                    href="#!"
                                    role="button"><FontAwesomeIcon icon="fa-brands fa-snapchat" style={{ color: 'black' }}/></a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </div>
    )
}
export default Contactus;