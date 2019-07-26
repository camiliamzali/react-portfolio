import React from 'react';

function ProjectCard(props) {
  return (
    <div className="col-md-3 col-sm-12">
      <div className="card">
        <img className="card-img-top" src={props.image} alt="props" />
        <div className="card-body">
          <h5 className="card-title header-font">{props.name}</h5>
          <p className="card-text main-font">{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;