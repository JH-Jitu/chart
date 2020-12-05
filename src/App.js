import React, { useState } from 'react';
import './App.css';
import Donut from './Components/Donut/Donut';
import LineCt from './Components/LineCt/LineCt';



function App() {


  return (
    <div className="App">
      <div className="container">
      <LineCt></LineCt>
      <br/>
      <Donut></Donut>

    </div></div>
  );
}

export default App;
