import React, { useState } from 'react';
import './App.css';
import Body from './Components/Body/Body';
import LineCt from './Components/LineCt/LineCt';
import Navbar from './Components/Navbar/Navbar';
import StatsBar from './Components/Navbar/StatsBar';



function App() {


  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container">
        <StatsBar></StatsBar>
      <LineCt></LineCt>
      <br/>
      <Body></Body>

    </div></div>
  );
}

export default App;
