import { BrowserRouter as Router, Route } from 'react-router-dom'

import './components/header/header.css'
import logo from './assets/logo.png'

import './components/wave/wave.css'

import './components/footer/footer.css'
import {ImFacebook} from 'react-icons/im'

import Landing from './components/landing/Landing'


function App() {

  return (
    <Router>
      <header>
        <div className='container'>
          <nav className='container__header header_menu'>
          <ul>
            <input
              type="search"
              className='search'
              placeholder='Procurando algo?'
            />
            <li><a href="">Sobre</a></li>
            <li><a href="">Transparência</a></li>
            <li><a href="">Contato</a></li>
            <a href=""><button className='btn btn-yellow'>Doação</button></a>
          </ul>
          </nav>
        </div>

        <div className='logo__casa'>
            <img src={logo} alt="logo casalar" />
        </div>
      </header>

      <Route component = { Landing } path='/' />

      <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,256L48,224C96,192,192,128,288,138.7C384,149,480,235,576,234.7C672,235,768,149,864,133.3C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>

      <footer>
        <p className='footer__logo'>ACIPP Casa Abrigo</p>
  
        <ul className='permalinks footer'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#experience">Transparência</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
  
        <div className="footer__socials">
          <a href="https://www.facebook.com/acippcasaabrigo" target='_black'><ImFacebook/></a>
        </div>
  
        <div className="footer__copyright">
          <small>&copy; ACIPP Casa Abrigo. Todos os direitos reservados.</small>
        </div>
      </footer>

    </Router>
  )
}

export default App