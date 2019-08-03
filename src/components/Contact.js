import React from 'react';

function Contact() {
  return (
    <footer className="contact text-center">
      <h2 className="header-font section-title letter-space pt-5">CONTACT ME</h2>
      <h4 className="main-font">Feel free to reach out below!</h4>
      <a className="button btn btn-lg main-font" href="mailto:camilia.mzali@gmail.com">
        <i className="far fa-envelope fa-lg pr-2"></i>
        Get in touch
  </a>
      <div className="pb-5">
        <a className="btn-sm mx-3" href="https://www.linkedin.com/in/camilia-mzali">
          <i className="fab fa-linkedin-in fa-3x"></i>
        </a>
        <a className="btn-sm mx-3" href="https://github.com/camiliamzali">
          <i className="fab fa-github fa-3x"></i>
        </a>
        <a className="btn-sm mx-3" href="https://stackoverflow.com/users/story/9318642">
          <i className="fab fa-stack-overflow fa-3x"></i>
        </a>
      </div>
    </footer >
  )
}

export default Contact;