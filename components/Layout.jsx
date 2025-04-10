/* Student Name: Jorlin Roy
// Student ID: 301240499
 Date: 7 OCT 2024*/
import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css'; 

export default function Layout() {
  return (
    <>
      <header className="layout-header">
        <h1 className="layout-title">Jorlin Roy's Portfolio</h1>
        <nav className="layout-nav">
          <ul>
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/education" className="nav-link">Education</Link></li>
            <li><Link to="/project" className="nav-link">Projects</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <hr className="divider" />
    </>
  );
}

