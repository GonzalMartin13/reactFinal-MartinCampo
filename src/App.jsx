import './App.css';
import { Route, Routes } from 'react-router-dom';
import PLC from './compo/Contenedores/ProdLC';
import Ingreso from './compo/ingreso/ingreso';
import PDC from './compo/Contenedores/ProdDC';
import Nav from './compo/Nav/nav';




function App() {  
  return (
      <div className="BodyIngreso container-fluid">
        <Nav/>
         <Routes>
          <Route path='/home' element={<Ingreso/>}/>      
          <Route path='/' element={<Ingreso/>}/>      
          <Route path="/categoria/:tipo" element={<PLC/>}/>
 
          <Route path="/detail" element={<PDC/>}/>
        </Routes> 
      </div>
  )
}

export default App;
