import { Link } from "react-router-dom"

function Admin() {
    return(<div>
        <Link to="/admin/AddAdminCharacters">
        <button>Add characters</button>
        </Link>
        <Link to="/admin/ViewCharacters">
        <button>Change/delete characters</button>
        </Link>
    </div>)
}

export default Admin;