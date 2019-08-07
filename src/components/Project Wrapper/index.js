import React from 'react';

function Projects(props) {
  return (
    <div className="wrapper py-5">
      <h2 className="header-font text-center section-title portfolio-title letter-space mb-5">PORTFOLIO</h2>
      <div className="container-fluid">
        <div className="row mx-0">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Projects;