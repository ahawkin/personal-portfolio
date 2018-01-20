import React from 'react';
import scroll from 'smoothscroll-polyfill';
import NavigationItem from './NavigationItem';

const smoothScroll = (event) => {
  scroll.polyfill();

  const sectionId = `${event.currentTarget.id}-section`;
  const element = document.getElementById(sectionId.toLowerCase());

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
};

export default class Navigation extends React.Component {
  constructor() {
    super();

    this.state = {
      toggled: false,
    };

    this.toggleNavigation = this.toggleNavigation.bind(this);
  }

  toggleNavigation() {
    this.setState(prevState => ({
      toggled: !prevState.toggled,
    }));
  }

  renderButtonIcon() {
    if (this.state.toggled) {
      return (
        <div className="navbar-toggle__icon navbar-toggle__icon--close">
          <i className="fa fa-times" />
        </div>
      );
    }

    return (
      <div className="navbar-toggle__icon">
        <i className="fa fa-bars" />
      </div>
    );
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              onClick={this.toggleNavigation}
            >
              {this.renderButtonIcon()}
            </button>
            <a className="navbar-brand" href="/">AH</a>
          </div>
          <div id="navbar" className={this.state.toggled ? 'navbar-collapse navbar-collapse--show' : 'navbar-collapse navbar-collapse--hide'}>
            <ul className="nav navbar-nav">
              <NavigationItem to="#projects" name="Projects" handleEvent={e => smoothScroll(e)} />
              <NavigationItem to="#about" name="About" handleEvent={e => smoothScroll(e)} />
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <NavigationItem to="http://uk.linkedin.com/in/adamhawkin" icon="fa fa-linkedin-square" external />
              <NavigationItem to="https://github.com/ahawkin" icon="fa fa-github-square" external />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
