import './doe.css'

import { Link } from 'react-router-dom'

import {BsCashCoin} from 'react-icons/bs'
import {BsCreditCardFill} from 'react-icons/bs'

function Doe(){
    return(
        <section id='portfolio'>
          <div className="inicio">
            <h2>Como ajudar a Casa Abrigo?</h2>
            <h5>Você pode ajudar a ACIPP Casa Abrigo de várias maneiras:</h5>
          </div>
  
        <div className="container portfolio__container">
          <article className='portfolio__item'>
            <BsCreditCardFill className='about__icon' />
            
            <h3>Transferencia / Depósito</h3>
            <p>Banco Sicob</p>
            <p>Agência: 3190</p>
            <p>Conta Corrente: 14.537-8</p>
          </article>
  
          <article className='portfolio__item'>
            <BsCashCoin className='about__icon' />
            <h3>Pix</h3>
            <p>47.609.482/0001-45</p>
          </article>
        </div>

        <div className="rodape">
          <h2>Nós agradecemos imensamente sua colaboração!</h2>
          <Link to="/contato"><button className="btn_green">Fale Conosco</button></Link>
        </div>
      </section>
    )
}

export default Doe