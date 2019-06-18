import React from './node_modules/react';

function ProjectCards(props) {
  return (
    <div class="card">
      <img class="card-img-top" src={props.src} alt={props.alt} />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href={props.href} class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default ProjectCards;