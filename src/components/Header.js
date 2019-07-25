import React from 'react';

function Header(props) {
  return (
    <header className="jumbotron-fluid text-light home">
      <div className="hero column justify-content-center align-content-center">
        {props.children}
        <div className="text-center">
          <h1 className="header-font header letter-space">CAMILIA MZALI</h1>
          <h2 className="main-font">Full stack developer with a passion for design</h2>
        </div>
      </div>
    </header>
  )
}

export default Header;