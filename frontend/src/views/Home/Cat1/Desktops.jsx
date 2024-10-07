import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import useTheme from "../../../components/hooks/useTheme";
import useFilters from "../../../components/hooks/useFilters";
import '../../../../src/styles/Desktops.css'; 

function Desktops() {
  const { isDarkTheme, toggleTheme } = useTheme();

  const products = [
    {
      title: "Desktop Gaming",
      path: "/Desktops/Gaming",
      image: "../../../../src/assets/ImagesCompusLaptops/ImagesDesktops/Product1.jpg",
      category: "gaming",
    },
    {
      title: "Desktop de Oficina",
      path: "/Desktops/Oficina",
      image: "../../../../src/assets/ImagesCompusLaptops/ImagesDesktops/Product2.jpg",
      category: "oficina",
    },
    {
      title: "All-in-One",
      path: "/Desktops/All-in-One",
      image: "../../../../src/assets/ImagesCompusLaptops/ImagesDesktops/Product3.jpg",
      category: "all-in-one",
    },
  ];

  // Usar el hook de filtros
  const {
    searchTerm,
    setSearchTerm,
    selectedFilter,
    setSelectedFilter,
    filteredProducts,
  } = useFilters(products);

  return (
    <div className={isDarkTheme ? "bg-dark text-light" : "bg-light text-dark"}>
      <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <div className="container py-5">
        <h2 className="my-4 text-center">Desktops</h2>

        <div className="row mb-4">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <select
              style={{ margin: "15px 0" }}
              className="form-select"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="all">Todos los productos</option>
              <option value="gaming">Gaming</option>
              <option value="oficina">Oficina</option>
              <option value="all-in-one">All-in-One</option>
            </select>
          </div>
        </div>

        <div className="row">
          {filteredProducts.map((product, index) => (
            <div className="col-md-12 col-lg-4 mb-5" key={index}>
              <div
                className="card h-100 shadow-lg card-hover"
                style={{ borderRadius: "12px", overflow: "hidden", padding: "20px" }} // Ajuste de padding
              >
                <div className="card-image-container">
                  <img
                    src={product.image}
                    className="card-img-top img-fluid"
                    alt={product.title}
                    style={{ height: "300px", objectFit: "cover", transition: "transform 0.5s" }} // Aumento de altura
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">{product.title}</h5>
                  <p className="card-text text-center">
                    Explora la gama de {product.title} disponible.
                  </p>
                </div>
                <div className="card-footer text-center">
                  <a
                    href={product.path}
                    className="btn btn-primary btn-lg hover-effect"
                    style={{ transition: "0.3s", fontSize: "1.2rem" }} // Aumento de tamaño de fuente
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

export default Desktops;

