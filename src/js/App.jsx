import React from 'react';
import scroll from 'smoothscroll-polyfill';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Projects from './containers/Projects/Projects';
import About from './containers/About/About';
import Navigation from './containers/Navigation/Navigation';

const smoothScroll = () => {
  scroll.polyfill();

  const element = document.getElementById('projects-section');

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
};

const App = () => (
  <div>
    <header>
      <Navigation />
    </header>
    <main className="portfolio">
      <Hero heading="Hello" type="cover" slopes>
        My name is <strong>Adam Hawkin</strong>. <br />
        I&apos;m a Software Engineer from Wakefield. <br />
        <a
          href="#projects"
          onClick={() => smoothScroll()}
          className="btn btn--primary btn--inverted"
        >
          View Projects <i className="btn__icon fa fa-arrow-down" aria-hidden="true" />
        </a>
      </Hero>
      <Projects />
      <About />
    </main>
    <Footer />
  </div>
);

export default App;
