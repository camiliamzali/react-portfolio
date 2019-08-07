import React from 'react';
import Header from './Header'
import Nav from './Nav'
import About from './About'
import project from '../projects.json'
import Projects from './Project Wrapper'
import ProjectCard from './ProjectCards';
import Contact from './Contact'
class Portfolio extends React.Component {
  state = {
    projectList: project
  }
  render() {
    const { projectList } = this.state;
    return (
      <React.Fragment>
        <Header >
        </Header>
        < Projects>
          {
            projectList.map(({ name, image, description, link, tools }) => {
              return (
                <ProjectCard
                  name={name}
                  key={name}
                  image={image}
                  description={description}
                  link={link}
                  tools={tools} />
              )
            })
          }
        </Projects>
        <About />
        <Contact />
      </React.Fragment >
    )
  }
}

export default Portfolio;