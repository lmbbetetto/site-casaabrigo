import { CardTransparencia } from "../../card-transparencia";
import style from "./style.module.css";

import imgFundo from "../../../../assets/fundo-transparencia.png";

import { MdOutlinePictureAsPdf } from "react-icons/md";
import { BtnBack } from "../../../../component/buttonBack/back";

export function Doc2025() {
  const documents2025 = [
    {
      name: "Colaboradores e Diretoria",
      documents: [
        {
          title: "Diretoria",
          link: "/transparencia/prestacao-contas/documentos-2025/diretoria",
          newTab: false,
        },
        {
          title: "Colaboradores",
          link: "/transparencia/prestacao-contas/documentos-2025/colaboradores",
          newTab: false,
        },
      ],
    },
  ];

  return (
    <>
      <div className={style.titulo}>
        <div className={style.tituloTexto}>
          <p>Transparência</p>
          <h1>Balanço 2025</h1>
          <h2>Assoc. Casa Lar</h2>
        </div>
        <img src={imgFundo} alt="Imagem de fundo" className={style.imgFundo} />
      </div>

      <div className={style.container}>
        <BtnBack link="/transparencia/prestacao-contas" />
        <h1 className={style.textoPrincipal}>
          A <span className={style.textoPrincipalGreen}>Casa Lar</span>, tem a
          <span className={style.textoPrincipalGreen}> transparência </span>
          como um princípio, por isso, disponibilizamos nossos{" "}
          <span className={style.textoPrincipalGreen}>
            relatórios, balanços e convênios com o poder público
          </span>
          !
        </h1>
        {documents2025.map((group, groupIndex) => (
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
