import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const Navbar = () => {
  const { token, logout } = useContext(UserContext);
  const { total } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Pizzería Mamma Mía
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse estructuraNav"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/"
            >
              <button type="button" className="btn btn-outline-light ms-3">
                🍕Home
              </button>
            </NavLink>

            <div>
              {token ? (
                <>
                  <Link to="/profile" className="btn btn-primary me-2">
                    Mi Perfil
                  </Link>
                  <button className="btn btn-danger" onClick={logout}>
                    Cerrar sesión
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn btn-success me-2">
                    Iniciar sesión
                  </Link>
                  <Link to="/register" className="btn btn-outline-light">
                    Registrarse
                  </Link>
                </>
              )}
            </div>
          </ul>
          <div className="botonCarrito">
            <Link to="/cart">
              <button type="button" className="btn btn-outline-primary ms-3">
                🛒 Total: {total}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
