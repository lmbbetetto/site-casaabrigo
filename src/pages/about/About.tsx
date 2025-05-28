import "./about.css";

import imgFundo from "../../assets/fundo-sobre.jpeg";

import edna from "../../assets/edna.jpeg";
import almira from "../../assets/almira.jpeg";

export function About() {
  return (
    <>
      <div className="titulo">
        <div className="tituloTexto">
          <p>Sobre</p>
          <h1>Conheça-nos</h1>
          <h2>ACIPP Casa Abrigo</h2>
        </div>
        <img src={imgFundo} alt="Imagem de fundo" className="imgFundo" />
      </div>

      <h1 className="textoPrincipal">
        A trajetória da{" "}
        <span className="textoPrincipalGreen">ACIPP Casa Abrigo </span>é marcada
        pelo
        <span className="textoPrincipalGreen">
          {" "}
          compromisso com a ética, o respeito e a dignidade humana
        </span>
        . Em sintonia com esses princípios,{" "}
        <span className="textoPrincipalGreen">
          compartilhamos abertamente nossa missão, valores, história e as
          palavras de nossos fundadores
        </span>
        !
      </h1>

      <section id="contact" className="container about__container">
        <div className="missao_sobre">
          <h2 className="subtitulo-interno">História</h2>
          <p>
            Em fevereiro de 1977 foi criada a ACIPP ASSOCIAÇÃO COMUNITÁRIA
            INTEGRADA DE PARAGUAÇU PAULISTA, a entidade foi instituída em
            decorrência da extinção do Consórcio de Promoção Social, que
            comandava a assistência social no município naquela época. De acordo
            com o seu Estatuto, a Associação surgiu com finalidades diversas
            para atender as necessidades do município na área social.
          </p>
          <p>
            Fundada em 27 de agosto de 1996, a Casa Abrigo sendo sua mantenedora
            a ACIPP, tem como objetivo atender as emergências do Estatuto da
            Criança e do Adolescente-ECA, que são encaminhadas por decisão da
            Vara da Infância e Juventude e do Conselho Tutelar, cujos direitos
            básicos tenham sido violados ou ameaçados, colocando em prática
            medidas de proteção às mães, crianças ou adolescentes em estado de
            abandono, negligência, maus tratos e situação de risco e
            vulnerabilidade. A Casa Abrigo tem capacidade de até 20 acolhidos de
            0 à 18 anos em regime residencial. O acolhimento é provisório e
            excepcional, oferece atendimento personalizado, usando a valorização
            da auto estima, preservando os vínculos familiares e comunitários,
            buscando colocação em famílias substitutas quando se esgotam os
            recursos para manutenção na família de origem; mantendo a união de
            grupos de irmãos. Os acolhidos participam na comunidade local como
            escolas, creches, projetos, esporte e lazer, acompanhamento médico,
            dentário, psicológico e outros, a entidade visa assegurar a
            participação das atividades assim como o desenvolvimento das
            crianças e adolescentes.
          </p>
        </div>
        <div className="missao_sobre">
          <h2 className="subtitulo-interno">Missão</h2>
          <p>
            Acolher crianças e adolescentes vítimas de violência e em situação
            de risco no seu convívio familiar ou na sociedade, dando condições
            de uma vida digna, protegendo e preservando seus direitos.{" "}
          </p>

          <h2 className="subtitulo-interno">Visão</h2>
          <p>
            Ser referência no acolhimento institucional de crianças e
            adolescentes, atuando com zelo na qualidade do serviço prestado,
            preservando o convívio familiar, mantendo a família, a criança e o
            adolescente em condições de segurança e proteção integral.
          </p>
        </div>
      </section>

      <div className="container missao_valores">
        <h2 className="subtitulo-interno">Valores</h2>
        <ul>
          <li>
            - Preservação dos vínculos familiares e reintegração familiar;
          </li>
          <li>
            - Integração em família substituta, quando não há hipótese viável de
            integração com a família natural ou extensa;
          </li>
          <li>- Participação na vida da comunidade local;</li>
          <li>- Desenvolvimento de atividades educativas;</li>
          <li>- Preparação gradativa para o desligamento.</li>
        </ul>
      </div>

      <section className="container about__container">
        <div className="cit_fundador">
          <h2 className="subtitulo-interno">Palavra da Sócia Fundadora</h2>
          <p>
            Até 1990 as crianças e adolescentes eram “supervisionados“ pelo
            Código do Menor voltado para as imposições sobre as diversas
            situações, sem considerar a criança e o adolescente como cidadão e
            como seres não autônomos.
          </p>
          <p>
            Com o surgimento do ECA em 13/07/1990 através da Lei Federal
            nº8069/90, a criança e o adolescente passaram a ser sujeitos de
            direitos.
          </p>
          <p>
            Em Paraguaçu Paulista, como não podia ser diferente, a criança
            abandonada ou em situação de vulnerabilidade social, não tinha
            nenhuma proteção garantida, surgindo inclusive situações de certa
            forma constrangedoras, como colocar adolescentes no Lar dos Idosos
            por falta de local adequado. Devido a essas situações reais, nos
            conscientizamos que a criança e o adolescente precisavam de
            políticas públicas, nos levando a discutir esse assunto tão
            pertinente, quando vimos, já estávamos envolvidos “de cabeça” nessa
            questão da criança e do adolescente abandonado ou em situação de
            vulnerabilidade. Teríamos que repensar a problemática e parar de
            improvisar questões como essa.
          </p>
          <p>
            Era uma questão preocupante aos governantes, tanto municipal,
            estadual e federal mas ainda engatinhávamos no conhecimento e na
            resolutividade.
          </p>
          <p>
            Discutindo o assunto com minha filha, ela me disse: se Deus falou
            com você, então é você quem deve prover. Vesti essa carapuça.
          </p>
          <p>
            E fui providenciar suporte formal a essa questão, através de um
            técnico em serviço social para fazer o projeto de abrigamento;
            enviando ao governador do estado de São Paulo, que era o Mario
            Covas, sendo o projeto aceito. Em seguida assinamos o convênio entre
            a ACIPP - Associação Comunitária Integrada de Paraguaçu Paulista que
            é até hoje a mantenedora da Casa Abrigo.
          </p>
          <p>
            A primeira Casa Abrigo, que foi uma casa alugada próxima ao Tiro de
            Guerra, havendo mais duas casas alugadas para esse fim e após muita
            luta conquistamos recursos para comprar sede própria situada na Rua
            Rui Ferreira da Rocha na Barra Funda. O modelo de gestão, desde
            então, respeitou o ECA, servindo de referencial a toda região.
          </p>
          <p>
            E em todo esse período, centenas e centenas de crianças e
            adolescentes passaram por este local temporário até que houvesse
            solução para cada caso.
          </p>
        </div>

        <div className="cit_fundador">
          <img src={almira} alt="almira" className="foto_ea" />
          <h2 className="subtitulo-interno">Almira Ribas Garms</h2>
          <h3 className="sub_socia">(Sócia Fundadora)</h3>
          <p>
            Bacharel em Teologia, possui Graduação em Gestão Pública e
            Pedagogia. Trabalhou sempre na organização, criação e estruturação
            de entidades assistenciais, filantrópicas e de atendimento ao
            cidadão e sua família. Foi a Primeira Dama e Presidente do Fundo
            Social de Solidariedade por 03 mandatos. Exerceu o cargo de
            Vereadora por 04 mandatos, primeira mulher a ocupar a Presidência do
            Legislativo Municipal por duas vezes. Também a primeira mulher a
            ocupar o cargo máximo do Executivo Municipal.
          </p>
        </div>
      </section>

      <section className="container container__about">
        <div className="cit_fundador">
          <img src={edna} alt="edna" className="foto_ea" />
          <h2 className="subtitulo-interno">Edna Maria Bonfim de Lima</h2>
          <h3 className="sub_socia">(Sócia Voluntária)</h3>
          <p>
            Formada em pedagogia, iniciou sua carreira ministrando aulas em
            escolas rurais aqui na região de Paraguaçu Paulista, casou-se e por
            conta do trabalho do marido mudou-se para outras cidades do estado
            de São Paulo sempre pautando sua vida profissional como professora,
            retornou a Paraguaçu Paulista para trabalhar na Delegacia de Ensino
            até sua aposentadoria, em meados de 1998 já aposentada começou sua
            jornada como voluntária na Casa Abrigo, onde se mantém até hoje.
          </p>
        </div>

        <div className="cit_fundador">
          <h2 className="subtitulo-interno">Palavra da Sócia Voluntária</h2>
          <p>
            Como o nome diz voluntária é a pessoa que se dedica a uma causa
            voluntária e sem pensar em receber algum benefício em troca.
          </p>
          <p>
            Podemos nos dedicar em algumas horas do dia ou a semana para ajudar
            pessoas e entidades oferecendo conhecimentos, mão de obra, etc.
          </p>
          <p>
            Costumo dizer que a pessoa que se dedica a esse trabalho vai se
            sentir útil pois muitas vezes pode estar com problemas na família ou
            mesmo sem ter ocupações em casa, então é hora de pensar no próximo e
            passar suas habilidades e conhecimentos fazendo o bem.
          </p>
          <p>
            Ao mesmo tempo que estamos transmitindo conhecimentos e mão de obra,
            também estamos recebendo novos conhecimentos e recebendo o carinho
            das pessoas ou de crianças através de um abraço ou um sorriso de
            gratidão.
          </p>
          <p>
            Portanto não perca tempo e se disponha a ser um voluntário em sua
            cidade.
          </p>
        </div>
      </section>
    </>
  );
}
