import { Route, Routes } from 'react-router-dom';
import './App.css';
import Items from './pages/allItems/Items';
import Home from './pages/home/Home';
import Inventory from './pages/inventory/Inventory';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<Inventory></Inventory>}></Route>
        <Route path='/manageInventories' element={<Items></Items>}></Route>
      </Routes>
    </div>
  );
}

export default App;
