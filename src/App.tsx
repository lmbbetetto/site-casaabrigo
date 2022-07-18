import { Route, Routes, Link } from 'react-router-dom'

import './components/header/header.css'
import logo from './assets/logo.png'

import './components/wave/wave.css'

import './components/footer/footer.css'
import {ImFacebook} from 'react-icons/im'

import Landing from './components/landing/Landing'
import Contato from './components/contact/Contact'
import Sobre from './components/about/About'
import Transparencia from './components/transparencia/Transparencia'
import Doe from './components/doe/Doe'


function App() {
  return (
    <>
      <header>
        <div className='container'>

          <Link to="/"><img src={logo} alt="Casa Abrigo" className="container__header logo__casa"/></Link>

          <nav className='container__header header_menu'>
            <ul>
              <li><Link to='/'>Início</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/transparencia">Transparência</Link></li>
              <li><Link to="/contato">Contato</Link></li>
              <Link to="/ajude"><button className='btn_doe'>Apoie</button></Link>
            </ul>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/contato' element={<Contato onSubmitContact={function (e: any): void {
          throw new Error('Function not implemented.')
        } }/>} />
        <Route path='/sobre' element={<Sobre/>} />
        <Route path='/transparencia' element={<Transparencia/>} />
        <Route path='/ajude' element={<Doe/>} />
      </Routes>

      <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#cf57b2" fill-opacity="1" d="M0,256L48,224C96,192,192,128,288,138.7C384,149,480,235,576,234.7C672,235,768,149,864,133.3C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>

      <footer>
        <p className='footer__logo'>ACIPP Casa Abrigo</p>
  
        <ul className='permalinks footer'>
          <li><Link to='/'>Início</Link></li>
          <li><Link to='/sobre'>Sobre</Link></li>
          <li><Link to='/transparencia'>Transparência</Link></li>
          <li><Link to='/contato'>Contato</Link></li>
        </ul>
  
        <div className="footer__socials">
          <a href="https://www.facebook.com/acippcasaabrigo" target='_black'><ImFacebook/></a>
        </div>
  
        <div className="footer__copyright">
          <small>&copy; ACIPP Casa Abrigo | Todos os direitos reservados.</small>
        </div>

        <div className="footer__copyright">
          <small>Criado por <a href='https://www.leonardobetetto.dev' target='_blank'>Leonardo Betetto</a></small>
        </div>
      </footer>

    </>
  )
}

export default App