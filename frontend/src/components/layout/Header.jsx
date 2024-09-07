import { Sun, Moon, Heart, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import "../../styles/Header.css";

// eslint-disable-next-line react/prop-types
function Header({ isDarkTheme, toggleTheme }) {
  const menuItems = [
    {
      title: "Inicio",
      path: "/",
      subcategories: [],
    },
    {
      title: "Computadoras y Laptops",
      path: "/Computadoras-Laptops",
      subcategories: [
        { title: "Desktops", path: "/Computadoras-Laptops/Desktops" },
        { title: "Tablets", path: "/Computadoras-Laptops/Tablets" },
        { title: "Workstations", path: "/Computadoras-Laptops/Workstations" },
      ],
    },
    {
      title: "Accesorios",
      path: "/accesorios",
      subcategories: [
        { title: "Cables", path: "/Accesorios/Cables" },
        { title: "Cargadores", path: "/Accesorios/Cargadores" },
        { title: "Fundas", path: "/Accesorios/Fundas" },
        { title: "Soportes", path: "/Accesorios/Soportes" },
      ],
    },
    {
      title: "Componentes",
      path: "/componentes",
      subcategories: [
        { title: "Almacenamiento", path: "/Componentes/Almacenamiento" },
        { title: "Memorias", path: "/Componentes/Memorias" },
        { title: "Placas", path: "/Componentes/Placas" },
        { title: "Procesadores", path: "/Componentes/Procesadores" },
        { title: "Tarjetas Gráficas", path: "/Componentes/TarjetasGráficas" },
      ],
    },
    {
      title: "Periféricos",
      path: "/perifericos",
      subcategories: [
        { title: "Audio", path: "/Perifericos/Audio" },
        { title: "Impresoras", path: "/Perifericos/Impresoras" },
        { title: "Monitores", path: "/Perifericos/Monitores" },
        { title: "Ratones", path: "/Perifericos/Ratones" },
        { title: "Teclados", path: "/Perifericos/Teclados" },
      ],
    },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isDarkTheme ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="../../../src/assets/LogoElectronicaPNG.png"
              alt="Logo"
              style={{ height: "50px", marginRight: "10px" }}
            />
            <span
              style={{
                color: isDarkTheme ? "#ffffff" : "#000000",
              }}
            >
              NexusTech
            </span>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="nav-item dropdown"
                onMouseEnter={(e) => {
                  if (item.subcategories.length > 0) {
                    e.currentTarget.classList.add("show");
                    e.currentTarget
                      .querySelector(".dropdown-menu")
                      .classList.add("show");
                  }
                }}
                onMouseLeave={(e) => {
                  if (item.subcategories.length > 0) {
                    e.currentTarget.classList.remove("show");
                    e.currentTarget
                      .querySelector(".dropdown-menu")
                      .classList.remove("show");
                  }
                }}
              >
                <Link
                  className={`nav-link ${
                    item.subcategories.length > 0 ? "dropdown-toggle" : ""
                  }`}
                  to={item.path}
                  id={`navbarDropdownMenuLink${index}`}
                  role="button"
                >
                  {item.title}
                </Link>
                {item.subcategories.length > 0 && (
                  <ul
                    className="dropdown-menu"
                    aria-labelledby={`navbarDropdownMenuLink${index}`}
                  >
                    {item.subcategories.map((subcategory, subIndex) => (
                      <li key={subIndex}>
                        <Link className="dropdown-item" to={subcategory.path}>
                          {subcategory.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="d-flex align-items-center">
            <button
              className={`btn ${
                isDarkTheme ? "btn-outline-light" : "btn-outline-dark"
              } me-2`}
              type="button"
            >
              <Heart className="w-4 h-4" />
            </button>

            <button
              className={`btn ${
                isDarkTheme ? "btn-outline-light" : "btn-outline-dark"
              } me-2`}
              type="button"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
            <button
              className={`btn ${
                isDarkTheme ? "btn-outline-light" : "btn-outline-dark"
              } me-2`}
              type="button"
            >
              <User className="w-4 h-4" />
            </button>
            <button
              className={`btn ${
                isDarkTheme ? "btn-outline-light" : "btn-outline-dark"
              }`}
              onClick={toggleTheme}
            >
              {isDarkTheme ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
