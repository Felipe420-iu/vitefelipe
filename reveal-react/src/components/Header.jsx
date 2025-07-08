import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="topbar">
        <div className="container">
          <div className="contact-info">
            <span className="email-text">
              <i className="bi bi-envelope"></i> contacto@ejemplo.com
            </span>
            <span className="phone-text">
              <i className="bi bi-telephone"></i> +1 5589 55488 55
            </span>
          </div>
          <div className="social-links">
            <a href="#" aria-label="Twitter"><i className="bi bi-x"></i></a>
            <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div className="navbar">
        <div className="container">
          <a href="#hero" className="logo">
            <h1 className="sitename">Revelar</h1>
          </a>
          <div className="navmenu">
            <ul>
              <li><a href="#hero" className="active">Hogar</a></li>
              <li><a href="#about">Acerca de</a></li>
              <li><a href="#services">Servicios</a></li>
              <li><a href="#portfolio">Cartera</a></li>
              <li><a href="#team">Equipo</a></li>
              <li className="dropdown"><a href="#">Menú desplegable</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;