import { CardTransparencia } from "../../card-transparencia";
import style from "./style.module.css";
import imgFundo from "../../../../assets/fundo-transparencia.png";

// QUADRA
import PDF18 from "../../../../assets/transparenciaaa/2022/QUADRA/TERMO DE FOMENTO 12.2022.pdf";

import { MdOutlinePictureAsPdf } from "react-icons/md";
import { BtnBack } from "../../../../component/buttonBack/back";

export function Doc2022() {
  const QUADRA = [
    {
      title: "Termo de Fomento",
      link: PDF18,
    },
  ];
  return (
    <>
      <div className={style.titulo}>
        <div className={style.tituloTexto}>
          <p>Transparência</p>
          <h1>Balanço 2022</h1>
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

        <div className={style.fomento}>
          <h1 className={style.titleFomento}>
            Quadra Poliesportiva - Emenda Parlamentar - Dep. Estadual Ricardo
            Madalena
          </h1>
          <div className={style.cards}>
            {QUADRA.map((component, index) => (
              <CardTransparencia
                key={index}
                title={component.title}
                link={component.link}
                icon={<MdOutlinePictureAsPdf />}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
