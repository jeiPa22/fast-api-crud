import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          Stravinsky Instrumentos
        </Link>

        <nav className="navigation">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/usuarios" className="nav-link">Usuarios</Link>
          <a href="#carrito" className="nav-link">Carrito</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
