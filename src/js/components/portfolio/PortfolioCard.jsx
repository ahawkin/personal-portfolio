import React from 'react';
import PropTypes from 'prop-types';

const PortfolioCard = props => (
  <div className="col-md-6 col-lg-6 portfolio__card">
    <a href={props.to} className="portfolio__card__content" target="_blank" rel="noopener noreferrer">
      <div className="portfolio__card__img">
        <img className="img-responsive" src={props.image} alt={props.imageAlt} />
      </div>
      <div className="portfolio__card__body">
        {props.children}
      </div>
    </a>
  </div>
);

PortfolioCard.propTypes = {
  to: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PortfolioCard;
