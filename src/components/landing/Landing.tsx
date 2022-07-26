import { Link } from 'react-router-dom'
import './landing.css'

function Landing(){
    return(
        <>
        <div className="nome__cabecalho">
            <h1>ACIPP Casa Abrigo</h1>

            <div className="quote-externo">
                <p>"Amar é acolher, é compreender, é fazer o outro crescer."</p>
            </div>

            <div className="conheca__mais">
                <p>Conheça mais sobre a associação</p>
                <Link to="/sobre"><button className="btn btn-yellow">Sobre</button></Link>
            </div>
        </div>
        </>
    )
}

export default Landing