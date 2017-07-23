import React from "react";
import {Link} from "react-router-dom";
// import DropDown from '../components/nav-comps.js';
import {Navbar, NavItem, Nav} from "react-bootstrap";

let FontAwesome = require('react-fontawesome');

class MyNav extends React.Component {
    render() {
        return (
            // <div className="container-fluid">
            <Navbar collapseOnSelect fluid className="nav-custom">
                <Navbar.Header>
       
<Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>

                    <Nav pullRight>
 <NavItem>
                            <Link to="/#explore">
                                <li>explore</li>
                            </Link>
                        </NavItem>
                       
                        <NavItem>
                            <Link to="/#skills">
                                <li>skills
                                </li>
                            </Link>
                        </NavItem>
                   
                        <NavItem>
                            <Link to="/#connection">
                                <li>connect</li>
                            </Link>
                        </NavItem>
                     
                        <NavItem>
                            <Link to="/#connection">
                                <li>about</li>
                            </Link>
                        </NavItem>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
       

        )
    }
}

export default MyNav;