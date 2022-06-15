import './header.css'
import logo from '../../assets/logo.png'

function Header() {
  return (
    <header>
      <div className='container'>
        <nav className='container__header header_menu'>
         <ul>
          <input
            type="search"
            className='search'
            placeholder='Procurando algo?'
          />
          <li><a href="">Sobre</a></li>
          <li><a href="">Transparência</a></li>
          <li><a href="">Contato</a></li>
          <a href=""><button className='btn btn-yellow'>Doação</button></a>
         </ul>
        </nav>
      </div>

      <div className='logo__casa'>
          <img src={logo} alt="logo casalar" />
      </div>

    </header>
  )
}

export default Header