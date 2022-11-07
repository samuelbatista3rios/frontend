import './Nav.css'
import React from 'react'
import {Link} from 'react-router-dom'

export default props =>
<aside className="menu-area">
    <nav className='menu'> 
   {/* <a href="#/">
       <i className="fa fa-home"></i>Início
</a>*/}
    <Link to="/users">
        <i className='fa fa-users'> Usuarios</i>
    </Link>
    
    </nav>
</aside>
