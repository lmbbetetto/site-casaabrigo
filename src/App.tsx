import "./components/footer/footer.css"
import { ImFacebook } from "react-icons/im";

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
import { Trasnparencia2022 } from "./components/transparencia/2022/Transp2022";
import { Trasnparencia2023 } from "./components/transparencia/2023/Transp2023";

function App() {
  const [onSubmitContact, setOnSubmitContact] = useState(false);

  function handleOpenModal() {
    setOnSubmitContact(true);
  }

  function handleCloseModal() {
    setOnSubmitContact(false);
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/contato"
          element={<Contato onSubmitContact={handleOpenModal} />}
        />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/transparencia" element={<Transparencia />} />
        <Route path="/transparencia2022" element={<Trasnparencia2022 />} />
        <Route path="/transparencia2023" element={<Trasnparencia2023 />} />
        <Route path="/ajude" element={<Doe />} />
      </Routes>
      <SubmitModal isOpen={onSubmitContact} onRequestClose={handleCloseModal} />
      <Wave />

      <footer>
        <p className="footer__logo">ACIPP Casa Abrigo</p>

        <ul className="permalinks footer">
          <li onClick={scrollToTop}>
            <Link to="/">Início</Link>
          </li>
          <li onClick={scrollToTop}>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li onClick={scrollToTop}>
            <Link to="/transparencia">Transparência</Link>
          </li>
          <li onClick={scrollToTop}>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.facebook.com/acippcasaabrigo" target="_black">
            <ImFacebook />
          </a>
        </div>

        <div className="footer__copyright">
          <small>
            &copy; ACIPP Casa Abrigo | Todos os direitos reservados.
          </small>
        </div>

        <div className="footer__copyright">
          <small>
            Criado por{" "}
            <a href="https://www.leonardobetetto.dev" target="_blank">
              Leonardo Betetto
            </a>
          </small>
        </div>
      </footer>
    </Container>
  );
}

export default App;
