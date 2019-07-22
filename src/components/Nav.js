import React from 'react';

function Nav(props) {
  return (
    <nav className="navbar nav-bg sticky-top navbar-expand-lg navbar-dark text-dark">
      {/* <span className="navbar-brand script-font display-3"></span> */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto header-font">
          <li className="nav-item">
            <a className="nav-link" href="#home">PORTFOLIO</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">ABOUT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;