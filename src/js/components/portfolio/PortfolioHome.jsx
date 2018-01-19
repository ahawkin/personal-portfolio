import React from 'react';
import scroll from 'smoothscroll-polyfill';
import Hero from '../common/Hero';
import PortfolioCardList from './PortfolioCardList';
import PortfolioAbout from './PortfolioAbout';

export default class PortfolioHome extends React.Component {
  smoothScroll() {
    scroll.polyfill();

    const element = document.getElementById('projects-section');

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }

  render() {
    return (
      <main className="portfolio">
        <Hero heading="Hello" type="cover" slopes>
          My name is <strong>Adam Hawkin</strong>. <br />
          I&apos;m a Software Engineer from Wakefield. <br />
          <a href="#portfolio" onClick={this.smoothScroll} className="btn btn--primary btn--inverted">
            View Projects <i className="btn__icon fa fa-arrow-down" aria-hidden="true" />
          </a>
        </Hero>
        <PortfolioCardList />
        <PortfolioAbout />
      </main>
    );
  }
}

