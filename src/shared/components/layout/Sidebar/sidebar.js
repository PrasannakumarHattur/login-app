// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./sidebar.css"

const Sidebar = () => {
  return (
    <div id="sidebar" className="column">
    <div className="sidebar-container">
      <ul>
        <li>
          <NavLink
            to="/dashboard"
            activeClassName="active"
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/information"
            activeClassName="active"
          >
            Information
          </NavLink>
        </li>
        {/* Add more links here */}
      </ul>
    </div>
  </div>
   
  );
};

export default Sidebar;
