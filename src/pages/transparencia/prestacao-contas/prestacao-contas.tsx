import style from "./style.module.css";
import imgFundo from "../../../assets/transparencia.jpg";
import { CardTransparencia } from "../card-transparencia";
import { IoDocuments } from "react-icons/io5";
import { BtnBack } from "../../../component/buttonBack/back";
import { prestContas } from "../mock/mock-pest-contas";

export function DocPrestacaoContas() {
  return (
    <>
      <div className={style.titulo}>
        <div className={style.tituloTexto}>
          <p>Transparência</p>
          <h1>Prestação de Contas</h1>
          <h2>ACIPP Casa Abrigo</h2>
        </div>
        <img src={imgFundo} alt="Imagem de fundo" className={style.imgFundo} />
      </div>

      <div className={style.container}>
        <BtnBack link="/transparencia" />
        <h1 className={style.textoPrincipal}>
          A{" "}
          <span className={style.textoPrincipalGreen}>ACIPP Casa Abrigo </span>
          preza pela
          <span className={style.textoPrincipalGreen}> transparência </span>
          em suas ações e, por isso,{" "}
          <span className={style.textoPrincipalGreen}>
            torna públicos{" "}
          </span>seus{" "}
          <span className={style.textoPrincipalGreen}>
            relatórios, balanços e convênios
          </span>{" "}
          firmados com o poder público.
        </h1>
        <div className={style.cards}>
          {prestContas.map((card, index) => (
            <CardTransparencia
              key={index}
              link={card.link}
              title={card.title}
              newTab={card.newTab}
              icon={<IoDocuments />}
            />
          ))}
        </div>
      </div>
    </>
  );
}
