import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <nav className="App-menu">
    <NavLink to="/page1" activeClassName="linkActive">
      Page 1
    </NavLink>
    <NavLink to="/page2" activeClassName="linkActive">
      Page 2
    </NavLink>
  </nav>
);
