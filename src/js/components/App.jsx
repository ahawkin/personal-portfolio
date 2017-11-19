import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './common/Navigation';
import PortfolioHome from './portfolio/PortfolioHome';
import Footer from './common/Footer';

const App = props => (
  <div>
    <header>
      <Navigation />
    </header>
    <PortfolioHome />
    <Footer />
  </div>
);

export default App;
