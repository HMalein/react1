import "./App.css";
import "./Components/Home.Component.css";
import { Link, Route, Routes} from "react-router-dom";
import Courses from "./Pages/Courses";
import Hobbies from "./Pages/Hobbies";
import Work from "./Pages/Work";
import Main from "./Components/Main";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
        <Home />
    <Routes>
      <Route path="/" exact element={ <Home/> }/>
      <Route path="/Courses" exact element={ <Courses/> }/>
      <Route path="/Hobbies" exact element={ <Hobbies/> }/>
      <Route path="/Work" exact element={ <Work/> }/>
    </Routes>
    </div>
  );
}

export default App;
