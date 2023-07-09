import React from 'react';
import Breadcrumbcustom from '../Common/Breadcrumbcustom';
import Amazon from '../Assets/Images/Amazon.png'
import Sephora from '../Assets/Images/Sephora.webp'
import Starbucks from '../Assets/Images/Starbucks.jpeg'
import Apple from '../Assets/Images/Apple.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Rewardstore() {
    return (
        <div class="container">
            <Breadcrumbcustom pages={['Home', 'Reward store']} />
            <div class=" row card  border-0 border-bottom ">
                <div class="col py-5 card-body w-100 d-flex align-items-center">
                    <img class="rounded" style={{ width: "20rem", maxWidth:"300px" }} src={Amazon}></img>
                    <div class="mx-4">
                        <h4 class="card-title">$10 Amazon Gift Card</h4>
                        <p class="card-text fw-bold">800 Points</p>
                    </div>
                    <div class="col d-flex align-items-center justify-content-end text-end mx-5">
                    <a
                    class="btn text-muted btn-floating m-1 my-0 mx-2"
                    style={{ color:"black" }}
                    href="#"
                    role="button">Redeem <FontAwesomeIcon  icon="fa fa-chevron-right" style={{color:"#553CB2", textAlign:"right"}}/></a>
                    </div>
                </div>
            </div>

            <div class=" row card border-0 border-bottom">
                <div class="col py-5 card-body w-100 d-flex align-items-center">
                    <img class="rounded" style={{ width: "20rem", maxWidth:"300px" }} src={Apple}></img>
                    <div class="mx-4">
                        <h4 class="card-title">$10 Apple Gift Card</h4>
                        <p class="card-text fw-bold">500 Points</p>
                    </div>
                    <div class="col d-flex align-items-center justify-content-end text-end mx-5">
                    <a
                    class="btn text-muted btn-floating m-1 my-0 mx-2"
                    style={{ color:"black" }}
                    href="#"
                    role="button">Redeem <FontAwesomeIcon  icon="fa fa-chevron-right" style={{color:"#553CB2", textAlign:"right"}}/></a>
                    </div>
                </div>
            </div>


            <div class=" row card  border-0 border-bottom ">
                <div class="col py-5 card-body w-100 d-flex align-items-center">
                    <img class="rounded" style={{ width: "20rem", maxWidth:"300px" }} src={Sephora}></img>
                    <div class="mx-4">
                        <h4 class="card-title">$10 Sephora Gift Card</h4>
                        <p class="card-text fw-bold">1500 Points</p>
                    </div>
                    <div class="col d-flex align-items-center justify-content-end text-end mx-5">
                    <a
                    class="btn text-muted btn-floating m-1 my-0 mx-2"
                    style={{ color:"black" }}
                    href="#"
                    role="button">Redeem <FontAwesomeIcon  icon="fa fa-chevron-right" style={{color:"#553CB2", textAlign:"right"}}/></a>
                    </div>
                </div>
            </div>


            <div class=" row card border-0 border-bottom ">
                <div class="col py-5 card-body w-100 d-flex align-items-center">
                    <img class="rounded" style={{ width: "20rem", maxWidth:"300px" }} src={Starbucks}></img>
                    <div class="mx-4">
                        <h4 class="card-title">$10 Starbucks Gift Card</h4>
                        <p class="card-text fw-bold">500 Points</p>
                    </div>
                    <div class="col d-flex align-items-center justify-content-end text-end mx-5">
                    <a
                    class="btn text-muted btn-floating m-1 my-0 mx-2"
                    style={{ color:"black" }}
                    href="#"
                    role="button">Redeem <FontAwesomeIcon  icon="fa fa-chevron-right" style={{color:"#553CB2", textAlign:"right"}}/></a>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Rewardstore;