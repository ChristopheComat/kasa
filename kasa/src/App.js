import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./Accueil";
import About from "./About";
import FicheLogement from "./FicheLogement";
import Error from "./Error";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/Accueil" component={Accueil} />
                <Route path="/About" component={About} />
                <Route path="/FicheLogement" component={FicheLogement} />
                <Route path="*" component={Error} />
            </Routes>
        </Router>
    );
}

export default App;
