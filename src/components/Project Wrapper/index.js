import React from 'react';

function Projects(props) {
  return (
    <div className="wrapper pt-5">
      <h2 className="header-font text-center project-title letter-space mb-5">PORTFOLIO</h2>
      <div className="row">
        {props.children}
      </div>
    </div>
  )
}

export default Projects;