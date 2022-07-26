import './styles.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AnimatedHumburguerButton } from './animatedHamburguerButton'

function Header() {

  const [active, setActive] = useState(false)

  return (
    <>
      <header className='desktop container header_container'>
        <Link to="/"><img src={logo} alt="Casa Abrigo" className="logo__casa" /></Link>

        <div className='container header_menu'>
          <a><Link to='/'>Início</Link></a>
          <a><Link to="/sobre">Sobre</Link></a>
          <a><Link to="/transparencia">Transparência</Link></a>
          <a><Link to="/contato">Contato</Link></a>
          <Link to="/ajude"><button className='btn_doe'>Apoie</button></Link>
        </div>
      </header>

      <header className='mobile'>
        <Link to="/"><img src={logo} alt="Casa Abrigo" className="logo__casa" /></Link>

        <button
          className='hamburguer'
          onClick={() => {
            setActive(!active)
          }}
        >
          <AnimatedHumburguerButton active={active} />
        </button>
        <div className={active ? "activeSidenav" : "sidenav"}>
          <div className="container_mobile">
            <div className="mobile_1">
              <a><Link to='/'>Início</Link></a>
              <a><Link to="/sobre">Sobre</Link></a>
              <a><Link to="/transparencia">Transparência</Link></a>
              <a><Link to="/contato">Contato</Link></a>
              <Link to="/ajude"><button className='btn_doe'>Apoie</button></Link>
            </div>

          </div>
        </div>
      </header>
    </>
  )
}

export default Header