import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import FicheLogement from "./Pages/FicheLogement";
import Error from "./Pages/Error";
import Footer from "./Components/Footer";

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/fiche-logement" element={<FicheLogement />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
