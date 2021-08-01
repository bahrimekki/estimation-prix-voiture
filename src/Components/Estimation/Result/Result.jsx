import React from "react";
import "./Result.css";
function Result({
    etape,
    etapenumber,
    marque,
    modele,
    annee,
    carburant,
    gearbox,
}) {
    return (
        <div className="ResultFilter">
            <svg>
                <circle cx="50%" cy="50%" r="70"></circle>
                <circle
                    cx="50%"
                    cy="50%"
                    r="70"
                    style={{ display: etape[0] }}
                ></circle>
                <circle
                    cx="50%"
                    cy="50%"
                    r="70"
                    style={{ display: etape[1] }}
                ></circle>
                <circle
                    cx="50%"
                    cy="50%"
                    r="70"
                    style={{ display: etape[2] }}
                ></circle>
                <circle
                    cx="50%"
                    cy="50%"
                    r="70"
                    style={{ display: etape[3] }}
                ></circle>
                <circle
                    cx="50%"
                    cy="50%"
                    r="70"
                    style={{ display: etape[4] }}
                ></circle>
            </svg>
            <h3>{etapenumber}</h3>
            <div className="test">
                <p>{marque}</p>
                <p>{modele}</p>
                <p>{annee}</p>
                <p>{carburant}</p>
                <p>{gearbox}</p>
            </div>
        </div>
    );
}

export default Result;
