import React from 'react';
import PropTypes from 'prop-types';
import PortfolioTag from './PortfolioTag';

const PortfolioTagList = props => (
  <div className="portfolio__taglist">
    {props.tags.map(tag => (
      <PortfolioTag key={tag.id} name={tag.name} />
    ))}
  </div>
);

PortfolioTagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default PortfolioTagList;
