import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Card({ image, type, site, year, road, fuel, boite, prix }) {
    return (
        <div className="card">
            <div className="prix">{prix} TND</div>
            <div className="circle">
                <div className="imgBx">
                    <img src={image} alt="car" />
                </div>
            </div>
            <div className="content">
                <p>{type}</p>
                <a href={"https://www." + site}>{site}</a>
                <div className="description">
                    <div className="d1">
                        <small>YEAR</small>
                        <small>
                            <FontAwesomeIcon icon="calendar-alt" /> {year}
                        </small>
                    </div>
                    <div className="d1">
                        <small>KMs</small>
                        <small>
                            <FontAwesomeIcon icon="road" /> {road}
                        </small>
                    </div>
                    <div className="d1">
                        <small>FUEL</small>
                        <small>
                            <FontAwesomeIcon icon="gas-pump" /> {fuel}
                        </small>
                    </div>
                    <div className="d1">
                        <small>GEARBOX</small>
                        <small>
                            <FontAwesomeIcon icon="chess-pawn" /> {boite}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
