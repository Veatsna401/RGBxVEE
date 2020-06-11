// import React from 'react';
// import Box from './components/Box';
// import Button from './components/Button';
// import { useState } from 'react';
// import './App.css';
//
// function App() {
//   const [bgColor, setColor] = useState(255, 255, 255);
//   // const [count, setCount] = useState(1);
//   // const changeColor = () => {
//     // template literals
//     // $ is string interpolation
//     // setColor(`color-box-${count}`);
//     // setCount(count < 3 ? (count + 1) : (1));
//   // };
//
//   // const randomNumberGenerator = () => {
//   //   return Math.floor(Math.random() * 255);
//   // }

// const historyBox = () => {
//   const element = (
//     <div>
//       <h1>TEST-BOX</h1>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('history'));
// }
//
//   const randomColorGenerator = () => {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);
//     let rgb = red + `,` + green + `,` + blue;
//     return rgb;
//   }
//
//   const changeBgColor = () => {
//     setColor(randomColorGenerator());
//   }
//
//   return (
//     <div className="App">
//       <Box rgbColor={bgColor}/>
//       <Button onClick={() => changeBgColor()} />
//     </div>
//   );
// }

// import ColorHistory from './ColorHistory';

// export default App;
