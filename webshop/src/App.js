import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import AdminHome from './Pages/admin/AdminHome';
import PaymentCompleted from './Pages/PaymentCompleted';
import SingleProduct from './Pages/SingleProduct';
import AddProduct from './Pages/admin/AddProduct';
import ViewProducts from './Pages/admin/ViewProducts';
import EditProduct from './Pages/admin/EditProduct';

function App() {
  
  
  return (
    <div>
      <NavigationBar/>
      <Routes>
        <Route path='/' exact element ={<Home />} />
        <Route path='/ostukorv' exact element ={<Cart />} />
        <Route path='/admin' exact element ={<AdminHome/>} />
        <Route path='/tellimus' exact element ={<PaymentCompleted/>} />
        <Route path='/toode/:tooteNimi' exact element ={<SingleProduct/>} />
        <Route path='/admin/lisa' exact element ={<AddProduct/>} />
        <Route path='/admin/tooted' exact element ={<ViewProducts/>} />
        <Route path='/admin/muuda/:tooteNimi' exact element ={<EditProduct/>} />
      </Routes>
    </div>
  );
}

export default App;
