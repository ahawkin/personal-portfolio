import React from 'react';
import Navigation from './common/Navigation';
import PortfolioHome from './portfolio/PortfolioHome';
import Footer from './common/Footer';

const App = () => (
  <div>
    <header>
      <Navigation />
    </header>
    <PortfolioHome />
    <Footer />
  </div>
);

export default App;
