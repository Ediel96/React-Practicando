import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">UseContext</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <NavLink className={ ({isActive}) => `nav-link ${isActive ? 'active' : '' }`}
                    to="/">
                        Home
                    </NavLink>

                    <NavLink className={ ({isActive}) => `nav-link ${isActive ? 'active' : '' }`}
                    to="/login">
                        Login
                    </NavLink>


                    <NavLink className={ ({isActive}) => `nav-link ${isActive ? 'active' : '' }`}
                    to="/about">
                        About
                    </NavLink>
                
                </ul>
            </div>
        </div>
    </nav>

  )
}
