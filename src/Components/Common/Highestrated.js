import React from "react";
import Khazana from "../Assets/Images/Khazana.jpeg"
import Lazeez from "../Assets/Images/Lazeez.jpeg"
import Nafisa from "../Assets/Images/Nafisa.jpeg"
import BurgerFactory from "../Assets/Images/BurgerFactory.jpeg"

function Highestrated() {
    return (
        <div class="container d-flex w-100 justify-content-between my-5">
            <div class="card me-2" style={{ maxWidth: "18rem" }}>
                <img style={{ height: "10rem" }} src={Khazana} class="card-img-top" alt="Khazana" />
                <div class="card-body">
                    <h5 class="card-title">Khazana</h5>
                    <p class="card-text">An unforgettable experience with Indian cuisine.</p>
                </div>
            </div>
            <div class="card me-2" style={{ width: "18rem" }}>
                <img style={{ height: "10rem" }} src={Lazeez} class="card-img-top" alt="Lazeez" />
                <div class="card-body">
                    <h5 class="card-title">Shawarma Town</h5>
                    <p class="card-text">Shawarma Lovers spot!</p>
                </div>
            </div>
            <div class="card me-2" style={{ width: "18rem" }}>
                <img style={{ height: "10rem" }} src={Nafisa} class="card-img-top" alt="Nafisa" />
                <div class="card-body">
                    <h5 class="card-title">Biryani Boyz</h5>
                    <p class="card-text">Best Biryani in town!</p>
                </div>
            </div>

            <div class="card me-2" style={{ width: "18rem" }}>
                <img style={{ height: "10rem" }} src={BurgerFactory} class="card-img-top" alt="Burger Factory" />
                <div class="card-body">
                    <h5 class="card-title">Burger Factory</h5>
                    <p class="card-text">Grilled to perfection!</p>
                </div>
            </div>
        </div>
    );
}
export default Highestrated;