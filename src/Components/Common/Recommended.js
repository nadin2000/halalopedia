import React from "react";
import Burger from "../Assets/Images/Burger.png"
import Pizza from "../Assets/Images/Pizza.png"
import Biryani from "../Assets/Images/Biryani.png"
import Grills from "../Assets/Images/Grills.png"
import Shawarma from "../Assets/Images/Shawarma.png"
import Donuts from "../Assets/Images/Donuts.png"
import Icecream from "../Assets/Images/Icecream.png"


function Recommended() {
    return(
        <div class="container text-center d-flex w-100 justify-content-between mb-5">
            <div>
                <img src={Burger} class="" style={{ height: "4rem" }}
                    alt="Avatar" />
                <h6 class="mt-4 mb-4">Burger</h6>
            </div>

            <div>
                <img src={Biryani} class="" style={{ height: "4rem" }}
                    alt="Avatar" />
                <h6 class="mt-4">Biryani</h6>
            </div>

            <div>
                <img src={Shawarma} class="" style={{ height: "4rem" }}
                    alt="Avatar" />
                <h6 class="mt-4">Shawarma</h6>
            </div>

            <div>
                <img src={Pizza} class="" style={{ height: "4rem" }}
                    alt="Avatar" />
                <h6 class="mt-4">Pizza</h6>
            </div>

            <div>
                <img src={Grills} class="" style={{ height: "4rem" }}
                    alt="Avatar" />
                <h6 class="mt-4">Grills</h6>
            </div>

            <div>
                <img src={Donuts} class="" style={{ height: "4rem" }}
                    alt="Avatar" />
                <h6 class="mt-4">Donuts</h6>
            </div>

            <div>
                <img src={Icecream} class="" style={{ height: "4rem" }}
                    alt="Avatar" />
                <h6 class="mt-4">Ice Cream</h6>
            </div>

        </div>
    );
}
export default Recommended;