import logo from './logo.svg';
import './App.css'
/* import '../css/App.css'; */

import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';



function App() {
  return (
    <div className="App">
      <ItemListContainer greeting='DE CUERO'/>
      <header className="App-header">
        <NavBar/>
      </header>
    </div>
  );
}

export default App;
