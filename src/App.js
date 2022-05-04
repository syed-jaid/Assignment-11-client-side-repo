import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Inventory from './pages/inventory/Inventory';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<Inventory></Inventory>}></Route>
      </Routes>
    </div>
  );
}

export default App;
