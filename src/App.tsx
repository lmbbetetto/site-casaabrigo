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
          <nav className='container__header header_menu'>
          <ul>
            <li><Link to='/'>Início</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/transparencia">Transparência</Link></li>
            <li><Link to="/contato">Contato</Link></li>
            <Link to="/ajude"><button className='btn btn-primary'>Apoie</button></Link>
          </ul>
          </nav>
        </div>

        <div className='logo__casa'>
            <Link to="/"><img src={logo} alt="logo casalar"/></Link>
        </div>
        
        <div>
          <svg className='wave_header' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L20,170.7C40,181,80,203,120,218.7C160,235,200,245,240,218.7C280,192,320,128,360,133.3C400,139,440,213,480,240C520,267,560,245,600,229.3C640,213,680,203,720,186.7C760,171,800,149,840,138.7C880,128,920,128,960,133.3C1000,139,1040,149,1080,165.3C1120,181,1160,203,1200,186.7C1240,171,1280,117,1320,106.7C1360,96,1400,128,1420,144L1440,160L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#feea00" fill-opacity="1" d="M0,256L48,224C96,192,192,128,288,138.7C384,149,480,235,576,234.7C672,235,768,149,864,133.3C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
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