import React from 'react'
import {
    UncontrolledCollapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
  } from "reactstrap";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function UserMenu(props) {

    const auth = useSelector( state => state.auth)
    const history = useHistory();

    return (
        <>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                    aria-expanded={false}
                    aria-haspopup={true}
                    caret
                    color="default"
                    data-toggle="dropdown"
                    href="#pablo"
                    nav
                    onClick={(e) => e.preventDefault()}
                    role="button"
                >
                    <i
                        aria-hidden={true}
                        className="nc-icon nc-single-02"
                    /> {auth.user.username}           
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                    <DropdownItem header tag="span">
                        User Menu
                    </DropdownItem>
                    <DropdownItem
                        href="/profile"
                    >
                        {auth.user.fullname}
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                    >
                        Logout
                        </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </>
    )
}
