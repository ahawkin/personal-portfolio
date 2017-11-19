import React from 'react';
import PortfolioCard from './PortfolioCard';

const PortfolioCardList = () => (
  <section className="portfolio__list container">
    <div className="row">
      <div className="col-md-12">
        <h2 className="heading-bravo portfolio__heading">Portfolio</h2>
        <div className="divider divider--light divider--right" />
      </div>
    </div>
    <div className="row">
      <PortfolioCard image="./assets/img/test.png" imageAlt="test" to="#test">
        <h4 className="heading-delta">Foo</h4>
        <p>Foo, bar, Foobar</p>
        <i className="fa fa-arrow-right" />
      </PortfolioCard>
      <PortfolioCard image="./assets/img/test.png" imageAlt="test" to="#test">
        <h4 className="heading-delta">Foo</h4>
        <p>Foo, bar, Foobar</p>
        <i className="fa fa-arrow-right" />
      </PortfolioCard>
    </div>
  </section>
);

export default PortfolioCardList;
