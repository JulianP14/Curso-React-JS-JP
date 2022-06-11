import React, {useState} from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  const [pagina, setPagina] = useState('detalle')

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element = {<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemDetailContainer/>} />
          <Route path='/detalles/:productoId' element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
//2.44