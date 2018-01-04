import React from 'react';
import PropTypes from 'prop-types';

const Hero = (props) => {
  const {
    slopes, type, heading, children,
  } = props;

  const renderSlopes = () => {
    if (slopes) {
      return (
        <div>
          <span className="hero__slope hero__slope--first" />
          <span className="hero__slope hero__slope--second" />
          <span className="hero__slope hero__slope--third" />
          <span className="hero__slope hero__slope--forth" />
        </div>
      );
    }

    return null;
  };

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
      {renderSlopes()}
    </section>
  );
};

Hero.propTypes = {
  heading: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  slopes: PropTypes.bool,
  children: PropTypes.node,
};

Hero.defaultProps = {
  slopes: false,
  children: [],
};

export default Hero;

