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
import proposta22 from '../../assets/transparencia/proposta_22.pdf'
import proposta23 from '../../assets/transparencia/proposta_23.pdf'
import ultilidade from '../../assets/transparencia/utilidade_publica_municipal.pdf'
import bombeiro from '../../assets/transparencia/ALVARA_BOMBEIRO.pdf'
import ultiestadual from '../../assets/transparencia/UTILIDADE_PUBLICA_ESTADUAL.pdf'




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
          <h3 className='ata transparencia_h3'>Ata - 2021</h3>
          <a href={ata} target='_blank' className="btn-transparencia">Abrir</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>Relatório Fotografico | Relatório Anual de Atividades - 2021</h3>
          <a href={fotos} target='_blank' className="btn-transparencia">Fotos</a>
          <a href={atividades} target='_blank' className="btn-transparencia">Atividades</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>Proposta e Plano de Trabalho 06/2022 TF 11/2022</h3>
          <a  href={plano06} target='_blank' className="btn-transparencia">Abrir</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>Proposta e Plano de Trabalho 07/2022 TF 12/2022</h3>
          <a  href={plano07} target='_blank' className="btn-transparencia">Abrir</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>Proposta e Plano de Trabalho 08/2022 TF 13/2022</h3>
          <a  href={plano08} target='_blank' className="btn-transparencia">Abrir</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>Proposta e Plano de Trabalho 22/2022 TF 20/2022</h3>
          <a  href={proposta22} target='_blank' className="btn-transparencia">Abrir</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>Proposta e Plano de Trabalho 23/2022 TF 14/2022</h3>
          <a  href={proposta23} target='_blank' className="btn-transparencia">Abrir</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='cnpj transparencia_h3'>CEBAS | CNAS</h3>
          <a  href={sebas} target='_blank' className="btn-transparencia">Abrir</a>
          <a  href={sebas1} target='_blank' className="btn-transparencia">Abrir</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='cnpj transparencia_h3'>CNPJ</h3>
          <a  href={cnpj} target='_blank' className="btn-transparencia">Abrir</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>CRCE</h3>
          <a  href={crce} target='_blank' className="btn-transparencia">Abrir</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>Estatuto - 2018</h3>
          <a  href={estatuto} target='_blank' className="btn-transparencia">Abrir</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>INSC - CMAS</h3>
          <a  href={insc} target='_blank' className="btn-transparencia">Abrir</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>INSC - CMDCA</h3>
          <a  href={cmdca} target='_blank' className="btn-transparencia">Abrir</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>Emendas Impositivas</h3>
          <a  href={emenda_impositiva} target='_blank' className="btn-transparencia">Abrir</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>PT - 2021 - Federal</h3>
          <a  href={pt_2021} target='_blank' className="btn-transparencia">Abrir</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='ulti transparencia_h3'>Ultilidade Publica Municipal</h3>
          <a  href={ultilidade} target='_blank' className="btn-transparencia">Abrir</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='ulti transparencia_h3'>Ultilidade Publica Estadual</h3>
          <a  href={ultiestadual} target='_blank' className="btn-transparencia">Abrir</a>
        </article>

        <article className='portfolio__item'>
          <MdPictureAsPdf className='about__icon' />
          <h3 className='transparencia_h3'>Certificado de Lincença do Corpo de Bombeiros</h3>
          <a  href={bombeiro} target='_blank' className="btn-transparencia">Abrir</a>
        </article>
        </div>
    </section>
    )
}

export default Transparencia