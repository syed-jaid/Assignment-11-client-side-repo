import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './pages/add items/AddItems';
import Items from './pages/allItems/Items';
import Home from './pages/home/Home';
import Inventory from './pages/inventory/Inventory';
import MyItems from './pages/MyItems/MyItems';
import Registor from './pages/signIn/Registor';
import Requird from './pages/signIn/Requird';
import Sign from './pages/signIn/Sign';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<Requird><Inventory></Inventory></Requird>}></Route>
        <Route path='/manageInventories' element={
          <Requird><Items></Items></Requird>}></Route>
        <Route path='/addItems' element={<Requird><AddItems></AddItems></Requird>}></Route>
        <Route path='/myItems' element={<Requird><MyItems></MyItems></Requird>}></Route>
        <Route path='/login' element={<Sign></Sign>}></Route>
        <Route path='/Registor' element={<Registor></Registor>}></Route>
      </Routes>
    </div>
  );
}

export default App;
