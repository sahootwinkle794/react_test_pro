import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container">
        <a className="navbar-brand text-info fw-bold" href="/">{props.logo}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">HOME</a>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown" aria-expanded="false">CATEGORY</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Sports</a></li>
              <li><a className="dropdown-item" href="/">Entertainment</a></li>
              <li><a className="dropdown-item" href="/">Weather</a></li>
              <li><a className="dropdown-item" href="/">Business</a></li>
              <li><a className="dropdown-item" href="/">Education</a></li>
              <li><a className="dropdown-item" href="/">Health</a></li>
              <li><a className="dropdown-item" href="/">Lifestyle</a></li>
            </ul>
          </li>
            <li className="nav-item">
              <a className="nav-link">NATIONAL</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">INTERNATIONAL</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">{props.aboutText}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">CONTACT US</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-info" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}



Navbar.propTypes ={
    logo: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
  }
  
Navbar.defaultProps = {
    logo: 'Logo Name',
    aboutText: 'About Us'
  };