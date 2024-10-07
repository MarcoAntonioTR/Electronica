import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import "../../styles/Footer.css";

// eslint-disable-next-line react/prop-types
function Footer({ isDarkTheme }) {
  return (
    <footer
      className={`footer-dark py-5 ${isDarkTheme ? "bg-dark text-light" : "bg-light text-dark"
        }`}
    >
      <div className="container">
        <div className="row text-center mb-4">
          <div className="col-12">
            <img
              src="../../../src/assets/LogoElectronicaPNG.png"
              alt="Logo"
              style={{ height: "100px" }}
            />
            <h2
              className={`fs-1 fw-bold ${isDarkTheme ? "text-light" : "text-dark"
                }`}
            >
              NexusTech
            </h2>
            <p className={`fs-5 ${isDarkTheme ? "text-muted" : "text-dark"}`}>
              Conectando el futuro, un componente a la vez
            </p>
          </div>
        </div>
        <hr className="my-4 bg-secondary" />
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4">
            <h3 className="fs-5 fw-bold mb-3">Categorías</h3>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className={`text-${isDarkTheme ? "light" : "dark"
                    } text-decoration-none hover-${isDarkTheme ? "light" : "dark"
                    }`}
                >
                  Computadores
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`text-${isDarkTheme ? "light" : "dark"
                    } text-decoration-none hover-${isDarkTheme ? "light" : "dark"
                    }`}
                >
                  Componentes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`text-${isDarkTheme ? "light" : "dark"
                    } text-decoration-none hover-${isDarkTheme ? "light" : "dark"
                    }`}
                >
                  Periféricos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`text-${isDarkTheme ? "light" : "dark"
                    } text-decoration-none hover-${isDarkTheme ? "light" : "dark"
                    }`}
                >
                  Accesorios
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <h3 className="fs-5 fw-bold mb-3">Empresa</h3>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className={`text-${isDarkTheme ? "light" : "dark"
                    } text-decoration-none hover-${isDarkTheme ? "light" : "dark"
                    }`}
                >
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`text-${isDarkTheme ? "light" : "dark"
                    } text-decoration-none hover-${isDarkTheme ? "light" : "dark"
                    }`}
                >
                  Trabaja con nosotros
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`text-${isDarkTheme ? "light" : "dark"
                    } text-decoration-none hover-${isDarkTheme ? "light" : "dark"
                    }`}
                >
                  Política de privacidad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`text-${isDarkTheme ? "light" : "dark"
                    } text-decoration-none hover-${isDarkTheme ? "light" : "dark"
                    }`}
                >
                  Términos y condiciones
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <h3 className="fs-5 fw-bold mb-3">Atención al cliente</h3>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className={`text-${isDarkTheme ? "light" : "dark"
                    } text-decoration-none hover-${isDarkTheme ? "light" : "dark"
                    }`}
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`text-${isDarkTheme ? "light" : "dark"
                    } text-decoration-none hover-${isDarkTheme ? "light" : "dark"
                    }`}
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`text-${isDarkTheme ? "light" : "dark"
                    } text-decoration-none hover-${isDarkTheme ? "light" : "dark"
                    }`}
                >
                  Devoluciones
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <h3 className="fs-5 fw-bold mb-3">Síguenos</h3>
            <div className="d-flex justify-content-center">
              <a
                href="#"
                className={`text-${isDarkTheme ? "light" : "dark"
                  } me-3 icon-shadow-hover ${isDarkTheme
                    ? "icon-shadow-hover-light"
                    : "icon-shadow-hover-dark"
                  }`}
              >
                <Facebook />
              </a>
              <a
                href="#"
                className={`text-${isDarkTheme ? "light" : "dark"
                  } me-3 icon-shadow-hover ${isDarkTheme
                    ? "icon-shadow-hover-light"
                    : "icon-shadow-hover-dark"
                  }`}
              >
                <Instagram />
              </a>
              <a
                href="#"
                className={`text-${isDarkTheme ? "light" : "dark"
                  } me-3 icon-shadow-hover ${isDarkTheme
                    ? "icon-shadow-hover-light"
                    : "icon-shadow-hover-dark"
                  }`}
              >
                <Twitter />
              </a>
              <a
                href="#"
                className={`text-${isDarkTheme ? "light" : "dark"
                  } me-3 icon-shadow-hover ${isDarkTheme
                    ? "icon-shadow-hover-light"
                    : "icon-shadow-hover-dark"
                  }`}
              >
                <Youtube />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-4 bg-secondary" />
        <div className="row text-center">
          <div className="col-12">
            <a
              href="mailto:info@nexustech.com"
              className={`text-decoration-none d-block mb-2 ${isDarkTheme ? "text-light" : "text-dark"
                } text-shadow-hover ${isDarkTheme
                  ? "text-shadow-hover-light"
                  : "text-shadow-hover-dark"
                }`}
            >
              <Mail className="me-2" />
              info@nexustech.com
            </a>
            <a
              href="tel:+1234567890"
              className={`text-decoration-none d-block mb-2 ${isDarkTheme ? "text-light" : "text-dark"
                } text-shadow-hover ${isDarkTheme
                  ? "text-shadow-hover-light"
                  : "text-shadow-hover-dark"
                }`}
            >
              <Phone className="me-2" />
              +123 456 7890
            </a>
            <a
              href="#"
              className={`text-decoration-none d-block ${isDarkTheme ? "text-light" : "text-dark"
                } text-shadow-hover ${isDarkTheme
                  ? "text-shadow-hover-light"
                  : "text-shadow-hover-dark"
                }`}
            >
              <MapPin className="me-2" />
              Dirección de la empresa
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
