import React from 'react';
import PropTypes from 'prop-types';
import ImageUploader from 'react-images-upload';

import './style.scss';

const ImageSelector = (props) => {
  const { onSelect } = props;

  return (
    <div className='image-selector'>
      <h1>Crop IMAGE</h1>
      <p>Crop <b>JPG</b> or <b>PNG</b> by defining a rectangle in pixels.</p>
      <p>Cut your image online.</p>
      <ImageUploader
        withIcon={false}
        withLabel={false}
        buttonText='Select image'
        onChange={onSelect}
        imgExtension={['.jpg', '.png']}
        maxFileSize={5242880}
        buttonClassName='select-image-btn'
        fileContainerStyle={{
          backgroundColor: '#f3f0ec',
          boxShadow: 'none',
          padding: 0,
        }}
      />
    </div>
  );
};

ImageSelector.propTypes = {
  onSelect: PropTypes.func,
};

export default ImageSelector;
