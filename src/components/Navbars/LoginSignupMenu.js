import React from 'react'
import { NavItem, NavLink } from 'reactstrap'

export default function LoginSignupMenu() {
    return (
        <>
            <NavItem>
              <NavLink
                href="/login"
              >
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/signup"
              >
                Sign up
              </NavLink>
            </NavItem>
        </>
    )
}
