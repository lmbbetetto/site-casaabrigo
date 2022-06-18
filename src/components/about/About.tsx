import './about.css'

function About(){
    return(
        <>
        <div className='title'>
            <div className="inicio">
                <h5>Conheça mais sobre a Casa Abrigo</h5>
                <h2>Sobre</h2>
            </div>

        </div>
        <section id='contact' className='container about__container'>

        <div className="missao_sobre">
            <h2 className="subtitulo-interno">História, Missão e Visão</h2>
            <p>No mundo atual, a contínua expansão de nossa atividade cumpre um papel essencial na formulação da gestão inovadora da qual fazemos parte da qualfazemos parte.</p>
            <p>No mundo atual, a contínua expansão de nossa atividade cumpre um papel essencial na formulação da gestão inovadora da qual fazemos parte da qualfazemos parte.</p>
        </div>
        <div className="missao_sobre">
            <h2 className="subtitulo-interno">Valores</h2>
                <ul>
                    <li>- Qualidade no processo com</li>
                    <li>- Foco no cliente sem perder a</li>
                    <li>- Diversão, preservando a</li>
                    <li>- Natureza com sustentabilidade</li>
                </ul>
        </div>
        </section>
        </>
    )
}

export default About