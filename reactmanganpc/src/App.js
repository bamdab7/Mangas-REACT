import './App.css';
import Header from './components/Header/Header'; //importamos la clase header y le decimos el directorio
import Container from './components/Container/Container';

function App() {
    return (
      <div className="App">
          <Header/> 
          <Container/>
      </div>
    );
}

export default App;
