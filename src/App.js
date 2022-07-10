import React from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Carrito from './components/Cart/Cart';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './notification/Notification';



function App() {
  return (
    <div className="App">
      <NotificationProvider>  
        <CartProvider>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/' element = {<ItemListContainer/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>} />
              <Route path='/detalles/:productoId' element={<ItemDetailContainer/>} />
              <Route path='/cart' element={<Carrito/>}/>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>  
    </div>
  );
}

export default App;

//2.44