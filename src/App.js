import React, {useState} from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext';



function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element = {<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemDetailContainer/>} />
            <Route path='/detalles/:productoId' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<h1>Carrito</h1>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>  
    </div>
  );
}

export default App;

//2.44