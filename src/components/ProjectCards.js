import React from 'react';

function ProjectCard(props) {
  return (
    <div className="col-md-3 col-sm-12">
      <div className="card">
        <a href={props.link}>
          <img className="card-img-top project-img" src={props.image} alt="props" />
        </a>
        <div className="card-body">
          <a href={props.link}><h5 className="card-title header-font">{props.name}</h5></a>
          <p className="card-text main-font">{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;