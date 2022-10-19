import './App.css';
import { Route, Routes } from 'react-router-dom';
import PLC from './compo/Contenedores/ProdLC';
import Ingreso from './compo/ingreso/ingreso';
import PDC from './compo/Contenedores/ProdDC';




function App() {  
  return (
      <div className="BodyIngreso container-fluid">
        <Ingreso/>
        <Routes>        
          <Route path="/combo" element={<PLC/>}/>
          <Route path="/prod" element={<PLC/>}/>
          <Route path="/:id" element={<PDC/>}/>
        </Routes>
      </div>
  )
}

export default App;
