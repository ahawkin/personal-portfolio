import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';

const TagList = props => (
  <div className="portfolio__taglist">
    {props.tags.map(tag => (
      <Tag key={tag.id} name={tag.name} />
    ))}
  </div>
);

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default TagList;
