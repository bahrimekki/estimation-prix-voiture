import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./Components/FontAwesomeIcon";
import EstimationPage from "./Pages/EstimationPage/EstimationPage";
import BuyPage from "./Pages/BuyPage/BuyPage";
import NavBar from "./Components/NavBar/NavBar";
import automobils from "./automobil.json";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/estimation">
                        <EstimationPage automobils={automobils} />
                    </Route>
                    <Route path="/occasion">
                        <BuyPage automobils={automobils} />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
