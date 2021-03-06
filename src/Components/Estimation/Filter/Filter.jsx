import React from "react";
import "./Filter.css";

function Filter({
    prixestime,
    card2,
    Suivent,
    Marque,
    Modele,
    Annee,
    Carburant,
    GearBox,
    toutfilter,
    automobils,
}) {
    const year = [];
    const yearvoitur = () => {
        var newyear = new Date().getFullYear();
        for (var i = 1900; i < newyear + 1; i++) {
            year.push(i);
        }
    };
    return (
        <div className="FilterEstimation">
            <div
                className="card1"
                style={{
                    display: card2[0],
                }}
            >
                <h1>Marque</h1>
                <p>Sélectionnez votre marque de voiture</p>
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
            </div>
            <div
                className="card2"
                style={{
                    display: card2[1],
                }}
            >
                <h1>Modéle</h1>
                <p>Sélectionnez le modéle de votre voiture</p>
                <input type="text" onChange={(e) => Modele(e)} />
            </div>
            <div
                className="card3"
                style={{
                    display: card2[2],
                }}
            >
                <h1>Année</h1>
                <p>
                    Sélectionnez l’année de la 1ère mise en circulation de votre
                    voiture
                </p>
                <select name="année" id="année" onChange={(e) => Annee(e)}>
                    {
                        (yearvoitur(),
                        year.map((i, index) => (
                            <option key={index} value={i}>
                                {i}
                            </option>
                        )))
                    }
                </select>
            </div>
            <div
                className="card4"
                style={{
                    display: card2[3],
                }}
            >
                <h1>carburant</h1>
                <p>
                    Sélectionnez le type de carburant de votre voiture de votre
                    voiture
                </p>
                <div className="carburant">
                    <div>
                        <div
                            className="image"
                            onClick={() => Carburant("Diesel")}
                        >
                            <img src="img/fuel.png" alt="diesel" />
                        </div>
                        <p>Diesel</p>
                    </div>
                    <div>
                        <div
                            className="image"
                            onClick={() => Carburant("Essence")}
                        >
                            <img src="img/fuel.png" alt="Essence" />
                        </div>
                        <p>Essence</p>
                    </div>
                </div>
            </div>
            <div
                className="card5"
                style={{
                    display: card2[4],
                }}
            >
                <h1>boîte de vitesses</h1>
                <p>
                    Sélectionnez le type de boîte de vitesses de votre voiture
                </p>
                <div className="carburant">
                    <div>
                        <div
                            className="image"
                            onClick={() => GearBox("Manuelle")}
                        >
                            <img src="img/gearboxman.png" alt="diesel" />
                        </div>
                        <p>Manuelle</p>
                    </div>
                    <div>
                        <div
                            className="image"
                            onClick={() => GearBox("Automatique")}
                        >
                            <img src="img/gearboxauto.png" alt="Essence" />
                        </div>
                        <p>Automatique</p>
                    </div>
                </div>
            </div>
            <div
                className="card6"
                style={{
                    display: card2[5],
                }}
            >
                {toutfilter(automobils)}
                <h1>Resultat</h1>
                <p>le prix estimé de vend de votre voitur est :</p>
                <h1>{prixestime} TND</h1>
            </div>
            <button onClick={() => Suivent()}>
                <div className="cerc3"></div>
                <span> Suivent</span>
            </button>
        </div>
    );
}

export default Filter;
