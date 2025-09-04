import React, { useState } from 'react'
import ChemforsLogo from '../chemforss.png'
import { useNavigate } from 'react-router-dom'
import { removeToken } from '../auth'

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  
  const handleLogout = () => {
    removeToken();
    navigate('/');
  };
  
  return (
    <nav className="navbar has-background-black" role="navigation" aria-label="main navigation" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '80px',
      zIndex: 1000,
      padding: '0 2rem',
      borderBottom: '1px solid #fff'
    }}>
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src={ChemforsLogo} width="28" height="28" alt="ChemFors Logo"/>
        </a>
    
        <a role="button" className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" onClick={() => setIsActive(!isActive)}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <a className="navbar-item has-text-primary" onClick={() => {navigate('/dashboard'); setIsActive(false);}} style={{cursor: 'pointer'}}>
            Home
          </a>

          <a className="navbar-item has-text-primary" onClick={() => {navigate('/calculate'); setIsActive(false);}} style={{cursor: 'pointer'}}>
            Calculate
          </a>

          <a className="navbar-item has-text-primary" onClick={() => {navigate('/documentation'); setIsActive(false);}} style={{cursor: 'pointer'}}>
            Documentation
          </a>

          <div className="navbar-item has-dropdown is-hoverable has-text-primary">
            <a className="navbar-link has-text-primary">
              More
            </a>

            <div className="navbar-dropdown has-text-primary">
              <a className="navbar-item" onClick={() => {navigate('/account'); setIsActive(false);}} style={{cursor: 'pointer'}}>
                Account
              </a>
              <a className="navbar-item" onClick={() => {navigate('/history'); setIsActive(false);}} style={{cursor: 'pointer'}}>
                History chart
              </a>
            </div>
          </div>
        </div>
    
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className="button is-light" onClick={() => {handleLogout(); setIsActive(false);}}>
                LogOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
 )
}

export default Navbar