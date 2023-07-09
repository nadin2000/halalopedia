import React from 'react';
import Breadcrumbcustom from '../Common/Breadcrumbcustom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Discussionforum() {
    return (
        <div class="container" >
            <Breadcrumbcustom pages={['Home', 'Discussion forum']} />
            <div class="d-flex w-100 justify-content-start">
            <button class="btn p-3" style={{backgroundColor:"#EEEEEE"}}><FontAwesomeIcon icon="fa fa-plus" style={{color:"#553CB2"}}/> Start a new Discussion</button>
            </div>

            <div class=" row card  border-0 border-bottom ">
                <div class="col py-5 card-body w-100 d-flex align-items-center">
                    <div class="mx-4">
                        <h4 class="card-title">Quran Teaching Schools</h4>
                        <p class="fs-6 text-muted">09/07/2023</p>
                        <p class="card-text w-75">Hi Everyone, I am looking for a quran teaching school in milton for my two daughters of ages 5 and 8 ye......</p>
                    </div>
                    <div class="col d-flex align-items-center justify-content-end text-end me-5">
                        <a
                            class="btn text-muted btn-floating m-1 my-0 mx-2"
                            style={{ color: "black" }}
                            href="#"
                            role="button">120 Replies <FontAwesomeIcon icon="fa fa-chevron-right" style={{ color: "#553CB2", textAlign: "right" }} /></a>
                    </div>
                </div>
            </div>

            <div class=" row card  border-0 border-bottom ">
                <div class="col py-5 card-body w-100 d-flex align-items-center">
                    <div class="mx-4">
                        <h4 class="card-title">Kids Birthday Restaurant</h4>
                        <p class="fs-6 text-muted">09/07/2023</p>
                        <p class="card-text w-75">Hi community, I want to conduct a birthday party for my son who is turning four years......</p>
                    </div>
                    <div class="col d-flex align-items-center justify-content-end text-end me-5">
                        <a
                            class="btn text-muted btn-floating m-1 my-0 mx-2"
                            style={{ color: "black" }}
                            href="#"
                            role="button">95 Replies <FontAwesomeIcon icon="fa fa-chevron-right" style={{ color: "#553CB2", textAlign: "right" }} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Discussionforum;