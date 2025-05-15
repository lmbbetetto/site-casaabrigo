import { CardTransparencia } from "../../card-transparencia";
import style from "./style.module.css";

import imgFundo from "../../../../assets/fundo-transparencia.png";

import PDF24 from "../../../../assets/transparenciaaa/2023/TF-14-23/Parecer-conclusivo-TF-14-2023.pdf";
import PDF25 from "../../../../assets/transparenciaaa/2023/TF-14-23/TF-14-23-CASA-LAR-completo.pdf";

import { MdOutlinePictureAsPdf } from "react-icons/md";
import { BtnBack } from "../../../../component/buttonBack/back";

export function Doc2023() {
  const documents2023 = [
    {
      name: "TF 14/2023",
      documents: [
        {
          title: "Termo de Fomento",
          link: PDF25,
        },
        {
          title: "Parecer Conclusivo",
          link: PDF24,
        },
      ],
    },
  ];

  return (
    <>
      <div className={style.titulo}>
        <div className={style.tituloTexto}>
          <p>Transparência</p>
          <h1>Balanço 2023</h1>
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

        {documents2023.map((group, groupIndex) => (
          <div key={groupIndex} className={style.fomento}>
            <h1 className={style.titleFomento}>{group.name}</h1>
            <div className={style.cards}>
              {group.documents.map((document, docIndex) => (
                <CardTransparencia
                  key={`${groupIndex}-${docIndex}`}
                  title={document.title}
                  link={document.link}
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
