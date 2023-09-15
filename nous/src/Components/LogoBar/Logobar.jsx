import React from 'react';
import './LogoBar.css';
import Image from './Logo.svg';

export default function Logobar() {
  return (
    <nav className="navbar">
      <div className="center-logo">
        <img src={Image} alt="Logo" />
      </div>
    </nav>
  );
}
