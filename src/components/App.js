import React from 'react';
import ColorBox from './ColorBox';
import './App.scss';

export const App = () => {
  return (
    <div>
      <div className="headline">
        <h1>COLOR</h1>
        <p>Let's generate a random color</p>
      </div>
      <ColorBox />
    </div>
  );
}

export default App;
