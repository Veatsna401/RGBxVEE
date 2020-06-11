import React, { useState } from 'react';
import Box from './Box';
import ColorHistory from './ColorHistory';
import Button from './Button';
import _ from 'lodash';

const ColorBox = () => {
  const [bgColor, setBgColor] = useState("255, 255, 255");
  const [textHint, setTextHint] = useState("Click to get started");
  const [items, setItems] = useState([]);

  const generateRandRgbColor = () => {
    return `${_.random(255)}, ${_.random(255)}, ${_.random(255)}`;
  }
  const addItem = () => {
    setItems(
      _.concat(items,
        {
          id: items.length,
          value: `${bgColor}`
        }
      )
    );
  };
  const changeBgColor = () => {
    setBgColor(generateRandRgbColor());
    setTextHint("");
    addItem();
  }

  return (
    <div className="container">
      <Box rgbColor={bgColor}/>
      <ColorHistory text={textHint} array={items}/>
      <Button onClick={() => changeBgColor()} btnText="Change Color"/>
    </div>
  );
}

export default ColorBox;
