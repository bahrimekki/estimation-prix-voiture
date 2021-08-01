import React, { useState } from "react";
import Filter from "../../Components/Estimation/Filter/Filter";
import Result from "../../Components/Estimation/Result/Result";
import "./EstimationPage.css";

function EstimationPage({ automobils }) {
    const etapetab = ["none", "none", "none", "none", "none"];
    const [etape, setEtape] = useState(etapetab);
    const card1 = ["block", "none", "none", "none", "none", "none"];
    const [card2, setCard2] = useState(card1);
    const [prixestime, setPrixestime] = useState("25000 TND");
    const [i, setI] = useState(1);
    const [etapenumber, setEtapenumber] = useState("0/5");

    const [carburant, setCarburant] = useState("");
    const [gearbox, setGearbox] = useState("");
    const [marque, setMarque] = useState("");
    const [modele, setModele] = useState("");
    const [annee, setAnnee] = useState();

    const Marque = (e) => {
        setMarque(e.target.value);
    };
    const Modele = (e) => {
        setModele(e.target.value);
    };
    const Annee = (e) => {
        setAnnee(e.target.value);
    };
    const Carburant = (e) => {
        setCarburant(e);
    };
    const GearBox = (e) => {
        setGearbox(e);
    };

    const Suivent = () => {
        setI(i + 1);
        console.log(i);
        if (i === 2) {
            card1[0] = "none";
            card1[1] = "block";
            etapetab[0] = "block";
            setEtape(etapetab);
            setEtapenumber("1/5");
            console.log(etape);
            setCard2(card1);
        } else if (i === 3) {
            card1[0] = "none";
            card1[1] = "none";
            card1[2] = "block";
            etapetab.splice(0, 2, "block", "block");
            setEtapenumber("2/5");
            setEtape(etapetab);
            console.log(etape);
            setCard2(card1);
        } else if (i === 4) {
            card1[0] = "none";
            card1[2] = "none";
            card1[3] = "block";
            etapetab.splice(0, 3, "block", "block", "block");
            setEtapenumber("3/5");
            setEtape(etapetab);
            console.log(etape);
            setCard2(card1);
        } else if (i === 5) {
            card1[0] = "none";
            card1[3] = "none";
            card1[4] = "block";
            etapetab.splice(0, 4, "block", "block", "block", "block");
            setEtape(etapetab);
            setEtapenumber("4/5");
            console.log(etape);
            setCard2(card1);
        } else if (i === 6) {
            card1[4] = "none";
            card1[0] = "none";
            card1[5] = "block";
            etapetab.splice(0, 5, "block", "block", "block", "block", "block");
            setEtape(etapetab);
            setEtapenumber("5/5");
            console.log(etape);
            setCard2(card1);
            setI(1);
        } else {
            card1[5] = "none";
            card1[0] = "block";
            etapetab.splice(0, 5, "none", "none", "none", "none", "none");
            setEtape(etapetab);
            setEtapenumber("0/5");
            console.log(etape);
            setCard2(card1);
        }
    };
    return (
        <div className="EstimationPage">
            <div className="backes"></div>
            <Filter
                card2={card2}
                Suivent={Suivent}
                Marque={Marque}
                Modele={Modele}
                Annee={Annee}
                Carburant={Carburant}
                GearBox={GearBox}
                prixestime={prixestime}
            />
            <Result
                etape={etape}
                etapenumber={etapenumber}
                marque={marque}
                modele={modele}
                annee={annee}
                carburant={carburant}
                gearbox={gearbox}
            />
        </div>
    );
}

export default EstimationPage;
