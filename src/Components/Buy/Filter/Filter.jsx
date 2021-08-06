import React from "react";
import "./Filter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Filter({
    Marque,
    Carburant,
    GearBox,
    Annee,
    slideOne,
    slideTwo,
    valone,
    valtwo,
}) {
    const year = [];

    const yearvoitur = () => {
        var newyear = new Date().getFullYear();
        for (var i = 1900; i < newyear + 1; i++) {
            year.push(i);
        }
        return year.map((i, index) => (
            <option key={index} value={i}>
                {i}
            </option>
        ));
    };
    const togel = () => {
        document.querySelector(".OpenClose").classList.toggle("active");
        document.querySelector(".Filter").classList.toggle("open");
    };

    return (
        <div className="Filter">
            <button className="OpenClose" onClick={() => togel()}>
                <div className="fontcont">
                    <FontAwesomeIcon icon="angle-right" className="font" />
                </div>
            </button>
            <div className="list">
                <div className="li">
                    <div className="fontcont">
                        <FontAwesomeIcon icon="filter" className="font" />
                    </div>
                    <small>Filter</small>
                </div>
                <div className="li">
                    <div className="fontcont">
                        <FontAwesomeIcon icon="dollar-sign" className="font" />
                    </div>
                    <small>
                        <div className="wrapper">
                            <div className="values">
                                <span id="range1">min: {valone}</span>
                                <span> - </span>
                                <span id="range2">MAX: {valtwo}</span>
                            </div>
                            <div className="container">
                                <div className="slider-track"></div>
                                <input
                                    type="range"
                                    min="0"
                                    value={valone}
                                    max="500"
                                    id="slider-1"
                                    onChange={(e) => slideOne(e)}
                                />
                                <input
                                    type="range"
                                    min="0"
                                    value={valtwo}
                                    max="500"
                                    id="slider-2"
                                    onChange={(e) => slideTwo(e)}
                                />
                            </div>
                        </div>
                    </small>
                </div>
                <div className="li">
                    <div className="fontcont">
                        <FontAwesomeIcon icon="industry" className="font" />
                    </div>
                    <small>
                        <select name="Marque" onChange={(e) => Marque(e)}>
                            <option value="">All brand</option>
                            <option value="Citro">Citroën</option>
                            <option value="Audi">Audi</option>
                            <option value="BMW">BMW</option>
                            <option value="Mercedes">Mercedes</option>
                            <option value="Peugeot">Peugeot</option>
                            <option value="Renault">Renault</option>
                            <option value="Volkswagen">Volkswagen</option>
                        </select>
                    </small>
                </div>
                <div className="li">
                    <div className="fontcont">
                        <FontAwesomeIcon icon="gas-pump" className="font" />
                    </div>
                    <small>
                        <select name="Marque" onChange={(e) => Carburant(e)}>
                            <option value="">All Carburant</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Essence">Essence</option>
                        </select>
                    </small>
                </div>
                <div className="li">
                    <div className="fontcont">
                        <FontAwesomeIcon icon="calendar-alt" className="font" />
                    </div>
                    <small>
                        <select onChange={(e) => Annee(e)}>
                            <option value="">All</option>
                            {yearvoitur()}
                        </select>
                    </small>
                </div>
                <div className="li">
                    <div className="fontcont">
                        <FontAwesomeIcon icon="chess-pawn" className="font" />
                    </div>
                    <small>
                        <select name="Marque" onChange={(e) => GearBox(e)}>
                            <option value="">All GearBox</option>
                            <option value="Manuelle">Manuelle</option>
                            <option value="Automatique">Automatique</option>
                        </select>
                    </small>
                </div>
                <div className="li">
                    <div className="fontcont">
                        <FontAwesomeIcon icon="road" className="font" />
                    </div>
                    <small>Road</small>
                </div>
            </div>
        </div>
    );
}

export default Filter;
