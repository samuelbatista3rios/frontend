import './Nav.css'
import React from 'react'
import {Link} from 'react-router-dom'

export default props =>
<aside className="menu-area">
    <nav className='menu'> 
   {/* <a href="#/">
       <i className="fa fa-home"></i>Início
</a>*/}
     <Link to="/">
        <i className='fa fa-home'> Início</i>
    </Link>
    <Link to="/users">
        <i className='fa fa-users'> Usuarios</i>
    </Link>
    <Link to='https://github.com/samuelbatista3rios?tab=repositories'>
        <i className='fa fa-github'> Sobre Mim</i>
    </Link>
    </nav>
</aside>
