import React from 'react';
import NavButtons from "../Common/Navbuttons"
import Filters from '../Common/Filters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Restaurants() {
    let restaurants = require('../TestData/restaurants.json');
    return (
        <div>
            <NavButtons page="restaurants" />
            <Filters division="restaurants" />
            <div className='container'>
                <div className='row w-100 my-4'>
                    <div className='col'>
                        <p>{restaurants.length} results found</p>
                    </div>
                    <div className='col'>
                        <div class="btn-group float-end" role="group" aria-label="Basic example">
                            <button type="button" class="btn ">Map</button>
                            <button type="button" class="btn active-view" >List</button>
                            <button type="button" class="btn">Grid</button>
                        </div>
                    </div>
                </div>
                <div className='row w-100 my-4'>
                    <ul class="list-group list-unstyled list-group-flush">
                        {restaurants.map((store) => (
                            <li key={store.id} className='my-2'>
                                <div class="card">
                                    <div className='row'>
                                        <div className='col-10'>
                                            <div class="card-body">
                                                <h5 class="card-title fw-bold">{store.name}</h5>
                                                <p class="card-text">{store.categories}</p>
                                                <div className='d-flex mb-4' >
                                                {store.tags.map((tag) => (
                                                    <div className='me-3 p-2 fw-bold' style={{backgroundColor: "#EEF2F7", borderRadius:"8px", color:"#553CB2"}}>
                                                      <p class="card-text">{tag}</p>
                                                    </div>
                                                ))}
                                                </div>
                                                <div className='d-flex'>
                                                    <FontAwesomeIcon icon="fa-solid fa-location-dot" color="#553CB2" />
                                                    <h6 className='ps-2'>{store.address}</h6>
                                                </div>
                                                <div className='d-flex'>
                                                    <FontAwesomeIcon icon="fa-solid fa-clock" color="#553CB2" />
                                                    <h6 className='ps-2'>{store.timings}</h6>
                                                </div>
                                                <div className='d-flex'>
                                                    <FontAwesomeIcon icon="fa-solid fa-phone" color="#553CB2" />
                                                    <h6 className='ps-2'>{store.phoneno}</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-2 '>
                                            <img className='mt-3 me-3' style={{ maxWidth: "70%", maxHeight:"60%", float: "right" }} src={store.logo} />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Restaurants;