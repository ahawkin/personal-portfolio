import React from 'react';
import scroll from 'smoothscroll-polyfill';
import Hero from '../common/Hero';
import PortfolioCardList from './PortfolioCardList';
import PortfolioAbout from './PortfolioAbout';

const smoothScroll = () => {
  scroll.polyfill();

  const element = document.getElementById('projects-section');

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
};

const PortfolioHome = () => (
  <main className="portfolio">
    <Hero heading="Hello" type="cover" slopes>
      My name is <strong>Adam Hawkin</strong>. <br />
      I&apos;m a Software Engineer from Wakefield. <br />
      <a
        href="#portfolio"
        onClick={() => smoothScroll()}
        className="btn btn--primary btn--inverted"
      >
        View Projects <i className="btn__icon fa fa-arrow-down" aria-hidden="true" />
      </a>
    </Hero>
    <PortfolioCardList />
    <PortfolioAbout />
  </main>
);

export default PortfolioHome;
