import React from 'react';
import Link from '../../components/Link/Link';
import AboutData from '../../../data/about.json';

export default class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      about: AboutData,
    };
  }

  renderSkills(setId) {
    return (
      this.state.about.skills[setId].map(skill => (
        <li key={skill.id}>{skill.name}</li>
      ))
    );
  }

  renderContactLinks() {
    return (
      this.state.about.contactLinks.map(contactLink => (
        <Link
          key={contactLink.id}
          href={contactLink.href}
          external={contactLink.external}
          className={contactLink.className}
        >
          {contactLink.content}
          {contactLink.icon ? <i className={contactLink.icon} /> : null}
        </Link>
      ))
    );
  }

  render() {
    return (
      <section id="about-section" className="portfolio__about container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="heading-bravo portfolio__heading--left">About Me</h2>
            <div className="divider divider--light divider--left" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h3 className="heading-charlie heading-charlie--bottom">Introduction</h3>
            <p>
              {this.state.about.introduction}
            </p>
            <br />
            <Link href="./assets/files/cv.pdf" external className="btn btn--primary">
              Download CV
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3 className="heading-charlie">Skills</h3>
            <div className="col-md-6">
              <ul>
                {this.renderSkills('set1')}
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                {this.renderSkills('set2')}
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="heading-charlie">Contact</h3>
            {this.renderContactLinks()}
          </div>
        </div>
      </section>
    );
  }
}
