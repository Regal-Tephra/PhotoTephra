import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Link } from 'react-router';

const topNav = (props) => (
  <Nav>
    <div id="sidebar-wrapper">
      <ul className="sidebar-nav">
        <li className="sidebar-brand">
          <a href="#">
          Photephra
          </a>
        </li>
        <li>
          <a onClick={() => { props.setView('aboutUs'); }} activeClassName="active">
          About Us
          </a>
        </li>
        <li>
          <a onClick={() => { props.setView('slides'); }} activeClassName="active">
          Create New Profile
          </a>
        </li>
        <li>
          <a onClick={() => { props.setView('profiles'); }} activeClassName="active">
          View Saved Profiles
          </a>
        </li>
      </ul>
    </div>
  </Nav>
);

topNav.propTypes = {
  setView: React.PropTypes.func,
};

export default topNav;
