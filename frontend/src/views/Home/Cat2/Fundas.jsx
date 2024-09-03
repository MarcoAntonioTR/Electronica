import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import useTheme from "../../../components/hooks/useTheme";

function Fundas() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <div className={isDarkTheme ? "bg-dark text-light" : "bg-light text-dark"}>
      <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      {/* Aquí iría el contenido principal de tu aplicación */}

      <Footer isDarkTheme={isDarkTheme} />
    </div>
  );
}

export default Fundas;
