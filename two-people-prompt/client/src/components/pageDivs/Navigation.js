// make a reusable nav bar
import React from 'react';
import { Nav, NavItem } from '../styledUI/StyledUI';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Nav className="App">
        <h1>React Router Mini</h1>
        <NavItem>
          <NavLink className="Nav-Link" to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="Nav-Link" to="/about">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="Nav-Link" to="/contact">
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default NavBar;
/* 
// Todo
export default class NavBar extends Component {
  state = { exact: '', paths: [] }
  render() {
    return (
      
    );
  }
} */
