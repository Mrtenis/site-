// src/App.js
import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Aulas from "./components/Aulas/Aulas"; // Import the Aulas component
// import LocacaoDeQuadras from "./components/LocacaoDeQuadras/LocacaoDeQuadras";
// import EventosEsportivos from "./components/EventosEsportivos/EventosEsportivos";
import BeachTenis from "./components/BeachTennis/BeachTennis";

function App() {
  return (
    <>
      <Helmet>
        <title>Mr. Tennis - Seu Portal do Tênis</title>
        <meta
          name="description"
          content="Aprenda, jogue e divirta-se com o melhor do tênis."
        />
      </Helmet>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          {/* Route for Aulas */}
          <Route path="/services/aulas" element={<Aulas />} />
          {/* <Route
            path="/services/locacao-de-quadras"
            element={<LocacaoDeQuadras />}
          />
          <Route
            path="/services/eventos-esportivos"
            element={<EventosEsportivos />}
          /> */}
          <Route path="/services/beach-tennis" element={<BeachTenis />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
