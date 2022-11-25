import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Cart from './components/Cart/Cart'
import Form from './components/Form';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartProvider from './context/CartContext';
import Footer from './components/Footer';


function App() {
return (
<BrowserRouter>
  <CartProvider>
  <Navbar />
  <Routes>
  <Route path='/' element={<ItemListContainer greeting='Bienvenido a Libre Ría' />}/>
  <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
  <Route path='/detail/:idProd' element={<ItemDetailContainer/>}/>
  <Route path='/Cart' element={<Cart/>}/>
  <Route path='/checkout' element={<Form/>}/>
  </Routes>
  <Footer/>
  </CartProvider>
</BrowserRouter>
);
}


export default App;