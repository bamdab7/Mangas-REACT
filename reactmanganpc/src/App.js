import './App.css';
import Header from './components/Header/Header'; //importamos la clase header y le decimos el directorio
import Container from './components/Container/Container';
import Inicio from './components/Inicio/Inicio';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Link
} from 'react-router-dom';

function App() {
    return (
      <div className="App">
        <Router>
          <Header/> 
          <Routes>
              <Route path="/" element={<Inicio/>}/>
              <Route path="/mangas" element={<Container/>}/>
              {/*falta ruta de carrito compra */}
          </Routes>
          <Footer/>
        </Router>
      </div>
    );
}

export default App;
