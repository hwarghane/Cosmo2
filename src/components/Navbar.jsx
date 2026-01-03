import React from 'react';
import './Navbar.css';
import NavItem from './NavItem';

export default function Navbar({ links = [], brand = null, className = '' }) {
  return (
    <nav className={`navbar ${className}`.trim()}>
      <div className="navbar-inner">
        {brand && <div className="navbar-brand">{brand}</div>}
        <ul className="navbar-list">
          {links.map((l, i) => (
            <li key={i} className="navbar-list-item">
              <NavItem href={l.href} label={l.label} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
