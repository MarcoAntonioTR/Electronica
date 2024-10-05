import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import useTheme from "../../components/hooks/useTheme";

function Componentes() {
  const { isDarkTheme, toggleTheme } = useTheme();

  const subcategories = [
    {
      title: "Almacenamiento",
      path: "/Componentes/Almacenamiento",
      image: "../../../src/assets/ImagesComponentes/Card1.jpg",
    },
    {
      title: "Memorias",
      path: "/Componentes/Memorias",
      image: "../../../src/assets/ImagesComponentes/Card2.jpg",
    },
    {
      title: "Placas",
      path: "/Componentes/Placas",
      image: "../../../src/assets/ImagesComponentes/Card3.jpg",
    },
    {
      title: "Procesadores",
      path: "/Componentes/Procesadores",
      image: "../../../src/assets/ImagesComponentes/Card4.jpg",
    },
    {
      title: "Tarjetas Gráficas",
      path: "/Componentes/TarjetasGráficas",
      image: "../../../src/assets/ImagesComponentes/Card5.jpg",
    },
  ];

  return (
    <div className={isDarkTheme ? "bg-dark text-light" : "bg-light text-dark"}>
      <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <div className="container py-5">
        <h2 className="my-4 text-center">Componentes</h2>
        <div className="row">
          {subcategories.map((subcategory, index) => (
            <div className="col-md-12 col-lg-4 mb-5" key={index}>
              <div
                className="card h-100 shadow-lg card-hover"
                style={{ borderRadius: "12px", overflow: "hidden", padding: "15px" }}
              >
                <img
                  src={subcategory.image}
                  className="card-img-top"
                  alt={subcategory.title}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{subcategory.title}</h5>
                  <p className="card-text text-center">
                    Explora la gama de {subcategory.title} disponible.
                  </p>
                </div>
                <div className="card-footer text-center">
                  <a
                    href={subcategory.path}
                    className="btn btn-primary btn-lg"
                    style={{ transition: "0.3s" }}
                  >
                    Ver más
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer isDarkTheme={isDarkTheme} />
    </div>
  );
}

export default Componentes;
