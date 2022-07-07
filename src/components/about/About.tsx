import './about.css'

import { Link } from 'react-router-dom'

function About(){
    return(
        <>
        <div className='title'>
            <div className="inicio">
                <h5>Conheça mais sobre a Casa Abrigo</h5>
                <h2>Sobre a instituição</h2>
            </div>

        </div>
        <section id='contact' className='container about__container'>

        <div className="missao_sobre">
            <h2 className="subtitulo-interno">História</h2>
            <p>Em fevereiro de 1977 foi criada a ACIPP ASSOCIAÇÃO COMUNITÁRIA INTEGRADA DE PARAGUAÇU PAULISTA, a entidade foi instituída em decorrência da extinção do Consórcio de Promoção Social, que comandava a assistência social no município naquela época. De acordo com o seu Estatuto, a Associação surgiu com finalidades diversas para atender as necessidades do município na área social.</p>
            <p>Fundada em 27 de agosto de 1996, a Casa Abrigo sendo sua mantenedora a ACIPP, tem como objetivo atender as emergências do Estatuto da Criança e do Adolescente-ECA, que são encaminhadas por decisão da Vara da Infância e Juventude e do Conselho Tutelar, cujos direitos básicos tenham sido violados ou ameaçados, colocando em prática medidas de proteção às mães, crianças ou adolescentes em estado de abandono, negligência, maus tratos e situação de risco e vulnerabilidade. A Casa Abrigo tem capacidade de até 20 acolhidos de 0 à 18 anos em regime residencial. O acolhimento é provisório e excepcional, oferece atendimento personalizado, usando a valorização da auto estima, preservando os vínculos familiares e comunitários, buscando colocação em famílias substitutas quando se esgotam os recursos para manutenção na família de origem; mantendo a união de grupos de irmãos. Os acolhidos participam na comunidade local como escolas, creches, projetos, esporte e lazer, acompanhamento médico, dentário, psicológico e outros, a entidade visa assegurar a participação das atividades assim como o desenvolvimento das crianças e adolescentes.</p>
        </div>
        <div className="missao_sobre fundo">
            <h2 className="subtitulo-interno">Missão</h2>
            <p>Acolher crianças e adolescentes vítimas de violência e em situação de risco no seu convívio familiar ou na sociedade, dando condições de uma vida digna, protegendo e preservando seus direitos. </p>

            <h2 className="subtitulo-interno">Visão</h2>
            <p>Ser referência no acolhimento institucional de crianças e adolescentes, atuando com zelo na qualidade do serviço prestado, preservando o convívio familiar, mantendo a família, a criança e o adolescente em condições de segurança e proteção integral.</p>
        </div>
        </section>

        <div className="container missao_valores">
            <h2 className="subtitulo-interno">Valores</h2>
                <ul>
                    <li>- Preservação dos vínculos familiares e reintegração familiar;</li>
                    <li>- Integração em família substituta, quando não há hipótese viável de integração com a família natural ou extensa;</li>
                    <li>- Participação na vida da comunidade local;</li>
                    <li>- Desenvolvimento de atividades educativas;</li>
                    <li>- Preparação gradativa para o desligamento.</li>
                </ul>
        </div>

        <div className="rodape">
          <h2>Entre em contato para tirar suas dúvidas!</h2>
          <Link to="/contato"><button className="btn_green">Fale Conosco</button></Link>
        </div>
        </>
    )
}

export default About