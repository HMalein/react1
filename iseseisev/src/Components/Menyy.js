import { Link } from 'react-router-dom'


function Menyy() {
    return (<div>
      <Link to='/'>
        <button className='menyy-nupp'>AVALEHELE</button>
      </Link>
      <Link to='/ostukorv'>
        <button className='menyy-nupp'>OSTUKORVI</button> 
      </Link>
      <Link to='/omniva'>
        <button className='menyy-nupp'>PAKIAUTOMAADID</button> 
      </Link>
      <Link to='/Admin'>
        <button className='menyy-nupp'>ADMIN</button> 
      </Link>
    </div>);
}

export default Menyy;