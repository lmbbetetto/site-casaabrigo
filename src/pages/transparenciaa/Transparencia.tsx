import { Link } from 'react-router-dom'
import './transparencia.css'

function Transparencia() {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section id='transparencia'>
      <div className="inicio">
        <h2>Transparência</h2>
        <h5>Portal transparência ACIPP Casa Abrigo</h5>
      </div>

      <div className='containerCards'>
        <div className='card'>
          <Link to={'/transparencia2022'}><h1 onClick={scrollToTop}>2022</h1></Link>
        </div>
        <div className='card'>
          <Link to={'/transparencia2023'}><h1 onClick={scrollToTop}>2023</h1></Link>
        </div>
      </div>

    </section>
  )
}

export default Transparencia