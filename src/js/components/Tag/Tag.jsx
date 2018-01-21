import React from 'react';
import PropTypes from 'prop-types';

const PortfolioTag = props => (
  <span className="portfolio__taglist__item">
    {props.name}
  </span>
);

PortfolioTag.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PortfolioTag;
