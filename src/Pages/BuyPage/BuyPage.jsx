import React, { useState } from "react";
import Filter from "../../Components/Buy/Filter/Filter";
import Card from "../../Components/Buy/Result/Card/Card";
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
    return (
        <div className="BuyPage">
            <div className="back"></div>
            <Filter
                Marque={Marque}
                Carburant={Carburant}
                GearBox={GearBox}
                Annee={Annee}
            />
            <CardList
                automobils={automobils}
                marque={marque}
                carburant={carburant}
                gearbox={gearbox}
                annee={annee}
            />
            {/* <Card /> */}
        </div>
    );
}

export default BuyPage;
