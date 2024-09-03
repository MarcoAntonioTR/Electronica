import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Inicio from '../views/Home/Inicio'
import CompusLaptops from '../views/Home/CompusLaptops'
import Perifericos from '../views/Home/Perifericos'
import Componentes from '../views/Home/Componentes'
import Accesorios from '../views/Home/Accesorios'
import Desktops from '../views/Home/Cat1/Desktops'
import Tablets from '../views/Home/Cat1/Tablets'
import Workstations from "../views/Home/Cat1/Workstations";
import Cables from "../views/Home/Cat2/Cables";
import Cargadores from "../views/Home/Cat2/Cargadores";
import Fundas from "../views/Home/Cat2/Fundas";
import Soportes from "../views/Home/Cat2/Soportes";
import Almacenamiento from "../views/Home/Cat3/Almacenamiento";
import Memorias from "../views/Home/Cat3/Memorias";
import Placas from "../views/Home/Cat3/Placas";
import Procesadores from "../views/Home/Cat3/Procesadores";
import TarjetasG from "../views/Home/Cat3/TarjetasG";
import Audio from "../views/Home/Cat4/Audio";
import Impresoras from "../views/Home/Cat4/Impresoras";
import Monitores from "../views/Home/Cat4/Monitores";
import Ratones from "../views/Home/Cat4/Ratones";
import Teclados from "../views/Home/Cat4/Teclados";

function Rutas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Computadoras-Laptops" element={<CompusLaptops />} />
        <Route path="/Accesorios" element={<Accesorios />} />
        <Route path="/Componentes" element={<Componentes />} />
        <Route path="/Perifericos" element={<Perifericos />} />
        <Route path="/Computadoras-Laptops/Desktops" element={<Desktops />} />
        <Route path="/Computadoras-Laptops/Tablets" element={<Tablets />} />
        <Route path="/Computadoras-Laptops/Workstations" element={<Workstations />} />
        <Route path="/Accesorios/Cables" element={<Cables />} />
        <Route path="/Accesorios/Cargadores" element={<Cargadores />} />
        <Route path="/Accesorios/Fundas" element={<Fundas />} />
        <Route path="/Accesorios/Soportes" element={<Soportes />} />
        <Route path="/Componentes/Almacenamiento" element={<Almacenamiento />}/>
        <Route path="/Componentes/Memorias" element={<Memorias />} />
        <Route path="/Componentes/Placas" element={<Placas />} />
        <Route path="/Componentes/Procesadores" element={<Procesadores />} />
        <Route path="/Componentes/TarjetasGráficas" element={<TarjetasG />} />
        <Route path="/Perifericos/Audio" element={<Audio />} />
        <Route path="/Perifericos/Impresoras" element={<Impresoras />} />
        <Route path="/Perifericos/Monitores" element={<Monitores />} />
        <Route path="/Perifericos/Ratones" element={<Ratones />} />
        <Route path="/Perifericos/Teclados" element={<Teclados />} />
      </Routes>
    </Router>
  );
}

export default Rutas
