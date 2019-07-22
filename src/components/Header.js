import React from 'react';

function Header(props) {
  return (
    <header className="jumbotron-fluid text-light home">
      <div className="hero column justify-content-center align-content-center">
        {props.children}
        <div class="text-center">
          <h1 class="header-font header">CAMILIA MZALI</h1>
          <h2 class="main-font">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
        </div>
      </div>
    </header>
  )
}

export default Header;