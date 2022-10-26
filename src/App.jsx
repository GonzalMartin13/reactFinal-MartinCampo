import './App.css';
import { Route, Routes } from 'react-router-dom';
import PLC from './compo/Contenedores/ProdLC';
import Ingreso from './compo/ingreso/ingreso';
import PDC from './compo/Contenedores/ProdDC';
import Nav from './compo/Nav/nav';
import Carrito from './compo/cart/carrito';
import CartProvider from './context/cartcontext';




function App() {  
  return (
      <div className="BodyIngreso container-fluid">
        <Nav/>
          <CartProvider>
            <Routes>
              <Route path='/home' element={<Ingreso/>}/>      
              <Route path='/' element={<Ingreso/>}/>      
              <Route path="/categoria/:tipo" element={<PLC/>}/>
              <Route path="/productos" element = {<PLC/>}/>
              <Route path="/detail/:prodID" element={<PDC/>}/>
              <Route path="/carrito" element={<Carrito/>}/>
            </Routes> 
          </CartProvider> 
      </div>
  )
}

export default App;
