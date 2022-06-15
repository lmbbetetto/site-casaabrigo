import './footer.css'
import {ImFacebook} from 'react-icons/im'

function Footer(){
    return(
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
    )
}

export default Footer