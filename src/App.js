import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './pages/add items/AddItems';
import Items from './pages/allItems/Items';
import Home from './pages/home/Home';
import Inventory from './pages/inventory/Inventory';
import MyItems from './pages/MyItems/MyItems';
import Sign from './pages/signIn/Sign';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<Inventory></Inventory>}></Route>
        <Route path='/manageInventories' element={<Items></Items>}></Route>
        <Route path='/addItems' element={<AddItems></AddItems>}></Route>
        <Route path='/myItems' element={<MyItems></MyItems>}></Route>
        <Route path='/login' element={<Sign></Sign>}></Route>
      </Routes>
    </div>
  );
}

export default App;
