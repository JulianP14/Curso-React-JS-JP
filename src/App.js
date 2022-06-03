import './App.css'
/* import '../css/App.css'; */

import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <ItemListContainer greeting='DE CUERO'/>
    </div>
  );
}

export default App;
