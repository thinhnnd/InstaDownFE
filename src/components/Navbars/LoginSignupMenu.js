import React from 'react'
import { NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function LoginSignupMenu() {
    return (
        <>
            <NavItem>
              <Link className="nav-link" to={`/login`} >
                  Login
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to={`/signup`} >
                  Signup
              </Link>
            </NavItem>
        </>
    )
}
