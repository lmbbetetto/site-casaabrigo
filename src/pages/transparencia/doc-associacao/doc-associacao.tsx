import { CardTransparencia } from "../card-transparencia";
import style from "./style.module.css";
import imgFundo from "../../../assets/transparencia.jpg";

import { MdOutlinePictureAsPdf } from "react-icons/md";
import { BtnBack } from "../../../component/buttonBack/back";
import { docAssosiacao } from "../mock/mock-doc-associacao";

export function DocAssociacao() {
  return (
    <>
      <div className={style.titulo}>
        <div className={style.tituloTexto}>
          <p>Transparência</p>
          <h1>Documentos Associação</h1>
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
          {/* {docAssosiacao.map((component, index) => (
            <CardTransparencia
              key={index}
              title={component.title}
              link={component.link}
              icon={<MdOutlinePictureAsPdf />}
            />
          ))} */}
        </div>
      </div>
    </>
  );
}
