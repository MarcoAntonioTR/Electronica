import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import useTheme from "../../components/hooks/useTheme";

const Inicio = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <div className={isDarkTheme ? "bg-dark text-light" : "bg-light text-dark"}>
      <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      {/* Aquí iría el contenido principal de tu aplicación */}

      <Footer isDarkTheme={isDarkTheme} />
    </div>
  );
};

export default Inicio;
