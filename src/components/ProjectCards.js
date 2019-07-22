import React from 'react';

function ProjectCard(props) {
  return (
    <div className="card col-md-3 col-sm-12">
      <img className="card-img-top" src={props.image} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.link} className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default ProjectCard;