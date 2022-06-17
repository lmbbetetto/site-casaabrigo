import './contact.css'
import { GiPositionMarker } from 'react-icons/gi'
import { BsWhatsapp } from 'react-icons/bs'
import { IoLogoFacebook } from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

type ContactType = {
  onSubmitContact: (e: any) => void
}


function Contact({ onSubmitContact }: ContactType) {
  const form = useRef<any>();

  //Alterar Any
  const sendEmail = (e: any) => {
    e.preventDefault();

    //Tipar form.current
    emailjs.sendForm('service_98n5t52', 'template_10jwbbz', form.current, 'EHQntXXmTW_cNvFQC')

    e.target.reset()
  };

  return (
    <section id='contact' className='contact'>
      <h5>Entre em contato</h5>
      <h2>Contate-me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <GiPositionMarker className='contact__option-icon' />
            <h4>Email</h4>
            <h5>acippcasabrigo@hotmail.com</h5>
            <a href="mailto:acippcasabrigo@hotmail.com" target='_blank'>Envie uma mensagem</a>
          </article>

          <article className="contact__option">
            <IoLogoFacebook className='contact__option-icon' />
            <h4>Facebook</h4>
            <h5>ACIPP Casa Abrigo</h5>
            <a href="https://www.facebook.com/acippcasaabrigo/" target='_blank'>Envie uma mensagem</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+55 18 99656-3354</h5>
            <a href="https://wa.me/5518996563354" target='_blank'>Envie uma mensagem</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nome completo' required />
          <input type="email" name="email" placeholder='Email' required />
          <textarea name="message" rows={7} placeholder='Mensagem' required></textarea>
          <button type='submit' onClick={onSubmitContact} className='btn btn-yellow'>Enviar</button>
        </form>
      </div>

      <div className="container">

      </div>
    </section>
  )

export default Contact