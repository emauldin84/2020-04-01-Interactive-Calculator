import React, { useState } from 'react';
import './App.css';

import ShapeForm from './components/ShapeForm'
import ShapeDisplay from './components/ShapeDisplay'

function App() {

  const [shape, setShape] = useState(null)
  const [width, setWidth] = useState(null)
  const [height, setHeight] = useState(null)
  const [color, setColor] = useState(null)


  return (
    <div className="App">
        <ShapeForm shape={shape} setShape={setShape}/>
        <ShapeDisplay shape={shape}/>
    </div>
  );
}

export default App;
