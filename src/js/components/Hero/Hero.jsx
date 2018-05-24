import React from 'react';
import HeroSlope from './HeroSlope';
import Link from '../Link/Link';
import smoothScroll from '../../utils/smoothScroll';

const Hero = () => (
  <section className="hero">
    <div className="hero__wrapper hero__wrapper--cover">
      <div className="hero__content container">
        <h1 className="heading-a hero__heading">Hello</h1>
        <div className="divider divider--dark divider--hero" />
        <p className="hero__tagline">
          My name is <strong>Adam Hawkin</strong>. <br />
          I&apos;m a Software Engineer from Wakefield. <br />
          <Link
            href="#projects"
            external={false}
            className="btn btn--primary btn--inverted"
            onClick={e => smoothScroll(e, 'projects-section')}
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

