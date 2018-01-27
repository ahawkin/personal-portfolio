import React from 'react';
import Link from '../../components/Link/Link';
import smoothScroll from '../../utils/smoothScroll';
import NavigationData from '../../../data/navigation.json';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: false,
      navigation: NavigationData,
    };

    this.toggleNavigation = this.toggleNavigation.bind(this);
  }

  toggleNavigation(event, scroll) {
    event.preventDefault();

    if (scroll) {
      smoothScroll(event, null);
    }

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

  renderNavigationList(navigationId, onClick) {
    return (
      this.state.navigation[navigationId].map(navItem => (
        <li key={navItem.id} className="nav-item">
          <Link
            id={navItem.id}
            href={navItem.href}
            external={navItem.external}
            className={navItem.className}
            onClick={onClick}
          >
            {navItem.icon ? <i className={navItem.icon} /> : null}
            {navItem.content}
          </Link>
        </li>
      ))
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
              onClick={e => this.toggleNavigation(e, false)}
            >
              {this.renderButtonIcon()}
            </button>
            <a className="navbar-brand" href="/">AH</a>
          </div>
          <div id="navbar" className={this.state.toggled ? 'navbar-collapse navbar-collapse--show' : 'navbar-collapse navbar-collapse--hide'}>
            <ul className="nav navbar-nav">
              {
                this.renderNavigationList('navigationLeft', this.state.toggled ? e => this.toggleNavigation(e, true) : e => smoothScroll(e, null))
              }
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {this.renderNavigationList('navigationRight')}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
