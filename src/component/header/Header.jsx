import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="header">
      <span id="shelfie-logo" />
      SHELFIE
      <span id="nav-buttons">
        <a href="/">
          <button type="button">Dashboard</button>
        </a>
        <a href="/add">
          <button type="button">Add Inventory</button>
        </a>
      </span>
    </div>
  );
}

export default Header;
