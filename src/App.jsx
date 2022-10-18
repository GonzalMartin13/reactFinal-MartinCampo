import './App.css';
import PLC from './compo/Contenedores/ProdLC';
import Ingreso from './compo/ingreso/ingreso';


function App() {
  
  return (
    <div className="BodyIngreso container-fluid">
      <Ingreso/>
      <PLC/>
    </div>
  )
}

export default App;
