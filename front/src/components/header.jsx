import React from 'react'
import { Link } from 'react-router-dom'

function header()
{
    return(
        <header>
        <Link className='logo' to="/">MyBlog</Link>

        <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        </nav>
        
      </header>  
    )
}

export default header