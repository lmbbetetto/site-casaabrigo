import { Link } from "react-router-dom";
import "./landing.css";

import { ImSearch } from "react-icons/im";
import { BsCashCoin } from "react-icons/bs";

function Landing() {
  return (
    <>
      <div className="bg"></div>

      <div className="bg-apoie">
        <div className="container apoie-cit">
          <div className="botao-apoie">
            <ImSearch className="icon-landing" />
            <h3>
              Conheça a nossa história, citações de nossa sócia fundadora e
              voluntários!
            </h3>
            <button className="btn-transparencia">Conheça a Casa Abrigo</button>
          </div>
          <div className="botao-apoie">
            <BsCashCoin className="icon-landing" />
            <h3>Descubra as várias maneiras de ajudar a ACIP Casa Abrigo!</h3>
            <button className="btn-transparencia">Apoie</button>
          </div>
        </div>
      </div>

      <div>
        
      </div>
    </>
  );
}

export default Landing;
