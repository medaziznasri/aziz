import React from 'react'
import Logo from '../../Logo'
import './Header.css'

function Header() {
    return (
       <header className="header">
                  
          <div className="brand">
            <a href="#" className="brand-link">
              <h1 className="brand-text"><Logo /></h1>
            </a>
          </div>
          <nav>
            <div className="menu">
              <ul className="navigation">
                <li className="navigation-item active">
                  <a href="/home" className="navigation-link">
                    <span className="navigation-link-text">Home</span>
                  </a>
                </li>
                <li className="navigation-item">
                  <a href="#" className="navigation-link">
                    <span className="navigation-link-text">About</span>
                  </a>
                </li>
                <li className="navigation-item">
                  <a href="#" className="navigation-link">
                    <span className="navigation-link-text">Make a call: +49 15215894603</span>
                  </a>
                </li>
                <li className="navigation-item">
                  <a href="#" className="navigation-link">
                    <span className="navigation-link-text">Contact us</span>
                  </a>
                </li>
                <li className="navigation-item">
                  <a href="/login" className="navigation-link btn login-btn">
                    <span className="navigation-link-text">Login</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
              </header>
  )
}

export default Header
