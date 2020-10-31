import React, { useState } from 'react';

import ImageSelector from '../ImageSelector';
import ImageResizer from '../ImageResizer';

import './style.scss';

const App = () => {
  const [imageSource, setImageSource] = useState('');

  const onDrop = pictures => {
    setImageSource(URL.createObjectURL(pictures[0]));
  };

  return (
    <div className="app">
      {imageSource ? (
        <ImageResizer source={imageSource} />
      ) : (
        <ImageSelector onSelect={onDrop} />
      )}
    </div>
  );
};

export default App;
