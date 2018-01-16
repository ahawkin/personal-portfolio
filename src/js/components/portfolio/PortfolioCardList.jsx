import React from 'react';
import PortfolioCard from './PortfolioCard';
import PortfolioTagList from './PortfolioTagList';
import ProjectsData from '../../../data/projects.json';

export default class PortfolioCardList extends React.Component {
  constructor() {
    super();

    this.state = {
      projects: ProjectsData,
    };
  }

  renderProjects() {
    return (
      this.state.projects.map(project => (
        <PortfolioCard
          key={project.id}
          image={project.image.src}
          imageAlt={project.image.alt}
          to={project.link}
        >
          <h4 className="heading-delta">{project.title}</h4>
          <p>{project.summary}</p>
          <PortfolioTagList tags={project.tags} />
          <i className="fa fa-arrow-right" />
        </PortfolioCard>
      ))
    );
  }

  render() {
    return (
      <section className="portfolio__list container">
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
