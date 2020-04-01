import React, { useState } from 'react';
import './App.css';

import ShapeForm from './components/ShapeForm'
import ShapeDisplay from './components/ShapeDisplay'

function App() {

  const [shape, setShape] = useState('')
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [color, setColor] = useState('#ff2600')


  return (
    <div className="App">
        <ShapeForm 
          shape={shape} 
          setShape={setShape} 
          width={width} 
          setWidth={setWidth} 
          heigth={height} 
          setHeight={setHeight} 
          color={color}
          setColor={setColor}
          />
        <ShapeDisplay 
          shape={shape} 
          width={width} 
          height={height} 
          color={color}
        />
    </div>
  );
}

export default App;
