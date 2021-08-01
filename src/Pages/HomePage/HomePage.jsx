import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import Title from "react-vanilla-tilt";

function HomePage() {
    const btn = (e) => {
        const x =
            e.pageX -
            (e.nativeEvent.path[1].offsetLeft +
                e.nativeEvent.path[1].offsetParent.offsetLeft);
        const y =
            e.pageY -
            (e.nativeEvent.path[1].offsetTop +
                e.nativeEvent.path[1].offsetParent.offsetTop);
        document.querySelector(".cerc").style.left = x + "px";
        document.querySelector(".cerc").style.top = y + "px";
    };
    const btn2 = (e2) => {
        const x2 =
            e2.pageX -
            (e2.nativeEvent.path[1].offsetLeft +
                e2.nativeEvent.path[1].offsetParent.offsetLeft);
        const y2 =
            e2.pageY -
            (e2.nativeEvent.path[1].offsetTop +
                e2.nativeEvent.path[1].offsetParent.offsetTop);
        document.querySelector(".cerc2").style.left = x2 + "px";
        document.querySelector(".cerc2").style.top = y2 + "px";
    };
    return (
        <div className="HomePage">
            <div
                className="imag"
                style={{ backgroundImage: "url(/img/bacground.png)" }}
            ></div>
            <Title
                className="estimation"
                style={{}}
                options={{
                    max: 25,
                    speed: 300,
                    glare: true,
                    "max-glare": 1,
                }}
            >
                <h1 className="white">Estimation du prix de vente</h1>
                <p className="grey">
                    Ce processus vise à vous aider à estimer le prix approprié
                    pour vendre votre voiture en comparant les spécifications
                    que vous saisirez dans le système avec les offres proposées
                    pour la vente de voitures similere affichées sur différents
                    sites de vente des voiture occasion.
                </p>
                <Link
                    className="hhh"
                    to="/estimation"
                    onMouseMove={(e) => btn(e)}
                >
                    <div className="cerc"></div>
                    <span>Commencer</span>
                </Link>
            </Title>
            <Title
                options={{
                    max: 0,
                    speed: 600,
                    glare: true,
                    "max-glare": 1,
                }}
                className="buy"
                style={{}}
            >
                <h1 className="white">Acheté une voiture d'occasion</h1>
                <p className="grey">
                    Cette démarche a pour but de vous aider à trouver la voiture
                    qui vous convient à travers les specifications que vous
                    préciserez
                </p>
                <Link
                    className="hhh2"
                    to="/occasion"
                    onMouseMove={(e2) => btn2(e2)}
                >
                    <div className="cerc2"></div>
                    <span>Commencer</span>
                </Link>
            </Title>
        </div>
    );
}

export default HomePage;
