import React from 'react';

function About() {
  return (
    <section className="about py-5 text-light">
      <h2 className="header-font text-center section-title letter-space mb-5">ABOUT ME</h2>
      <div className="row mx-0">
        <img className="rounded-circle p-0 mx-auto mb-5 photo" src="/images/me.jpg" alt="Camilia Mzali" />

        <div className="container col-9 align-self-center">
          <p className="main-font">I am a graduate of Rutgers Fullstack Coding Bootcamp with a strong passion for technology. I am a web developer with experience primarily in Javascript with a strong interest in React and other front-end frameworks. Over the last decade, I’ve explored different fields of technology such as graphic and web design, software development and IT. After a few years working in the veterinary industry, I decided to take the reigns and jump into the world of web development permanently.</p>
        </div>
      </div>
    </section>
  )
}

export default About;