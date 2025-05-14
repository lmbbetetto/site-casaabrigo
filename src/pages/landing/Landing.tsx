import { Link } from "react-router-dom";
import "./landing.css";

import { ImSearch } from "react-icons/im";
import { BsCashCoin } from "react-icons/bs";

function Landing() {
  return (
    <>
      <div className="bg">
        <header className="header">
          <div className="logo">
            <span className="acipp-logo">
              <span style={{ color: "#9D0B0E" }}>A</span>
              <span style={{ color: "#CB2E2E" }}>C</span>
              <span style={{ color: "#00C389" }}>I</span>
              <span style={{ color: "#F9A03F" }}>P</span>
              <span style={{ color: "#4983B8" }}>P</span>
            </span>
            <span className="casa-abrigo">Casa Abrigo</span>
          </div>
        </header>

        <h3 className="cit_landing">
          "Quando se sonha sozinho é só um sonho. <br />
          Quando sonhamos juntos começa uma nova realidade."
        </h3>
        <h2 className="subtitulo_landing">Cervantes</h2>
      </div>

      <div className="bg-apoie">
        <div className="container apoie-cit">
          <div className="botao-apoie">
            <ImSearch className="icon-landing" />
            <h3>
              Conheça a nossa história, citações de nossa sócia fundadora e
              voluntários!
            </h3>
            <Link to="/sobre">
              <button className="btn-transparencia">
                Conheça a Casa Abrigo
              </button>
            </Link>
          </div>
          <div className="botao-apoie">
            <BsCashCoin className="icon-landing" />
            <h3>Descubra as várias maneiras de ajudar a ACIPP Casa Abrigo!</h3>
            <Link to="/ajude">
              <button className="btn-transparencia">Apoie</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
