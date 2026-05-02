import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="top-navbar">
      <Link to="/" className="nav-logo-container">
        <img src={logo} alt="ThinkFast Logo" className="nav-logo" />
        <span className="nav-title">Think<span className="text-gradient">Fast</span></span>
      </Link>
    </nav>
  );
}
