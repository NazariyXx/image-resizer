import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Option = (props) => {
  const { property, onChange, value, minValue, onBlur, onClick } = props;

  return (
    <div className='option'>
      <label htmlFor={property}>{property} (px)</label>
      <input
        type='number'
        pattern='[0-9]*'
        min={minValue}
        id={property}
        value={Number(value).toString()}
        onChange={onChange}
        onBlur={onBlur}
        onClick={onClick}
      />
    </div>
  );
};

Option.propTypes = {
  property: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.number,
  minValue: PropTypes.number,
};

export default Option;
