import './App.css';
import { Route, Routes } from 'react-router-dom';
import { About, Cart, Contacts, Home, Shop } from './pages';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
  );
}

export default App;
