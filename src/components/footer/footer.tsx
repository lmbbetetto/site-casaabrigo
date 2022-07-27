import "./footer.css";
import { ImFacebook } from "react-icons/im";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <p className="footer__logo">ACIPP Casa Abrigo</p>

      <ul className="permalinks footer">
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/transparencia">Transparência</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/acippcasaabrigo" target="_black">
          <ImFacebook />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; ACIPP Casa Abrigo | Todos os direitos reservados.</small>
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
  );
}

export default Footer;
