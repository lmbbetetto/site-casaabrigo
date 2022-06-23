import './transparencia.css'

import {MdPictureAsPdf} from 'react-icons/md'
import {BsBookmarksFill} from 'react-icons/bs'

import ata from '../../assets/transparencia/ata_2021.pdf'
import fotos from '../../assets/transparencia/RELATORIO_DE_FOTOS.pdf'
import atividades from '../../assets/transparencia/RELATORIO_ANUAL_DE_ATIVIDADES _DO_ANO_2021.pdf'
import plano06 from '../../assets/transparencia/Plano_de_Trabalho_e_Proposta-0006-2022.pdf'
import plano07 from '../../assets/transparencia/Plano_de_Trabalho_e_Proposta-0007-2022.pdf'
import plano08 from '../../assets/transparencia/Plano_de_Trabalho_e_Proposta-0008-2022.pdf'

function Transparencia(){
    return(
        <section id='transparencia'>
        <div className="inicio">
          <h2>Transparência</h2>
          <h5>Portal transparência ACIPP Casa Abrigo</h5>
        </div>

        <div className='container sinconvinho'>
          <article className='portfolio__item'>
            <BsBookmarksFill className='about__icon' />
            <h3 className='transparencia_h3'>SICONVINHO - Sistema de Parcerias entre Prefeituras e Entidades</h3>
            <a href='https://www.lei13019.com.br/inicial.php?orgao_id=65&orgao_nome=Munic%C3%ADpio%20da%20Est%C3%A2ncia%20Tur%C3%ADstica%20de%20Paragua%C3%A7u%20Paulista&orgao_estado=SP&orgao_cidade=Paragua%C3%A7u%20Paulista&orgao_logomarca=jpg&pasta=sp/paraguacupaulista/' target='_blank' className="btn-transparencia">Acesso ao Sistema</a>
          </article>
        </div>

        <div className="container transparencia__container">
        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>Ata - 2021</h3>
          <a href={ata} download className="btn-transparencia">Download</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>Relatório Fotografico</h3>
          <a href={fotos} download className="btn-transparencia espaco">Download</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>Relatório Anual de Atividades - 2021</h3>
          <a href={atividades} download className="btn-transparencia">Download</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>Plano de Trabalho e Proposta - 0006/2022</h3>
          <a  href={plano06} download className="btn-transparencia">Download</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>Plano de Trabalho e Proposta - 0007/2022</h3>
          <a  href={plano07} download className="btn-transparencia">Download</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>Plano de Trabalho e Proposta - 0008/2022</h3>
          <a  href={plano08} download className="btn-transparencia">Download</a>
        </article>
        </div>
    </section>
    )
}

export default Transparencia