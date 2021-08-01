import React, { useState } from "react";
import Card from "../Card/Card";
import "./CardList.css";
function CardList({ automobils, marque, carburant, gearbox, annee }) {
    const [prixmin, setPrixmin] = useState("");
    const [prixmax, setPrixmax] = useState("");

    const [road, setRoad] = useState("");
    const [trie, setTrie] = useState("pricedescending");

    const prixminchange = (e) => {
        setPrixmin(e.target.value);
    };
    const prixmaxchange = (e) => {
        setPrixmax(e.target.value);
    };
    const roadv = (e) => {
        setRoad(e.target.value);
    };

    const triev = (e) => {
        setTrie(e.target.value);
    };

    const toutfilter = (e) => {
        return (
            e
                // .filter((element) => element.prix[0] > parseInt(prixmin))
                // .filter((element) => element.prix[0] < parseInt(prixmax))
                .filter((element) =>
                    annee === ""
                        ? element.year !== annee
                        : element.year === annee
                )
                .filter((element) =>
                    gearbox === ""
                        ? element.boite !== gearbox
                        : element.boite === gearbox
                )
                .filter((element) =>
                    road === ""
                        ? parseInt(element.road) !== road
                        : parseInt(element.road) <= road
                )
                .filter((element) =>
                    carburant === ""
                        ? element.fuel !== carburant
                        : element.fuel === carburant
                )
                .filter((element) =>
                    marque === ""
                        ? element.type !== marque
                        : element.type
                              .toLowerCase()
                              .includes(marque.toLowerCase())
                )
                .sort(function (a, b) {
                    return trie === "pricedescending"
                        ? b.prix[0] * 1000 +
                              b.prix[1] -
                              (a.prix[0] * 1000 + a.prix[1])
                        : trie === "priceascending"
                        ? a.prix[0] * 1000 +
                          a.prix[1] -
                          (b.prix[0] * 1000 + b.prix[1])
                        : trie === "yeardescending"
                        ? parseInt(b.year) - parseInt(a.year)
                        : trie === "yearascending"
                        ? parseInt(a.year) - parseInt(b.year)
                        : trie === "roaddescending"
                        ? parseInt(b.road) - parseInt(a.road)
                        : trie === "roadascending"
                        ? parseInt(a.road) - parseInt(b.road)
                        : b.prix[0] + a.prix[0];
                })
                .map((element, index) =>
                    index < 50 ? (
                        <Card
                            key={index}
                            image={element.image}
                            type={element.type}
                            site={element.site}
                            year={element.year}
                            road={element.road}
                            fuel={element.fuel}
                            boite={element.boite}
                            prix={element.prix[0] + "," + element.prix[1]}
                        />
                    ) : (
                        <small>{index}</small>
                    )
                )
        );
    };

    return <div className="CardList">{toutfilter(automobils)}</div>;
}

export default CardList;
