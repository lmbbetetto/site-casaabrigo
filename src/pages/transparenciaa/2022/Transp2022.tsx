import style from './style.module.css'

import { MdPictureAsPdf } from 'react-icons/md'
import { BsBookmarksFill } from 'react-icons/bs'
import { BsArrowLeft } from 'react-icons/bs'

import ata from '../../../assets/transparencia/ata_2021.pdf'
import fotos from '../../../assets/transparencia/RELATORIO_DE_FOTOS.pdf'
import atividades from '../../../assets/transparencia/RELATORIO_ANUAL_DE_ATIVIDADES _DO_ANO_2021.pdf'
import plano06 from '../../../assets/transparencia/Plano_de_Trabalho_e_Proposta-0006-2022.pdf'
import plano07 from '../../../assets/transparencia/Plano_de_Trabalho_e_Proposta-0007-2022.pdf'
import plano08 from '../../../assets/transparencia/Plano_de_Trabalho_e_Proposta-0008-2022.pdf'
import sebas from '../../../assets/transparencia/CEBAS_2025.pdf'
import sebas1 from '../../../assets/transparencia/CEBAS_2025_1.pdf'
import cnpj from '../../../assets/transparencia/CNPJ.pdf'
import crce from '../../../assets/transparencia/CRCE.pdf'
import estatuto from '../../../assets/transparencia/ESTATUTO_2018.pdf'
import insc from '../../../assets/transparencia/INSC_CMAS.pdf'
import cmdca from '../../../assets/transparencia/INSC_CMDCA.pdf'
import proposta22 from '../../../assets/transparencia/proposta_22.pdf'
import proposta23 from '../../../assets/transparencia/proposta_23.pdf'
import ultilidade from '../../../assets/transparencia/utilidade_publica_municipal.pdf'
import bombeiro from '../../../assets/transparencia/ALVARA_BOMBEIRO.pdf'
import ultiestadual from '../../../assets/transparencia/UTILIDADE_PUBLICA_ESTADUAL.pdf'

import tf11Rel from '../../../assets/transparencia/2022/RELAÇÃO DE DESPESAS-TF11-3ºQUADRIMESTRE-FEDERAL 2022.pdf'
import tf12Rel from '../../../assets/transparencia/2022/RELAÇÃO DE DESPESAS-TF12-MUNICIPAL-3ºQUADRIMESTRE 2022.pdf'
import tf13Rel from '../../../assets/transparencia/2022/RELAÇÃO DE DESPESAS-TF13-ESTADUAL-3°QUADRIMESTRE 2022.pdf'
import tf14Rel from '../../../assets/transparencia/2022/RELAÇÃO DE DESPESAS-TF14-EMENDAS IMPOSITIVAS 2022.pdf'
import tf28Rel from '../../../assets/transparencia/2022/RELAÇÃO DE DESPESAS-TF28-FMDCA 2022.pdf'
import rp10inst from '../../../assets/transparencia/2022/RP 10 -instalação de Sistema de Energia Fotovotaica- TF20-MUNICIPAL-2°quadrimestre 2022.pdf'
import rp10tf11_1 from '../../../assets/transparencia/2022/RP10-TF11-FEDERAL-1ºQUADRIMESTRE 2022.pdf'
import rp10tf11_2 from '../../../assets/transparencia/2022/RP10-TF11-FEDERAL-2ºQUADRIMESTRE 2022.pdf'
import rp10tf11_3 from '../../../assets/transparencia/2022/RP10-TF11-FEDERAL-3ºQUADRIMESTRE 2022.pdf'
import rp10tf11Anual from '../../../assets/transparencia/2022/RP10-TF11-FEDERAL-ANUAL 2022.pdf'
import rp10tf12_1 from '../../../assets/transparencia/2022/RP10-TF12-MUNICIPAL-1ºQUADRIMESTRE 2022.pdf'
import rp10tf12_2 from '../../../assets/transparencia/2022/RP10-TF12-MUNICIPAL-2ºQUADRIMESTRE 2022.pdf'
import rp10tf12_3 from '../../../assets/transparencia/2022/RP10-TF12-MUNICIPAL-3ºQUADRIMESTRE 2022.pdf'
import rp10tf12Anual from '../../../assets/transparencia/2022/RP10-TF12-MUNICIPAL-ANUAL 2022.pdf'
import rp10tf13_1 from '../../../assets/transparencia/2022/RP10-TF13-ESTADUAL-1ºQUADRIMESTRE 2022.pdf'
import rp10tf13_2 from '../../../assets/transparencia/2022/RP10-TF13-ESTADUAL-2ºQUADRIMESTRE 2022.pdf'
import rp10tf13_3 from '../../../assets/transparencia/2022/RP10-TF13-ESTADUAL-3ºQUADRIMESTRE 2022.pdf'
import rp10tf13Anual from '../../../assets/transparencia/2022/RP10-TF13-ESTADUAL-ANUAL 2022.pdf'
import rp10tf14_1 from '../../../assets/transparencia/2022/RP10-TF14-EMENDAS IMPOSITIVAS -1ºQUADRIMESTRE 2022.pdf'
import rp10tf14_2 from '../../../assets/transparencia/2022/RP10-TF14-EMENDAS IMPOSITIVAS-2ºQUADRIMESTRE 2022.pdf'
import rp10tf14_3 from '../../../assets/transparencia/2022/RP10-TF14-EMENDAS IMPOSITIVAS-3ºQUADRIMESTRE 2022.pdf'
import rp10tf14Anual from '../../../assets/transparencia/2022/RP10-TF14-EMENDAS IMPOSITIVAS-ANUAL 2022.pdf'
import rp10tf28_2 from '../../../assets/transparencia/2022/RP10-TF28-FMDCA-2ºQUADRIMESTRE 2022.pdf'
import rp10tf28_3 from '../../../assets/transparencia/2022/RP10-TF28-TA20-FMDCA-3ºQUADRIMESTRE 2022.pdf'
import rp10tf28Anual from '../../../assets/transparencia/2022/RP10-TF28-TA20-FMDCA-ANUAL 2022.pdf'
import BALANCO from '../../../assets/transparencia/2022/BALANÇO2022.pdf'

import { Link } from 'react-router-dom'

export function Trasnparencia2022() {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };


    return (
        <>
            <section id='transparencia'>
                <div className={style.voltar}>
                    <Link to={'/transparencia'}><button onClick={scrollToTop}><BsArrowLeft size={25} />Voltar</button></Link>
                </div>

                <div className="inicio">
                    <h2>Transparência</h2>
                    <h5>Portal transparência do ano de 2022 | ACIPP Casa Abrigo</h5>
                </div>

                <div className={style.sinconvinho}>
                    <article className='portfolio__item'>
                        <BsBookmarksFill className='about__icon' />
                        <h3 className='transparencia_h3'>SICONVINHO - Sistema de Parcerias entre Prefeituras e Entidades</h3>
                        <a href='https://www.lei13019.com.br/inicial.php?orgao_id=65&orgao_nome=Munic%C3%ADpio%20da%20Est%C3%A2ncia%20Tur%C3%ADstica%20de%20Paragua%C3%A7u%20Paulista&orgao_estado=SP&orgao_cidade=Paragua%C3%A7u%20Paulista&orgao_logomarca=jpg&pasta=sp/paraguacupaulista/' target='_blank' className="btn-transparencia">Acesso ao Sistema</a>
                    </article>
                </div>

                <div className={style.transparencia__container}>
                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='ata transparencia_h3'>Ata de eleiçao gestão - 2021/2022</h3>
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
                        <a href={plano06} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>Proposta e Plano de Trabalho 07/2022 TF 12/2022</h3>
                        <a href={plano07} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>Proposta e Plano de Trabalho 08/2022 TF 13/2022</h3>
                        <a href={plano08} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>Proposta e Plano de Trabalho 22/2022 TF 20/2022</h3>
                        <a href={proposta22} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>Proposta e Plano de Trabalho 23/2022 TF 14/2022</h3>
                        <a href={proposta23} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='cnpj transparencia_h3'>CEBAS | CNAS</h3>
                        <a href={sebas} target='_blank' className="btn-transparencia">Abrir</a>
                        <a href={sebas1} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='cnpj transparencia_h3'>CNPJ</h3>
                        <a href={cnpj} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>CRCE</h3>
                        <a href={crce} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>Estatuto</h3>
                        <a href={estatuto} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>INSC - CMAS</h3>
                        <a href={insc} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>INSC - CMDCA</h3>
                        <a href={cmdca} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='ulti transparencia_h3'>Utilidade Publica Municipal</h3>
                        <a href={ultilidade} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='ulti transparencia_h3'>Utilidade Publica Estadual</h3>
                        <a href={ultiestadual} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>Certificado de Lincença do Corpo de Bombeiros</h3>
                        <a href={bombeiro} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>Relação de Despesas - TF11 3º Quadrimestre - Federal</h3>
                        <a href={tf11Rel} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>Relação de Despesas - TF12 3º Quadrimestre - Municipal</h3>
                        <a href={tf12Rel} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>Relação de Despesas - TF13 3º Quadrimestre - Estadual</h3>
                        <a href={tf13Rel} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>Relação de Despesas - TF14 Emendas Impositivas</h3>
                        <a href={tf14Rel} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>Relação de Despesas - TF14 FMDCA</h3>
                        <a href={tf28Rel} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>RP10 - Instalação de Sistema de Energia Fotovotaica - TF20 - MUNICIPAL - 2° Quadrimestre</h3>
                        <a href={rp10inst} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>RP10 - TF11 1º Quadrimestre - Federal</h3>
                        <a href={rp10tf11_1} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>RP10 - TF11 2º Quadrimestre - Federal</h3>
                        <a href={rp10tf11_2} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>RP10 - TF11 3º Quadrimestre - Federal</h3>
                        <a href={rp10tf11_3} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>RP10 - TF11 Anual - Federal</h3>
                        <a href={rp10tf11Anual} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>RP10 - TF12 1º Quadrimestre - Municipal</h3>
                        <a href={rp10tf12_1} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>RP10 - TF12 2º Quadrimestre - Municipal</h3>
                        <a href={rp10tf12_2} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>RP10 - TF12 3º Quadrimestre - Municipal</h3>
                        <a href={rp10tf12_3} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>RP10 - TF12 Anual - Municipal</h3>
                        <a href={rp10tf12Anual} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>RP10 - TF13 1º Quadrimestre - Estadual</h3>
                        <a href={rp10tf13_1} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>RP10 - TF13 2º Quadrimestre - Estadual</h3>
                        <a href={rp10tf13_2} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>RP10 - TF13 3º Quadrimestre - Estadual</h3>
                        <a href={rp10tf13_3} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>RP10 - TF13 Anual - Estadual</h3>
                        <a href={rp10tf13Anual} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>RP10 - TF14 1º Quadrimestre - Emendas Impositivas</h3>
                        <a href={rp10tf13_1} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>RP10 - TF14 1º Quadrimestre - Emendas Impositivas</h3>
                        <a href={rp10tf14_1} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>RP10 - TF14 2º Quadrimestre - Emendas Impositivas</h3>
                        <a href={rp10tf14_2} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>RP10 - TF14 3º Quadrimestre - Emendas Impositivas</h3>
                        <a href={rp10tf14_3} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>RP10 - TF14 Anual - Emendas Impositivas</h3>
                        <a href={rp10tf14Anual} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>RP10 - TF28 2º Quadrimestre - FMDCA</h3>
                        <a href={rp10tf28_2} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>RP10 - TF28 3º Quadrimestre - FMDCA</h3>
                        <a href={rp10tf28_3} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>RP10 - TF28 Anual - FMDCA</h3>
                        <a href={rp10tf28Anual} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>
                    
                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>BALANÇO 2022</h3>
                        <a href={BALANCO} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>
                </div>
            </section>
        </>
    )
}