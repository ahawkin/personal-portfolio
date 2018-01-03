import React from 'react';
import PropTypes from 'prop-types';

const NavigationItem = (props) => {
  if (props.external) {
    return (
      <li>
        <a target="_blank" rel="noopener noreferrer" href={props.to}>
          <i className={props.icon} />
          {props.name}
        </a>
      </li>
    );
  }

  return (
    <li>
      <a href={props.to}>
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
};

NavigationItem.defaultProps = {
  external: false,
  icon: '',
  name: '',
};

export default NavigationItem;
