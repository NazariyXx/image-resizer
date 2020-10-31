import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

import Option from './Option';

import SettingsIcon from '../../assets/icons/settings.svg';

import './style.scss';

const ImageResizer = (props) => {
  const { source } = props;

  // Form input values
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  // Transformation ratios for drawing UI area similar to natural sizes
  const [widthRatio, setWidthRatio] = useState(0);
  const [heightRatio, setHeightRatio] = useState(0);

  // Actual sizes of image
  const [naturalWidth, setNaturalWidth] = useState(0);
  const [naturalHeight, setNaturalHeight] = useState(0);

  const [showOptions, setShowOptions] = useState(false);

  const imageRef = useRef(null);
  const canvasRef = useRef(null);

  // Updating ratios each time window was resized
  const updateDimensions = useCallback(
    () => {
      if (imageRef.current) {
        setWidthRatio(imageRef.current.width * 100 / imageRef.current.naturalWidth);
        setHeightRatio(imageRef.current.height * 100 / imageRef.current.naturalHeight);
      }
    },
    [],
  );

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [updateDimensions]);

  const widthHandler = useCallback(
    ({ target }) => {
      const value = parseInt(target.value, 10);
      const min = parseInt(target.min, 10);

      if (target.validity.valid) {
        if (value >= min) {
          if (value <= naturalWidth) {
            setWidth(value);

            const posX = Math.round(naturalWidth - value);

            if (positionX > posX) {
              setPositionX(posX);
            }
          } else {
            setWidth(naturalWidth);
            setPositionX(Math.round(0));
          }
        } else {
          setWidth(min);
        }
      }
    },
    [naturalWidth, positionX],
  );

  const heightHandler = useCallback(
    ({ target }) => {
      const value = parseInt(target.value, 10);
      const min = parseInt(target.min, 10);

      if (target.validity.valid) {
        if (value >= min) {
          if (value <= naturalHeight) {
            setHeight(value);

            const posY = Math.round(naturalHeight - value);

            if (positionY > posY) {
              setPositionY(posY);
            }
          } else {
            setHeight(naturalHeight);
            setPositionY(0);
          }
        } else {
          setHeight(min);
        }
      }
    },
    [naturalHeight, positionY],
  );

  const positionXHandler = useCallback(
    ({ target }) => {
      const value = parseInt(target.value, 10);
      const min = parseInt(target.min, 10);

      if (target.validity.valid) {
        if (value >= min) {
          if (value <= naturalWidth - width) {
            setPositionX(value);
          } else {
            setPositionX(Math.round(naturalWidth - width));
          }
        } else {
          setPositionX(min);
        }
      }
    },
    [naturalWidth, width],
  );

  const positionYHandler = useCallback(
    ({ target }) => {
      const value = parseInt(target.value, 10);
      const min = parseInt(target.min, 10);

      if (target.validity.valid) {
        if (value >= min) {
          if (value <= naturalHeight - height) {
            setPositionY(value);
          } else {
            setPositionY(Math.round(naturalHeight - height));
          }
        } else {
          setPositionY(min);
        }
      }
    },
    [naturalHeight, height],
  );

  const onLoad = useCallback(
    () => {
      const { width: areaWidth, height: areaHeight, naturalWidth, naturalHeight } = imageRef.current;
      const width = Math.round(naturalWidth * 80 / 100);
      const height = Math.round(naturalHeight * 80 / 100);

      setWidth(width);
      setHeight(height);
      setNaturalWidth(naturalWidth);
      setNaturalHeight(naturalHeight);
      setPositionX(Math.round((naturalWidth - width) / 2));
      setPositionY(Math.round((naturalHeight - height) / 2));
      setWidthRatio(areaWidth * 100 / naturalWidth);
      setHeightRatio(areaHeight * 100 / naturalHeight);
    },
    [],
  );

  const cropImage = useCallback(
    () => {
      if (canvasRef.current) {
        const context = canvasRef.current.getContext('2d');

        // Refreshing canvas cropped image
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        context.drawImage(
          imageRef.current,
          positionX,
          positionY,
          width,
          height,
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height,
        );

        // Url ready to download cropped image
        const croppedImageUrl = canvasRef.current.toDataURL('image/jpg', 90);
        const link = document.createElement('a');

        link.href = croppedImageUrl;
        link.setAttribute(
          'download',
          `w-${width}-h-${height}`,
        );

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
      }
    },
    [positionX, positionY, width, height],
  );

  const toggleOptions = useCallback(
    () => {
      setShowOptions((prevShowOptions) => !prevShowOptions);
    },
    [],
  );
  // Transforming natural numbers into UI compatible
  const areaWidth = useMemo(() => width * widthRatio / 100, [width, widthRatio]);
  const areaHeight = useMemo(() => height * heightRatio / 100, [height, heightRatio]);
  const areaPositionX = useMemo(() => positionX * widthRatio / 100, [positionX, widthRatio]);
  const areaPositionY = useMemo(() => positionY * heightRatio / 100, [positionY, heightRatio]);

  return (
    <div className='image-resizer'>
      <div className='editable-area'>
        <div className='image-container'>
          <img ref={imageRef} className='image' src={source} onLoad={onLoad} alt='Resizable area' />
          <canvas ref={canvasRef} width={width} height={height}></canvas>
          <div className='crop-area' style={{
            width: areaWidth,
            height: areaHeight,
            transform: `translate(${areaPositionX}px, ${areaPositionY}px)`,
          }}></div>
        </div>
      </div>

      <div className={`options-menu-toggler ${showOptions ? 'options-menu-toggler-active' : ''}`}>
        <img onClick={toggleOptions} src={SettingsIcon} />
      </div>

      <div className={`options-menu ${showOptions ? 'options-menu-active' : ''}`}>
        <h2>Crop options</h2>

        <Option
          property='Width'
          value={width}
          onChange={widthHandler}
          minValue={1}
        />
        <Option
          property='Height'
          value={height}
          onChange={heightHandler}
          minValue={1}
        />
        <Option
          property='Position X'
          value={positionX}
          onChange={positionXHandler}
          minValue={0}
        />
        <Option
          property='Position Y'
          value={positionY}
          onChange={positionYHandler}
          minValue={0}
        />
      </div>

      <button className='crop-image-btn' onClick={cropImage}>Crop IMAGE</button>
    </div>
  );
};

ImageResizer.propTypes = {
  source: PropTypes.string,
};

export default ImageResizer;
