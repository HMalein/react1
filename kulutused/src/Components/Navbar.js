import {Link} from "react-router-dom";

function Navbar(){

    return(<div>
        <Link to = "/addexpense">
        <button>Add expense</button>
        </Link>
        <Link to = "/History">
        <button>History</button>
        </Link>
        <Link to = "/">
        <button>Overview</button>
        </Link>
    </div>);
}

export default Navbar