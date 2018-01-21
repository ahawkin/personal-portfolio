import React from 'react';
import scroll from 'smoothscroll-polyfill';
import HeroSlope from './HeroSlope';
import Link from '../Link/Link';

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

const Hero = () => (
  <section className="hero">
    <div className="hero__wrapper hero__wrapper--cover">
      <div className="hero__content container">
        <h1 className="heading-alpha hero__heading">Hello</h1>
        <div className="divider divider--dark divider--hero" />
        <p className="hero__tagline">
          My name is <strong>Adam Hawkin</strong>. <br />
          I&apos;m a Software Engineer from Wakefield. <br />
          <Link
            href="#projects"
            external={false}
            className="btn btn--primary btn--inverted"
            onClick={() => smoothScroll()}
          >
            View Projects <i className="btn__icon fa fa-arrow-down" aria-hidden="true" />
          </Link>
        </p>
      </div>
    </div>
    <div>
      <HeroSlope modifier="first" />
      <HeroSlope modifier="second" />
      <HeroSlope modifier="third" />
      <HeroSlope modifier="forth" />
    </div>
  </section>
);

export default Hero;

