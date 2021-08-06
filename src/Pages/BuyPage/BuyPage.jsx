import React, { useState } from "react";
import Filter from "../../Components/Buy/Filter/Filter";
import CardList from "../../Components/Buy/Result/CardList/CardList";
import "./BuyPage.css";
function BuyPage({ automobils }) {
    const [annee, setAnnee] = useState("");
    const [gearbox, setGearBox] = useState("");
    const [marque, setMarque] = useState("");
    const [road, setRoad] = useState("");
    const [carburant, setCarburant] = useState("");

    const Marque = (e) => {
        setMarque(e.target.value);
    };
    const Carburant = (e) => {
        setCarburant(e.target.value);
    };
    const GearBox = (e) => {
        setGearBox(e.target.value);
    };
    const Annee = (e) => {
        setAnnee(e.target.value);
    };

    const [valone, setValOne] = useState(0);
    const [valtwo, setValTwo] = useState(500);
    const slideOne = (e) => {
        setValOne(e.target.value);
        if (valtwo - valone <= 10) {
            setValOne(valtwo - 11);
        }
        fillColor();
    };
    const slideTwo = (e) => {
        setValTwo(e.target.value);
        if (valtwo - valone <= 10) {
            setValTwo(valone + 11);
        }
        fillColor();
    };
    function fillColor() {
        var percent1 = (valone / 500) * 100;
        var percent2 = (valtwo / 500) * 100;
        document.querySelector(
            ".slider-track"
        ).style.background = `linear-gradient(to right, #00000040 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #00000040 ${percent2}%)`;
    }

    return (
        <div className="BuyPage">
            <div className="back"></div>
            <div
                className="imag"
                style={{ backgroundImage: "url(/img/bacground.png)" }}
            ></div>
            <Filter
                Marque={Marque}
                Carburant={Carburant}
                GearBox={GearBox}
                Annee={Annee}
                slideOne={slideOne}
                slideTwo={slideTwo}
                valone={valone}
                valtwo={valtwo}
            />
            <CardList
                automobils={automobils}
                marque={marque}
                carburant={carburant}
                gearbox={gearbox}
                annee={annee}
                prixmin={valone}
                prixmax={valtwo}
            />
        </div>
    );
}

export default BuyPage;
