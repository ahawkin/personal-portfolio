import React from 'react';
import Hero from '../common/Hero';
import PortfolioCardList from './PortfolioCardList';
import PortfolioAbout from './PortfolioAbout';

const PortfolioHome = () => (
  <main className="portfolio">
    <Hero heading="Hello" type="cover" slopes>
      My name is <strong>Adam Hawkin</strong>. <br />
      I&apos;m a Software Engineer from Wakefield. <br />
      <a href="#portfolio" className="btn btn--primary btn--inverted">
        View Portfolio <i className="btn__icon fa fa-arrow-down" aria-hidden="true" />
      </a>
    </Hero>
    <PortfolioCardList />
    <PortfolioAbout />
  </main>
);

export default PortfolioHome;
