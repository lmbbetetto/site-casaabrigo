import "./footer.css";
import { ImFacebook } from "react-icons/im";
import { Link } from "react-router-dom";
import Wave from "../wave/Wave";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
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
    </>
  );
}
