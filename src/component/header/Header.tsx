import "./styles.css";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatedHumburguerButton } from "./animatedHamburguerButton";
import { FaHeart } from "react-icons/fa";

export function Header() {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const headerBgColor = location.pathname === "/" ? "bg-home" : "bg-other";

  return (
    <>
      <div className={`containerMenu ${headerBgColor}`}>
        <header className="menu">
          <div>
            <Link to="/">
              <img src={logo} alt="Logo Casa Lar" className="logo__casa" />
            </Link>
          </div>
          <div>
            <nav className="itensMenu">
              <ul>
                <Link to="/">
                  <li>Início</li>
                </Link>
                <Link to="/sobre">
                  <li>Sobre</li>
                </Link>
                <Link to="/transparencia">
                  <li>Transparência</li>
                </Link>
                <Link to="/contato">
                  <li>Contato</li>
                </Link>
                <Link to="/ajude">
                  <button className="btn_doe">
                    <FaHeart size={15} /> Apoie
                  </button>
                </Link>
              </ul>
            </nav>
          </div>
        </header>
      </div>

      <header className={`mobile ${headerBgColor}`}>
        <Link to="/">
          <img src={logo} alt="Casa Abrigo" className="logo__casa" />
        </Link>

        <button
          className="hamburguer"
          onClick={() => {
            setActive(!active);
          }}
        >
          <AnimatedHumburguerButton active={active} />
        </button>
        <div className={active ? "activeSidenav" : "sidenav"}>
          <div className="container_mobile">
            <div className="mobile_1">
              <a>
                <Link to="/">Início</Link>
              </a>
              <a>
                <Link to="/sobre">Sobre</Link>
              </a>
              <a>
                <Link to="/transparencia">Transparência</Link>
              </a>
              <a>
                <Link to="/contato">Contato</Link>
              </a>
              <Link to="/ajude">
                <button className="btn_doe">Apoie</button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
