import Footer from "./components/footer/Footer"
import { Route, Routes, Link } from "react-router-dom";
import "./components/wave/wave.css";
import Landing from "./components/landing/Landing";
import Contato from "./components/contact/Contact";
import Sobre from "./components/about/About";
import Transparencia from "./components/transparencia/Transparencia";
import Doe from "./components/doe/Doe";
import Header from "./components/header/Header";
import { Container } from "./homeStyles";

import Wave from "./components/wave/Wave";
import { useState } from "react";
import SubmitModal from "./components/Modal/modal";

function App() {
  const [onSubmitContact, setOnSubmitContact] = useState(false);

  function handleOpenModal() {
    setOnSubmitContact(true);
  }

  function handleCloseModal() {
    setOnSubmitContact(false);
  }

  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contato" element={<Contato onSubmitContact={handleOpenModal} />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/transparencia" element={<Transparencia />} />
        <Route path="/ajude" element={<Doe />} />
      </Routes>
      <SubmitModal isOpen={onSubmitContact} onRequestClose={handleCloseModal} />
      <Wave />
      <Footer />
    </Container>
  );
}

export default App;
