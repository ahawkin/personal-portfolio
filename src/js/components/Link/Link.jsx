import React from 'react';
import PropTypes from 'prop-types';

const Link = (props) => {
  const {
    href, external, className, onClick, id, children,
  } = props;

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={className} id={id} onClick={onClick}>
      {children}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  external: PropTypes.bool,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  external: false,
  id: '',
  onClick: () => {},
};

export default Link;

