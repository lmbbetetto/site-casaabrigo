import { CardTransparencia } from "../../card-transparencia";
import style from "./style.module.css";

import imgFundo from "../../../../assets/transparencia.jpg";

import { MdOutlinePictureAsPdf } from "react-icons/md";
import { BtnBack } from "../../../../component/buttonBack/back";
import { documents2023 } from "../../mock/mock-2023";

export function Doc2023() {
  return (
    <>
      <div className={style.titulo}>
        <div className={style.tituloTexto}>
          <p>Transparência</p>
          <h1>Balanço 2023</h1>
          <h2>ACIPP Casa Abrigo</h2>
        </div>
        <img src={imgFundo} alt="Imagem de fundo" className={style.imgFundo} />
      </div>

      <div className={style.container}>
        <BtnBack link="/transparencia/prestacao-contas" />
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
        {documents2023.map((group, groupIndex) => (
          <div key={groupIndex} className={style.fomento}>
            <h1 className={style.titleFomento}>{group.name}</h1>
            <div className={style.cards}>
              {group.documents.map((document, docIndex) => (
                <CardTransparencia
                  key={`${groupIndex}-${docIndex}`}
                  title={document.title}
                  link={document.link}
                  newTab={document.newTab}
                  icon={<MdOutlinePictureAsPdf />}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
