import React from "react";
import BiryaniBoyz from "../Assets/Images/BiryaniBoyz.png"
import DaataGrill from "../Assets/Images/DaataGrill.png"
import Paramount from "../Assets/Images/Paramount.png"
import Pizza360 from "../Assets/Images/Pizza360.png"
import SpiceFusion from "../Assets/Images/SpiceFusion.png"
import Tazaxpress from "../Assets/Images/Tazaxpress.png"


function Recentlyadded() {
    return (
        <div class="container text-center d-flex w-100 justify-content-between">
            <div>
                <img src={BiryaniBoyz} class="rounded-circle shadow " style={{ width: "8rem" }}
                    alt="Avatar" />
                <h6 class="mt-4 mb-4">Biryani Boyz</h6>
            </div>

            <div>
                <img src={DaataGrill} class="rounded-circle shadow" style={{ width: "8rem" }}
                    alt="Avatar" />
                <h6 class="mt-4">Daata Grill</h6>
            </div>

            <div>
                <img src={Paramount} class="rounded-circle shadow" style={{ width: "8rem" }}
                    alt="Avatar" />
                <h6 class="mt-4">Paramount</h6>
            </div>

            <div>
                <img src={Pizza360} class="rounded-circle shadow" style={{ width: "8rem" }}
                    alt="Avatar" />
                <h6 class="mt-4">Pizza 360</h6>
            </div>

            <div>
                <img src={SpiceFusion} class="rounded-circle shadow" style={{ width: "8rem" }}
                    alt="Avatar" />
                <h6 class="mt-4">Spice Fusion</h6>
            </div>

            <div>
                <img src={Tazaxpress} class="rounded-circle shadow" style={{ width: "8rem" }}
                    alt="Avatar" />
                <h6 class="mt-4">Taza Xpress</h6>
            </div>
        </div>
    );
}
export default Recentlyadded;