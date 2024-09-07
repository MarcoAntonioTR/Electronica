import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import useTheme from "../../components/hooks/useTheme";
import "../../styles/Inicio.css";

function Inicio() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <div
      className={
        isDarkTheme ? "bg-dark text-light dark-mode" : "bg-light text-dark"
      }
    >
      <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />

      <main>
        <section id="carouselExampleControls" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="../../../src/assets/ImagesInicio/c1.jpg"
                className="d-block w-100"
                alt="Computadoras potentes"
              />
              <div className="carousel-overlay">
                <div className="carousel-caption">
                  <h5>Computadoras potentes</h5>
                  <p>
                    Obtenga un rendimiento inigualable con nuestras últimas
                    computadoras de alta gama.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="../../../src/assets/ImagesInicio/c2.jpg"
                className="d-block w-100"
                alt="Componentes de vanguardia"
              />
              <div className="carousel-overlay">
                <div className="carousel-caption">
                  <h5>Componentes de vanguardia</h5>
                  <p>
                    Construye la PC de tus sueños con nuestros componentes
                    avanzados.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="../../../src/assets/ImagesInicio/c3.jpg"
                className="d-block w-100"
                alt="Accesorios de calidad"
              />
              <div className="carousel-overlay">
                <div className="carousel-caption">
                  <h5>Accesorios de calidad</h5>
                  <p>
                    Actualice su configuración con teclados, ratones y monitores
                    de primera categoría.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </section>

        <section id="about-us" className="about-us-section">
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="about-us-content">
                  <h2 className="text-center mb-4">Sobre Nosotros</h2>
                  <p className="lead">
                    Somos una empresa dedicada a ofrecer productos y servicios
                    de alta calidad. Nuestra misión es proporcionar soluciones
                    innovadoras que mejoren la vida de nuestros clientes.
                  </p>
                  <p>
                    Desde nuestra fundación, hemos trabajado para establecer un
                    estándar de excelencia en el mercado, con un enfoque en la
                    satisfacción del cliente y la mejora continua.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-us-image-container">
                  <img
                    src="../../../src/assets/ImagesInicio/About.jpg"
                    className="img-fluid about-us-image"
                    alt="Sobre Nosotros"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="product-categories" className="product-category-section">
          <div className="container">
            <h2 className="stitle text-center mb-4">Categorías de Productos</h2>
            <div className="row">
              <div className="col-md-3 col-sm-6 mb-4">
                <div className="card">
                  <img
                    src="../../../src/assets/ImagesInicio/Card1.jpg"
                    className="card-img-top"
                    alt="Pc's y Laptops"
                  />
                  <div className="card-body">
                    <h5 className="card-title">PCs y Laptops</h5>
                    <p className="card-text">
                      Encuentra una amplia gama de computadoras y laptops para
                      todas tus necesidades.
                    </p>
                    <div className="card-button">
                      <a href="/Computadoras-Laptops" className="btn">
                        Ver más
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-4">
                <div className="card">
                  <img
                    src="../../../src/assets/ImagesInicio/Card2.jpg"
                    className="card-img-top"
                    alt="Accesorios"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Accesorios</h5>
                    <p className="card-text">
                      Los mejores accesorios para complementar tus equipos y
                      mejorar tu experiencia.
                    </p>
                    <div className="card-button">
                      <a href="/accesorios" className="btn">
                        Ver más
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-4">
                <div className="card">
                  <img
                    src="../../../src/assets/ImagesInicio/Card3.jpg"
                    className="card-img-top"
                    alt="Componentes"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Componentes</h5>
                    <p className="card-text">
                      Componentes de muy alta calidad para construir o
                      actualizar tu equipo.
                    </p>
                    <div className="card-button">
                      <a href="/componentes" className="btn">
                        Ver más
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-4">
                <div className="card">
                  <img
                    src="../../../src/assets/ImagesInicio/Card4.jpg"
                    className="card-img-top"
                    alt="Periféricos"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Periféricos</h5>
                    <p className="card-text">
                      Periféricos esenciales para mejorar tu configuración de
                      trabajo o juego.
                    </p>
                    <div className="card-button">
                      <a href="/perifericos" className="btn">
                        Ver más
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6">
                <h4>Envíanos un Mensaje</h4>
                <form>
                  <div className="form-group mb-3">
                    <label htmlFor="name">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Tu Nombre"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Tu Correo Electrónico"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="message">Mensaje</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="4"
                      placeholder="Tu Mensaje"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer isDarkTheme={isDarkTheme} />
    </div>
  );
}

export default Inicio;
