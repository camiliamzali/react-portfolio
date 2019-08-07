import React from 'react';

function ProjectCard(props) {
  return (
    <div className="col-sm-12 col-md-12 col-lg-3 ">
      <div className="card">
        <a target="_blank" rel="noopener noreferrer" href={props.link}>
          <img className="card-img-top project-img" src={props.image} alt="props" />
        </a>
        <div className="card-body">
          <a className="portfolio-links" target="_blank" rel="noopener noreferrer" href={props.link}><h6 className="card-title header-font">{props.name}</h6></a>
          <p className="card-text main-font bold"><span className="font-weight-bold main-font">Tools Used: </span>{props.tools}</p>
          <p className="card-text main-font"><span className="font-weight-bold main-font">Description: </span>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;