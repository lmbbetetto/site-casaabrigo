import './transparencia.css'

import {MdPictureAsPdf} from 'react-icons/md'

function Transparencia(){
    return(
        <section id='transparencia'>
        <div className="inicio">
          <h2>Como ajudar a Casa Abrigo?</h2>
          <h5>Você pode ajudar a ACIPP Casa Abrigo de várias maneiras:</h5>
        </div>

        <div className="container transparencia__container">
        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3>Nome Item</h3>
          <a className="btn-transparencia">Download</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3>Nome Item</h3>
          <a className="btn-transparencia">Download</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3>Nome Item</h3>
          <a className="btn-transparencia">Download</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3>Nome Item</h3>
          <a className="btn-transparencia">Download</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3>Nome Item</h3>
          <a className="btn-transparencia">Download</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3>Nome Item</h3>
          <a className="btn-transparencia">Download</a>
        </article>
        </div>
    </section>
    )
}

export default Transparencia