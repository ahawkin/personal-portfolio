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
          <div className="col-md-6 portfolio__intro">
            <h3 className="heading-charlie heading-charlie--bottom">Introduction</h3>
            <p>
              {this.state.about.introduction}
            </p>
          </div>
          <div className="col-md-6 portfolio__skills">
            <h3 className="heading-charlie">Skills</h3>
            <div className="col-sm-6">
              <ul>
                {this.renderSkills('set1')}
              </ul>
            </div>
            <div className="col-sm-6">
              <ul>
                {this.renderSkills('set2')}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 portfolio__cv">
            <Link href="./assets/files/cv.pdf" external className="btn btn--primary">
              Download CV <i className="btn__icon fa fa-file-text" />
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
