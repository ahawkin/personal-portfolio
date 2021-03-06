import React from 'react';
import Projects from './containers/Projects/Projects';
import About from './containers/About/About';
import Navigation from './containers/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';

const App = () => (
  <div>
    <header>
      <Navigation />
    </header>
    <main className="portfolio">
      <Hero />
      <Projects />
      <About />
    </main>
    <Footer />
  </div>
);

export default App;
