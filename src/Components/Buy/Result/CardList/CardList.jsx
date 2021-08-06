import React, { useState } from "react";
import Card from "../Card/Card";
import "./CardList.css";
function CardList({
    automobils,
    marque,
    carburant,
    gearbox,
    annee,
    prixmin,
    prixmax,
}) {
    const [road, setRoad] = useState("");
    const [trie, setTrie] = useState("pricedescending");
    const roadv = (e) => {
        setRoad(e.target.value);
        triev();
    };

    const triev = (e) => {
        setTrie(e.target.value);
        roadv();
    };

    const toutfilter = (e) => {
        return e
            .filter((element) => element.prix[0] > parseInt(prixmin))
            .filter((element) => element.prix[0] < parseInt(prixmax))
            .filter((element) =>
                annee === "" ? element.year !== annee : element.year === annee
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
                    : element.type.toLowerCase().includes(marque.toLowerCase())
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
                    ""
                )
            );
    };
    const next = () => {
        document
            .querySelector(".PageNumber.active")
            .nextSibling.classList.add("active");
        document.querySelector(".PageNumber.active").classList.remove("active");
    };
    const prev = () => {
        document
            .querySelector(".PageNumber.active")
            .previousElementSibling.classList.add("active");
        document
            .querySelector(".PageNumber.active")
            .nextSibling.classList.remove("active");
    };

    return (
        <div className="allCardList">
            <div className="CardList">{toutfilter(automobils)}</div>
            <ul className="Pagination">
                <li>
                    <a href="#" className="Prev" onClick={prev}>
                        {"< "}Prev
                    </a>
                </li>
                <li className="PageNumber active">
                    <a href="#">1</a>
                </li>
                <li className="PageNumber">
                    <a href="#">2</a>
                </li>
                <li className="PageNumber">
                    <a href="#">3</a>
                </li>
                <li className="PageNumber">
                    <a href="#">4</a>
                </li>
                <li className="PageNumber">
                    <a href="#">5</a>
                </li>
                <li className="PageNumber">
                    <a href="#">6</a>
                </li>
                <li>
                    <a href="#" className="Prev" onClick={next}>
                        Next{" >"}
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default CardList;
