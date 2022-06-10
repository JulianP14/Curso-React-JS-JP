import React, {useState} from 'react';
import './App.css'
/* import '../css/App.css'; */
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  const [pagina, setPagina] = useState('detalle')

  return (
    <div className="App">
      {/* <header className="App-header">
        <NavBar/>
        <div>
          <button onClick={() => setPagina('lista')}>Lista</button>
          <button onClick={() => setPagina ('detalle')}>Detail</button>
        </div>
      </header>
      {pagina === 'lista' && <ItemListContainer greeting='DE CUERO'/>}
      {pagina === 'detalle' && <ItemDetailContainer/>} */}
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