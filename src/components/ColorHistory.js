import React from 'react';
import _ from 'lodash';

const ColorHistory = ({text, array}) => {

  return (
    <div className="history-container">
      <p>{text}</p>
      {_.map(array,(item) => (
        <div className="history-color" key={item.id} style={{backgroundColor: `rgb(${item.value})`}}></div>
      ))}
    </div>
  );
};

export default ColorHistory;
