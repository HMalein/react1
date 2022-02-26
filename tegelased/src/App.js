import './App.css';
import { Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu";
import Home from "./Pages/Home";
import Characters from "./Pages/Characters";
import AddCharacter from "./Pages/AddCharacter";
import ViewCharacters from "./Pages/ViewCharacters";
import Admin from "./Pages/Admin";
import ChangeCharacter from "./Pages/ChangeCharacter";
import Posts from "./Pages/Posts";



function App() {
  return (
    <div className="App">
      <Menu />
    <Routes>
      <Route path = "/" exact element = { <Home/> }/>
      <Route path = "/Characters" exact element = { <Characters/> }/>
      <Route path = "/AddCharacter" exact element = { <AddCharacter/> }/>
      <Route path = "/Admin" exact element = { <Admin/> }/>
      <Route path = "/Characters/ViewCharacters" exact element = { <ViewCharacters/> }/>
      <Route path = "/Characters/Change/:characterName" exact element= { <ChangeCharacter/> }/>
      <Route path = "/Posts" exact element = { <Posts/>}/>
    </Routes>
    </div>
  );
}

export default App;
