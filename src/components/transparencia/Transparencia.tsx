import './transparencia.css'

import {MdPictureAsPdf} from 'react-icons/md'
import {BsBookmarksFill} from 'react-icons/bs'

import ata from '../../assets/transparencia/ata_2021.pdf'
import fotos from '../../assets/transparencia/RELATORIO_DE_FOTOS.pdf'
import atividades from '../../assets/transparencia/RELATORIO_ANUAL_DE_ATIVIDADES _DO_ANO_2021.pdf'
import plano06 from '../../assets/transparencia/Plano_de_Trabalho_e_Proposta-0006-2022.pdf'
import plano07 from '../../assets/transparencia/Plano_de_Trabalho_e_Proposta-0007-2022.pdf'
import plano08 from '../../assets/transparencia/Plano_de_Trabalho_e_Proposta-0008-2022.pdf'
import sebas from '../../assets/transparencia/CEBAS_2025.pdf'
import sebas1 from '../../assets/transparencia/CEBAS_2025_1.pdf'
import cnpj from '../../assets/transparencia/CNPJ.pdf'
import crce from '../../assets/transparencia/CRCE.pdf'
import estatuto from '../../assets/transparencia/ESTATUTO_2018.pdf'
import insc from '../../assets/transparencia/INSC_CMAS.pdf'
import cmdca from '../../assets/transparencia/INSC_CMDCA.pdf'
import emenda_impositiva from '../../assets/transparencia/PL_2021_EMENDAS_IMPOSITIVAS.pdf'
import pt_2021 from '../../assets/transparencia/PT _2021_FEDERAL.pdf'
import municipal from '../../assets/transparencia/TA_06_2021_MUNICIPAL.pdf'
import estadual from '../../assets/transparencia/TA_07_2021_ESTADUAL.pdf'
import ultilidade from '../../assets/transparencia/utilidade_publica_municipal.pdf'




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

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>CEBAS - 2025</h3>
          <a  href={sebas} download className="btn-transparencia">Download</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>CEBAS - 2025</h3>
          <a  href={sebas1} download className="btn-transparencia">Download</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>CNPJ</h3>
          <a  href={cnpj} download className="btn-transparencia">Download</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>CRCE</h3>
          <a  href={crce} download className="btn-transparencia">Download</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>Estatuto - 2018</h3>
          <a  href={estatuto} download className="btn-transparencia">Download</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>INSC - CMAS</h3>
          <a  href={insc} download className="btn-transparencia">Download</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>INSC - CMDCA</h3>
          <a  href={cmdca} download className="btn-transparencia">Download</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>Emendas Impositivas</h3>
          <a  href={emenda_impositiva} download className="btn-transparencia">Download</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>PT - 2021 - Federal</h3>
          <a  href={pt_2021} download className="btn-transparencia">Download</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>TA - 06/2021 - Municipal</h3>
          <a  href={municipal} download className="btn-transparencia">Download</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>TA - 07/2021 - Estadual</h3>
          <a  href={estadual} download className="btn-transparencia">Download</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>Ultilidade Publica Municipal</h3>
          <a  href={ultilidade} download className="btn-transparencia">Download</a>
        </article>
        </div>
    </section>
    )
}

export default Transparencia