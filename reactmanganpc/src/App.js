import './App.css';
import Header from './components/Header/Header'; //importamos la clase header y le decimos el directorio
import Container from './components/Container/Container';
import Product from './components/Product/Product';

function App() {
    return (
      <div className="App">
          <Header/>
          <Container/>
         {/* <Product/>  */} 
          
      </div>
    );
}

export default App;
