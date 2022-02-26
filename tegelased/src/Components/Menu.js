import { Link } from "react-router-dom";

function Menu() {
return (<div>
    <Link to="/">
    <button className="menuButton">Home</button>
    </Link>
    <Link to="/Characters">
    <button className="menuButton">Characters</button>
    </Link>
    <Link to="/Admin">
    <button className="menuButton">Admin</button>
    </Link>
    </div>
    )
}

export default Menu;