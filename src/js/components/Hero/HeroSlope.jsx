import React from 'react';
import PropTypes from 'prop-types';

const HeroSlope = props => (
  <span className={`hero__slope hero__slope--${props.modifier}`} />
);

HeroSlope.propTypes = {
  modifier: PropTypes.string.isRequired,
};

export default HeroSlope;
