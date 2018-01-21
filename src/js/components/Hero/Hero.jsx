import React from 'react';
import PropTypes from 'prop-types';
import HeroSlope from './HeroSlope';

const Hero = (props) => {
  const { type, heading, children } = props;

  return (
    <section className="hero">
      <div className={`hero__wrapper hero__wrapper--${type}`}>
        <div className="hero__content container">
          <h1 className="heading-alpha hero__heading">{heading}</h1>
          <div className="divider divider--dark divider--hero" />
          <p className="hero__tagline">
            {children}
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
};

Hero.propTypes = {
  heading: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Hero;

