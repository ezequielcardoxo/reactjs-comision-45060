import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
return (
<BrowserRouter>
  <Navbar />
  <Routes>
  <Route path='/' element={<ItemListContainer greeting='Bienvenido a Libre Ría' />}/>
  <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
  <Route path='/detail/:idProd' element={<ItemDetailContainer/>}/>
  
  </Routes>
</BrowserRouter>
);
}


export default App;