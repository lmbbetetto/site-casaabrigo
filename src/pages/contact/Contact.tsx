import "./contact.css";
import { GiPositionMarker } from "react-icons/gi";
import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

import imgFundo from "../../assets/contact-photo.jpg";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

type ContactType = {
  onSubmitContact: (e: any) => void;
};

export function Contact({ onSubmitContact }: ContactType) {
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(
      "emailACIPP",
      "template_99qbpgb",
      form.current,
      "EHQntXXmTW_cNvFQC"
    );

    e.target.reset();
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAYZJNleGDvUPNGAF8PtEokfY-jZ0HqqCA",
  });

  const position = {
    lat: -22.413461,
    lng: -50.571338,
  };

  return (
    <>
      <div className="titulo">
        <div className="tituloTexto">
          <p>Transparência</p>
          <h1>Contato</h1>
          <h2>ACIPP Casa Abrigo</h2>
        </div>
        <img src={imgFundo} alt="Imagem de fundo" className="imgFundo" />
      </div>

      <h1 className="textoPrincipal">
        Entre em <span className="textoPrincipalGreen">contato</span> conosco e
        tire suas
        <span className="textoPrincipalGreen"> dúvidas</span>! Estamos à
        disposição para <span className="textoPrincipalGreen">ajudar </span>você
        da <span className="textoPrincipalGreen">melhor forma possível</span>.
      </h1>

      <section id="contact" className="contact">
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <GiPositionMarker className="contact__option-icon" />
              <h4>Endereço</h4>
              <h5>Rua Rui Ferreira da Rocha, 66 - Barra Funda</h5>
              <h5>Paraguaçu Paulista - SP</h5>
            </article>

            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>Telefone</h4>
              <h5>+55 18 3361-1413</h5>
            </article>

            <article className="contact__option">
              <BsFacebook className="contact__option-icon" />
              <h4>Facebook</h4>
              <h5>ACIPP Casa Abrigo</h5>
              <a
                href="https://www.facebook.com/acippcasaabrigo/"
                target="_blank"
              >
                Acesse
              </a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Nome completo"
              required
            />
            <input type="email" name="email" placeholder="Email" required />
            <textarea
              name="message"
              rows={7}
              placeholder="Mensagem"
              required
            ></textarea>
            <button
              type="submit"
              onClick={onSubmitContact}
              className="btn_form"
            >
              Enviar
            </button>
          </form>
        </div>

        <div className="container">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{
                width: "100%",
                height: "20rem",
                marginTop: "5rem",
                borderRadius: "0.9rem",
              }}
              center={position}
              zoom={17}
            >
              <Marker position={position} />
            </GoogleMap>
          ) : (
            <></>
          )}
        </div>
      </section>
    </>
  );
}
