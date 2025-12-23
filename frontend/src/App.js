import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Liste from "./pages/Liste";
import ArtisanFiche from "./pages/ArtisanFiche";
import Specialite from "./pages/Specialite"; // ← import de la page spécialité
import Erreur from "./pages/Erreur";

import Mentionslegales from "./pages/Mentionslegales";
import Donnees from "./pages/Donnees";
import Accessibilite from "./pages/Accessibilite";
import Presse from "./pages/Presse";
import Marches from "./pages/Marches";
import Region from "./pages/Region";
import Contacts from "./pages/Contacts";
import Politique from "./pages/Politique";
import Gestion from "./pages/Gestion";

const App = () => {
    const [searchTerm, setSearchTerm] = useState(""); // état global pour la recherche

    return (
        <div>
            <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/liste/:slug" element={<Liste searchTerm={searchTerm} />} />
                <Route path="/artisans/:id" element={<ArtisanFiche />} />
                <Route path="/specialite/:nom" element={<Specialite />} /> {/* ← route spécialité */}
                <Route path="*" element={<Erreur />} />

                <Route path="/mentionslegales" element={<Mentionslegales />} />
                <Route path="/donnees" element={<Donnees />} />
                <Route path="/accessibilite" element={<Accessibilite />} />
                <Route path="/presse" element={<Presse />} />
                <Route path="/marches" element={<Marches />} />
                <Route path="/region" element={<Region />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/politique" element={<Politique />} />
                <Route path="/gestion" element={<Gestion />} />
            </Routes>

            <Footer />
        </div>
    );
};

export default App;
