import './App.css';
import Products from './components/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
