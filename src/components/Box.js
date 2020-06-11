import React from 'react';

const Box = ({rgbColor}) => {
  const boxStyle = {backgroundColor: `rgb(${rgbColor})`};

  return (
    <div>
      <div className="color-box" style={boxStyle}>
        <h1>RGB: {rgbColor}</h1>
      </div>
    </div>
  );
};

export default Box;
