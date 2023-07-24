import style from './style.module.css'

import { MdPictureAsPdf } from 'react-icons/md'
import { BsArrowLeft } from 'react-icons/bs'

import { Link } from 'react-router-dom'

import ata from '../../../assets/transparencia/2023/ATA DIRETORIA 2023.pdf'
import avcb from '../../../assets/transparencia/2023/AVCB_2026.pdf'
import cmdca from '../../../assets/transparencia/2023/CMDCA 2023.pdf'
import crce from '../../../assets/transparencia/2023/CRCE-2023.pdf'
import prosocial from '../../../assets/transparencia/2023/PRO SOCIAL 2023.pdf'
import taM from '../../../assets/transparencia/2023/TA-02-2023-MUNICIPAL.pdf'
import tf from '../../../assets/transparencia/2023/TF 04-2023-EMENDA IMPOSITIVA.pdf'
import taE from '../../../assets/transparencia/2023/TA-03-2023- ESTADUAL.pdf'
import taF from '../../../assets/transparencia/2023/TA-04-2023-FEDERAL.pdf'
import utilidade from '../../../assets/transparencia/2023/UTILIDADE PUBLICA ESTADUAL 2023.pdf'

export function Trasnparencia2023() {

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
                    <h5>Portal transparência do ano de 2023 | ACIPP Casa Abrigo</h5>
                </div>

                <div className={style.transparencia__container}>
                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='ata transparencia_h3'>Ata Diretoria - 2023</h3>
                        <a href={ata} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='ata transparencia_h3'>AVCB 2026</h3>
                        <a href={avcb} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='ata transparencia_h3'>CMDCA 2023</h3>
                        <a href={cmdca} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='ata transparencia_h3'>CRCE 2023</h3>
                        <a href={crce} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='ata transparencia_h3'>Pró Social</h3>
                        <a href={prosocial} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='ata transparencia_h3'>TA-02-2023-MUNICIPAL</h3>
                        <a href={taM} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='ata transparencia_h3'>TA-03-2023- ESTADUAL</h3>
                        <a href={taE} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='ata transparencia_h3'>TA-04-2023-FEDERAL</h3>
                        <a href={taF} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='ata transparencia_h3'>TF 04-2023-EMENDA IMPOSITIVA</h3>
                        <a href={tf} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='portfolio__item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='ata transparencia_h3'>UTILIDADE PUBLICA ESTADUAL 2023</h3>
                        <a href={utilidade} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>
                </div>
            </section>
        </>
    )
}