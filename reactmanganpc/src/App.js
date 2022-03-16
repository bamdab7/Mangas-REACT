import './App.css';
import Header from './components/Header/Header'; //importamos la clase header y le decimos el directorio
import Container from './components/Container/Container';
import Inicio from './components/Inicio/Inicio';
import Footer from './components/Footer/Footer';
import Detalle from './components/Detalle/Detalle';
import BuscarCategorias from './components/BuscarCategorias/BuscarCategorias';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import {useState} from 'react';
import Basket from './components/Basket/Basket';

function App() {

  const{cartItems, setCartItems} = useState([]);
  //funcion que nos permite agregar al carrito 

  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist) { //si existe el producto deberemos buscar el producto el el carrito e incrementar el numero
      setCartItems(cartItems.map(x => x.id ===product.id ? {...exist,qty: exist.qty +1} : x //actualiza valores si hay mas de uno
        )
      ); 
    } else { //si el producto no existe, lo añadimos al carro
      setCartItems([...cartItems,{...product, qty: 1}]);
    }
  };
  const onRemove=(product)=>{
    const exist = cartItems.find((x)=>x.id === product.id);
    if(exist.qty === 1){ //si hay producto necesito eliminarlo

    }else{

    }
  };

    return (
      <div className="App">
        <Router>
          <Header/> 
          <Routes>
              <Route path="/" element={<Inicio/>} ondAdd={onAdd} />
              <Route path="/mangas" element={<Container/>} ondAdd={onAdd} />
              {/*falta ruta de carrito compra */}
              <Route path="/detalle/:id" element={<Detalle/>}/>
              <Route path="/manga/genero" element={<BuscarCategorias/>}/>
              <Route path="/carrito" element={<Basket items={cartItems} ondAdd={onAdd} />}/>
          </Routes>
          <Footer/>
        </Router>
      </div>
    );
}

export default App;
