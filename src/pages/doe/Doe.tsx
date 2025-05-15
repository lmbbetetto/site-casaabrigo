import "./doe.css";

import { Link } from "react-router-dom";

import { BsCashCoin } from "react-icons/bs";
import { BsCreditCardFill } from "react-icons/bs";
import { RiHandHeartFill } from "react-icons/ri";
import imgFundo from "../../assets/support-photo.jpg";

export function Doe() {
  return (
    <>
      <div className="titulo">
        <div className="tituloTexto">
          <p>Transparência</p>
          <h1>Apoie-nos</h1>
          <h2>ACIPP Casa Abrigo</h2>
        </div>
        <img src={imgFundo} alt="Imagem de fundo" className="imgFundo" />
      </div>

      <h1 className="textoPrincipal">
        Entre em <span className="textoPrincipalGreen">contato</span> conosco e
        tire suas
        <span className="textoPrincipalGreen"> dúvidas</span>! Estamos à
        disposição para <span className="textoPrincipalGreen">ajudar </span>você
        da <span className="textoPrincipalGreen">melhor forma possível</span>.
      </h1>

      <section id="portfolio">
        <div className="container portfolio__container">
          <article className="portfolio__items">
            <BsCreditCardFill className="about__icon" />

            <h3>Transferencia / Depósito</h3>
            <p>Banco Sicob</p>
            <p>Agência: 3190</p>
            <p>Conta Corrente: 14.537-8</p>
          </article>

          <article className="portfolio__items">
            <BsCashCoin className="about__icon" />
            <div>
              <h3>Pix</h3>
              <p>47.609.482/0001-45</p>
            </div>
          </article>

          <article className="portfolio__items">
            <RiHandHeartFill className="about__icon" />
            <h3>Imposto do Coração</h3>
            <p className="doe_p">
              Doe seu imposto de renda para a Casa Abrigo!
            </p>
            <Link to="/contato">
              <button className="btn-transparencia">Fale Conosco</button>
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
