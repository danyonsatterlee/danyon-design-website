import React from "react";
import {Link} from "react-router-dom";
import {HashLink} from 'react-router-hash-link';
import {Navbar, NavItem, Nav} from "react-bootstrap";
import FontAwesome from "react-fontawesome";

// import DropDown from '../components/nav-comps.js';

class MyNav extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect fluid className="nav-custom">
        <Navbar.Header>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse >
          <Nav pullRight>
         <NavItem>
              <HashLink to="/#ex">
                <li>explore</li>
              </HashLink>
            </NavItem>

            <NavItem>
              <HashLink to="/#skills">
                <li>skills</li>
              </HashLink>
            </NavItem>

            <NavItem>
              <HashLink to="/#connection">
                <li>connect</li>
              </HashLink>
            </NavItem>

               {/*<NavItem>
              <HashLink to="/">
                <li>home</li>
              </HashLink>
            </NavItem>*/}

          
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default MyNav;