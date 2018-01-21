import React from 'react';
import Card from '../../components/Card/Card';
import TagList from '../../components/Tag/TagList';
import ProjectsData from '../../../data/projects.json';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: ProjectsData,
    };
  }

  renderProjects() {
    return (
      this.state.projects.map(project => (
        <Card
          key={project.id}
          image={project.image.src}
          imageAlt={project.image.alt}
          to={project.link}
        >
          <h4 className="heading-delta">{project.title}</h4>
          <p>{project.summary}</p>
          <TagList tags={project.tags} />
          <i className="fa fa-arrow-right" />
        </Card>
      ))
    );
  }

  render() {
    return (
      <section id="projects-section" className="portfolio__list container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="heading-bravo portfolio__heading">Projects</h2>
            <div className="divider divider--light divider--right" />
          </div>
        </div>
        <div className="row">
          {this.renderProjects()}
        </div>
      </section>
    );
  }
}
