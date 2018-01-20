import React from 'react';
import PropTypes from 'prop-types';

const NavigationItem = (props) => {
  if (props.external) {
    return (
      <li className="nav-item">
        <a className="nav-item__link" target="_blank" rel="noopener noreferrer" href={props.to}>
          <i className={props.icon} />
          {props.name}
        </a>
      </li>
    );
  }

  return (
    <li className="nav-item">
      <a className="nav-item__link" href={props.to} id={props.name} onClick={props.handleEvent}>
        <i className={props.icon} />
        {props.name}
      </a>
    </li>
  );
};

NavigationItem.propTypes = {
  external: PropTypes.bool,
  to: PropTypes.string.isRequired,
  icon: PropTypes.string,
  name: PropTypes.string,
  handleEvent: PropTypes.func,
};

NavigationItem.defaultProps = {
  external: false,
  icon: '',
  name: '',
  handleEvent: () => {},
};

export default NavigationItem;
