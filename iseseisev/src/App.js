import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Kodu from './Pages/Kodu';
import Menyy from './Components/Menyy';
import Ostukorv from './Pages/Ostukorv';
import Pakiautomaadid from './Components/Pakiautomaadid';
import Admin from './Pages/Admin';
import LisaToode from './Pages/LisaToode';
import VaataTooteid from './Pages/VaataTooteid';
import ÜksikToode from './Pages/ÜksikToode';
import MuudaToode from './Pages/MuudaToode';

// to='/' -- localhost:3000
// to='/ostukorv' -- localhost:3000/ostukorv
function App() {
  return (
    <div className="App">
        <Menyy />
    <Routes>
      <Route path='/' exact element={ <Kodu/> }/>
      <Route path='/Ostukorv' exact element={ <Ostukorv/> }/>
      <Route path='/omniva' exact element= { <Pakiautomaadid/> }/>
      <Route path='/admin' exact element= { <Admin/> }/>
      <Route path='/admin/lisa' exact element= { <LisaToode/> }/>
      <Route path='/admin/tooted' exact element= { <VaataTooteid/> }/>
      <Route path='/admin/muuda/:tooteNimi' exact element= { <MuudaToode/> }/>
      <Route path='/toode/:tooteNimi' exact element= { <ÜksikToode /> }/>
    </Routes>


    </div>
  );
}

export default App;
