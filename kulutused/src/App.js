import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import AddExpense from './Pages/AddExpense';
import Overview from './Pages/Overview';
import History from './Pages/History';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" exact element = { <Overview/> } />
        <Route path="/addexpense" exact element = { <AddExpense/> } />
        <Route path="/history" exact element = { <History/> } />
      </Routes>
    </div>
  );
}

export default App;
