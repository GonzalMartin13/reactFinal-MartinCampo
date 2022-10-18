import './App.css';
import PLC from './compo/Contenedores/ProdLC';
import Ingreso from './compo/ingreso/ingreso';
import PDC from './compo/Contenedores/ProdDC';


function App() {
  
  return (
    <div className="BodyIngreso container-fluid">
      <Ingreso/>
        <PLC/>
        <PDC/>
    </div>
  )
}

export default App;
