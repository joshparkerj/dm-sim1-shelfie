import React from 'react';
import './header.css';

function Header(props){
  return (
    <div className="header">
      <span id="shelfie-logo"></span>
      SHELFIE
      <span id="nav-buttons">
        <a href="/">
          <button>Dashboard</button>
        </a>
        <a href="/add">
          <button>Add Inventory</button>
        </a>
      </span>
    </div>
  )
}

export default Header;
