import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './Logo.css'; // Import the CSS file for styling
import logoImage from './components/Assets/a1.png'; // Import the logo image

const Logo = () => {
  return (
    // Wrap the logo with a Link component
    <Link to="/" className="logo-container">
      <img src={logoImage} alt="Logo" />
    </Link>
  );
}

export default Logo;
