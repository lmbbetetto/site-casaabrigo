import './doe.css'

import {BsCashCoin} from 'react-icons/bs'
import {VscFolderLibrary} from 'react-icons/vsc'

function Doe(){
    return(
        <section id='portfolio'>
        <h5>Meus trabalhos</h5>
        <h2>Como ajudar a Casa Abrigo?</h2>
  
        <div className="container portfolio__container">
          <article className='portfolio__item'>
            <BsCashCoin className='about__icon' />
            <h3>Transferencia / Depósito</h3>
          </article>
  
          <article className='portfolio__item'>
            <h3>Pix</h3>
          </article>
        </div>
      </section>
    )
}

export default Doe