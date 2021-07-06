import { CartWidget } from "../CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <div className="container">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Tienda Moreno
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/category/A" className="nav-link">
                  PROTECCION
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category/B" className="nav-link">
                  DESCARTABLES
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category/C" className="nav-link">
                  CREMAS
                </Link>
              </li>
            </ul>
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};
