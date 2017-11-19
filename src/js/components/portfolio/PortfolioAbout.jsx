import React from 'react';

const PortfolioAbout = () => (
  <section className="portfolio__about container">
    <div className="row">
      <div className="col-md-12">
        <h2 className="heading-bravo portfolio__heading--left">About Me</h2>
        <div className="divider divider--light divider--left" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <p>
          I am currently working as an
          Associate Software Developer for <a href="https://www.sky.com/">Sky UK</a> in
          Leeds. During my time at University I also worked as a Junior Web Developer for Branded3,
          creating enterprise level CMS websites using Sitecore.
        </p>
        <br />
        <a className="btn btn--primary" href="/cv.pdf">Download CV</a>
      </div>
    </div>
    <div className="row">
      <h3 className="heading-charlie">Skills</h3>
      <div className="col-md-6">
        <ul>
          <li>PHP</li>
          <li>JavaScript</li>
          <li>Node</li>
          <li>C#</li>
        </ul>
      </div>
      <div className="col-md-6">
        <ul>
          <li>ReactJS</li>
          <li>HTML / CSS / SCSS</li>
          <li>Web Development</li>
          <li>Agile</li>
        </ul>
      </div>
      <p>...currently learning Go.</p>
    </div>
    <div className="row">
      <h3 className="heading-charlie">Contact</h3>
      <a className="btn btn--primary btn--inline" href="https://www.linkedin.com/in/adamhawkin">Linkin <i className="btn__icon fa fa-linkedin-square" /></a>
      <a className="btn btn--primary btn--inline" href="https://github.com/ahawkin">Github <i className="btn__icon fa fa-github-square" /></a>
      <a className="btn btn--primary" href="mailto:adamhawkin@hotmail.co.uk">Email <i className="btn__icon fa fa-envelope" /></a>
    </div>
  </section>
);

export default PortfolioAbout;